// Cockpit redesign layered on top of the original HMS Ladder MVP.
const cockpit$=id=>document.getElementById(id);
let cockpitShowLocked=false;
let cockpitLastSessionIndex=null;
const cockpitBaseStopTimer=stopTimer;
const cockpitBaseAddManual=addManual;

function cockpitEnsureData(){
  if(!Array.isArray(data.activeTargets)) data.activeTargets=[];
  if(typeof data.weeklyPriority!=='string') data.weeklyPriority='';
  data.activeTargets=data.activeTargets.filter(cockpitValidTarget).slice(0,3);
}
function cockpitParseKey(k){const [field,module,cycle]=k.split('||');return{field,module,cycle}}
function cockpitFindCycle(field,module,cycle){return HMS[field]?.[module]?.find(c=>c.label===cycle)}
function cockpitValidTarget(k){const p=cockpitParseKey(k);return !!cockpitFindCycle(p.field,p.module,p.cycle)?.released}
function cockpitState(k){return data.cycleStates[k]||'not-started'}
function cockpitMatches(s,k){const p=cockpitParseKey(k);return s.field===p.field&&s.module===p.module&&s.cycle===p.cycle}
function cockpitMinutesFor(k,sessions=data.sessions){return sumMinutes(sessions.filter(s=>cockpitMatches(s,k)))}
function cockpitShortDate(d){return new Intl.DateTimeFormat(undefined,{month:'short',day:'numeric'}).format(d)}

function cockpitSelectPath(field,module,cycle,focus=''){
  cockpit$('fieldSelect').value=field;populateModules();
  cockpit$('moduleSelect').value=module;populateCycles();
  const i=Math.max(0,(HMS[field]?.[module]||[]).findIndex(c=>c.label===cycle));
  cockpit$('cycleSelect').value=String(i);cockpit$('focusInput').value=focus;updateTimerClassification();
}
function cockpitStartKey(k){
  if(data.activeTimer){showTab('practice');return}
  const p=cockpitParseKey(k);cockpitSelectPath(p.field,p.module,p.cycle);startTimer();showTab('practice');
}
function cockpitStartSession(s){
  if(data.activeTimer){showTab('practice');return}
  cockpitSelectPath(s.field,s.module,s.cycle,s.focus||'');startTimer();showTab('practice');
}
function cockpitToggleTarget(k){
  cockpitEnsureData();
  const i=data.activeTargets.indexOf(k);
  if(i>=0)data.activeTargets.splice(i,1);
  else{
    if(data.activeTargets.length>=3){alert('Keep the active queue to 3 cycles. Unpin one first.');return}
    data.activeTargets.push(k);
  }
  save();renderAll();
}

renderDashboard=function(){
  cockpitEnsureData();
  const ws=sessionsThisWeek(),wm=sumMinutes(ws),target=Math.max(1,Number(data.weeklyTarget)||360);
  cockpit$('weekMinutes').textContent=wm;
  cockpit$('weekTargetInline').textContent=target;
  cockpit$('weekProgress').style.width=`${Math.min(100,wm/target*100)}%`;
  cockpit$('weekProgressText').textContent=`${wm} / ${target} min · 1 XP = 1 minute`;
  cockpit$('creditCount').textContent=countStates().passed;

  const targets=data.activeTargets.filter(cockpitValidTarget);
  cockpit$('activeQuestList').innerHTML=targets.length?targets.map(k=>{
    const p=cockpitParseKey(k),state=cockpitState(k),mins=cockpitMinutesFor(k,ws);
    return `<div class="quest-card"><div><div class="quest-state">${STATE_LABELS[state]}</div><div class="quest-title">${esc(p.module)} · ${esc(p.cycle)}</div><div class="quest-meta">${esc(p.field)} · ${mins} min this week</div></div><div class="quest-actions"><button class="primary quest-start" data-k="${esc(k)}">Start</button><button class="ghost quest-unpin" data-k="${esc(k)}">Unpin</button></div></div>`;
  }).join(''):`<div class="empty-quest">Pin up to 3 cycles in Progress. Keep the curriculum broad; keep the current queue narrow.</div>`;
  document.querySelectorAll('.quest-start').forEach(b=>b.onclick=()=>cockpitStartKey(b.dataset.k));
  document.querySelectorAll('.quest-unpin').forEach(b=>b.onclick=()=>cockpitToggleTarget(b.dataset.k));

  const sorted=[...data.sessions].sort((a,b)=>new Date(b.endedAt)-new Date(a.endedAt));
  const seen=new Set(),recent=[];
  for(const s of sorted){const k=key(s.field,s.module,s.cycle);if(!seen.has(k)){seen.add(k);recent.push(s)}if(recent.length===3)break}
  cockpit$('resumeRecent').innerHTML=recent.length?recent.map((s,i)=>`<button class="resume-btn" data-i="${i}"><strong>${esc(s.module)}</strong><span>${esc(s.field)} · ${esc(s.cycle)}</span></button>`).join(''):`<div class="muted small">Your recent practice shortcuts will appear here.</div>`;
  document.querySelectorAll('.resume-btn').forEach(b=>b.onclick=()=>cockpitStartSession(recent[Number(b.dataset.i)]));

  const candidates=[];
  Object.entries(HMS).forEach(([field,mods])=>Object.entries(mods).forEach(([module,cycles])=>cycles.forEach(cyc=>{
    if(!cyc.released)return;
    const k=key(field,module,cyc.label),state=cockpitState(k);if(state==='passed')return;
    const idx=STATES.indexOf(state),mins=cockpitMinutesFor(k);
    if(idx>0||data.activeTargets.includes(k)||mins>0)candidates.push({field,module,cycle:cyc.label,state,idx,mins});
  })));
  candidates.sort((a,b)=>b.idx-a.idx||b.mins-a.mins);
  const closest=candidates[0];
  cockpit$('closestCredit').innerHTML=closest?`${esc(closest.module)} · ${esc(closest.cycle)}<div class="muted small" style="margin-top:4px">${STATE_LABELS[closest.state]} · ${closest.mins} min logged</div>`:'None active yet';

  const by=Object.fromEntries(Object.keys(HMS).map(f=>[f,0]));
  ws.forEach(s=>by[s.field]=(by[s.field]||0)+Number(s.minutes||0));
  const max=Math.max(1,...Object.values(by));
  cockpit$('domainBars').innerHTML=Object.entries(by).map(([f,v])=>`<div class="bar-row"><span>${esc(f)}</span><div class="bar-track"><div class="bar-fill" style="width:${v/max*100}%"></div></div><span class="right">${v}</span></div>`).join('');

  const weekStart=startOfWeek(),weekEnd=new Date(weekStart);weekEnd.setDate(weekEnd.getDate()+6);
  cockpit$('weekRange').textContent=`${cockpitShortDate(weekStart)}–${cockpitShortDate(weekEnd)}`;
  const days=new Set(ws.map(s=>new Date(s.endedAt||s.startedAt).toDateString())).size;
  const avg=ws.length?Math.round(wm/ws.length):0;
  cockpit$('weeklySummary').innerHTML=`<div class="review-stat"><span class="muted small">XP</span><strong>${wm}</strong></div><div class="review-stat"><span class="muted small">Sessions</span><strong>${ws.length}</strong></div><div class="review-stat"><span class="muted small">Days</span><strong>${days}</strong></div><div class="review-stat"><span class="muted small">Avg</span><strong>${avg}m</strong></div>`;
  cockpit$('priorityInput').value=data.weeklyPriority||'';

  const rec=sorted.slice(0,5);
  cockpit$('recentSessions').className='list'+(rec.length?'':' empty-state');
  cockpit$('recentSessions').innerHTML=rec.length?rec.map(s=>`<div class="session-item"><div class="row between"><div class="session-title">${esc(s.field)} · ${esc(s.module)}</div><strong>${s.minutes}m</strong></div><div class="muted small">${esc(s.cycle||'')} ${s.focus?'· '+esc(s.focus):''} · ${fmtDate(s.endedAt)}</div>${s.note?`<div class="session-note">${esc(s.note)}</div>`:''}</div>`).join(''):'No sessions yet.';
};

renderTree=function(){
  cockpitEnsureData();
  cockpit$('treeCreditCount').textContent=countStates().passed;
  cockpit$('showLockedToggle').checked=cockpitShowLocked;
  cockpit$('skillTree').innerHTML=Object.entries(HMS).map(([field,mods])=>{
    const modules=Object.entries(mods).map(([mod,cycles])=>{
      const visible=cockpitShowLocked?cycles:cycles.filter(c=>c.released);if(!visible.length)return '';
      const cycleHtml=visible.map(cyc=>{
        const k=key(field,mod,cyc.label),state=cockpitState(k),pinned=data.activeTargets.includes(k);
        return `<div class="cycle-wrap ${cyc.released?'':'locked-group'}">${cyc.released?`<button class="pin-btn ${pinned?'active':''}" data-pin="${esc(k)}" aria-label="${pinned?'Unpin':'Pin'}">${pinned?'●':'○'}</button>`:''}<button class="cycle ${cyc.released?'':'locked'}" data-k="${esc(k)}" data-state="${state}" ${cyc.released?'':'disabled'}>${esc(cyc.label)}<br><span>${cyc.released?STATE_LABELS[state]:'Locked'}</span></button></div>`;
      }).join('');
      return `<div class="module"><div class="module-name">${esc(mod)}</div><div class="cycles">${cycleHtml}</div><div class="cycle-note">${cycles.some(x=>x.released)?'Tap a cycle to advance readiness. Pin up to 3 to your Home queue.':'Exam criteria to be released.'}</div></div>`;
    }).join('');
    if(!modules.trim())return '';
    return `<div class="field-card"><div class="field-head"><div><div class="field-title">${esc(field)}</div><div class="muted small">${fieldCredits(field)} credits</div></div><div class="metric" style="font-size:20px">${fieldCredits(field)}</div></div><div class="module-list">${modules}</div></div>`;
  }).join('');
  document.querySelectorAll('.cycle:not(.locked)').forEach(btn=>btn.onclick=()=>advanceState(btn.dataset.k));
  document.querySelectorAll('.pin-btn').forEach(btn=>btn.onclick=e=>{e.stopPropagation();cockpitToggleTarget(btn.dataset.pin)});
};

advanceState=function(k){
  const cur=cockpitState(k);
  if(cur==='passed'){
    if(confirm('This cycle is already passed. Reset it to Not started?')){data.cycleStates[k]='not-started';save();renderAll()}
    return;
  }
  const next=STATES[STATES.indexOf(cur)+1];data.cycleStates[k]=next;save();renderAll();
  if(next==='passed'){
    const p=cockpitParseKey(k);
    cockpit$('creditDialogTitle').textContent=`${p.module} · ${p.cycle}`;
    cockpit$('creditDialogBody').textContent=`${p.field} now has ${fieldCredits(p.field)} credit${fieldCredits(p.field)===1?'':'s'}. Total: ${countStates().passed} / 24.`;
    cockpit$('creditDialog').showModal();
  }
};

renderStats=function(){
  const ws=sessionsThisWeek();cockpit$('statsWeek').textContent=sumMinutes(ws);cockpit$('statsAll').textContent=sumMinutes(data.sessions);
  cockpit$('statsByField').innerHTML=`<div class="stats-row"><strong>Field</strong><strong class="right">Week</strong><strong class="right">All</strong></div>`+Object.keys(HMS).map(f=>{const w=sumMinutes(ws.filter(s=>s.field===f)),a=sumMinutes(data.sessions.filter(s=>s.field===f));return `<div class="stats-row"><span>${esc(f)}</span><span class="right">${w}</span><span class="right">${a}</span></div>`}).join('');
  const current=startOfWeek(),weeks=[];
  for(let i=7;i>=0;i--){const start=new Date(current);start.setDate(start.getDate()-i*7);const end=new Date(start);end.setDate(end.getDate()+7);const mins=sumMinutes(data.sessions.filter(s=>{const d=new Date(s.endedAt||s.startedAt);return d>=start&&d<end}));weeks.push({mins,label:i===0?'Now':`${start.getMonth()+1}/${start.getDate()}`})}
  const max=Math.max(1,...weeks.map(w=>w.mins));
  cockpit$('historyChart').innerHTML=weeks.map(w=>`<div class="history-col"><div class="history-value">${w.mins}</div><div class="history-bar-wrap"><div class="history-bar" style="height:${Math.max(2,w.mins/max*100)}%"></div></div><div class="history-label">${w.label}</div></div>`).join('');
};

renderAll=function(){cockpitEnsureData();renderDashboard();renderTree();renderStats();const compat=cockpit$('weekTargetLabel');if(compat)compat.textContent=data.weeklyTarget;};

function cockpitShowSessionComplete(){
  if(cockpitLastSessionIndex==null)return;
  const s=data.sessions[cockpitLastSessionIndex];if(!s)return;
  cockpit$('sessionXp').textContent=s.minutes;
  cockpit$('sessionCompleteLabel').textContent=`${s.field} · ${s.module} · ${s.cycle}`;
  cockpit$('sessionNoteInput').value=s.note||'';
  cockpit$('sessionDialog').showModal();
}
function cockpitStop(){const before=data.sessions.length;cockpitBaseStopTimer();if(data.sessions.length>before){cockpitLastSessionIndex=data.sessions.length-1;cockpitShowSessionComplete()}}
function cockpitManual(){const before=data.sessions.length;cockpitBaseAddManual();if(data.sessions.length>before){cockpitLastSessionIndex=data.sessions.length-1;cockpitShowSessionComplete()}}

cockpit$('stopTimerBtn').onclick=cockpitStop;
cockpit$('addManualBtn').onclick=cockpitManual;
cockpit$('manageQueueBtn').onclick=()=>showTab('tree');
cockpit$('showLockedToggle').onchange=e=>{cockpitShowLocked=e.target.checked;renderTree()};
cockpit$('savePriorityBtn').onclick=()=>{data.weeklyPriority=cockpit$('priorityInput').value.trim();save();renderDashboard()};
cockpit$('saveSessionNoteBtn').onclick=()=>{if(cockpitLastSessionIndex!=null&&data.sessions[cockpitLastSessionIndex])data.sessions[cockpitLastSessionIndex].note=cockpit$('sessionNoteInput').value.trim();cockpitLastSessionIndex=null;save();renderAll()};
cockpit$('skipSessionNoteBtn').onclick=()=>{cockpitLastSessionIndex=null;cockpit$('sessionNoteInput').value=''};

renderAll();
