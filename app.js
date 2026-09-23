const HMS = {
  "Physical Prep": {
    "Phasic Body – General Preparedness + Mobility": [
      {label:"Milestone 1", released:true, req:"General preparedness Milestones 1; Mobility Milestones 1; Handstand: 10 seconds freestanding"}
    ],
    "Phasic Body – Dynamic Conditioning": [{label:"Milestone 1",released:true,req:"Milestones 1"}],
    "Tonic Body – Energy Systems": [{label:"Milestone 1",released:true,req:"Breathing literacy / speed & endurance / resiliency milestones; speed & endurance required when submitting one milestone"}],
    "Phasic Body – Weighted": [{label:"Milestone 1",released:false,req:"To be released"}],
    "Resilience": [{label:"Milestone 1",released:false,req:"To be released"}]
  },
  "Acrobatics": {
    "Ground Acrobatics": [
      {label:"Cycle 1",released:true,req:"C3 × 60s / D1,2,3 × 2r each / G1 or G2 × 60s"},
      {label:"Cycle 2",released:true,req:"B1 × 30s, B2 & B3 × 15s/15s / D3 × 4/4r / G1 or G2 × 60s"},
      {label:"Cycle 3",released:true,req:"C1 × 15s / D1 × 4r, min 15 cm / G1 or G2 × 60s"},
      {label:"Cycle 4",released:true,req:"C2 × 2/2r, C4 × 30s / D1,2,3 × 4r each / G1 or G2 × 60s"}
    ],
    "Ground Locomotion": [
      {label:"Cycle 1",released:true,req:"A1–A6 advanced × 10s each / F × 60s, min 2 elements from each system"},
      {label:"Cycle 2",released:true,req:"A1–A3 advanced × 10s each / E × 60s, min 2 elements from each system"},
      {label:"Cycle 3",released:true,req:"A1–A2 × 10s each / E × 60s, min 2 elements from each system"},
      {label:"Cycle 4",released:true,req:"A1–A5 × 15s each / F × 60s, min 2 elements from each system"}
    ],
    "Contact Acrobatics": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:true,req:"A × 60s / F × 60s, min 2 elements from each system"})),
    "Air Acrobatics": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"To be released"})),
    "Interactions": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"End project — to be released"}))
  },
  "Fighting": {
    "Striking – Foundations": [
      {label:"Cycle 1",released:true,req:"F. sparring system 1–2 × 120 sec + shadow boxing × 90 sec"},
      {label:"Cycle 2",released:true,req:"K. sparring system 1–4 × 120 sec + shadow boxing × 90 sec"},
      {label:"Cycle 3",released:true,req:"I. sparring system 1–6 × 120 sec + shadow boxing × 90 sec"},
      {label:"Cycle 4",released:true,req:"I. sparring system 1–8 × 120 sec + shadow boxing × 90 sec"}
    ],
    "Standing Grappling": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"To be released"})),
    "Striking – Advanced": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"To be released"})),
    "Ground Grappling": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"To be released"})),
    "Confrontation": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"End project — to be released"}))
  },
  "Inner Work": {
    "Subtle Energetics": [
      {label:"Cycle 1",released:true,req:"Lead 5 min Three Channels or one Bindu practice; explain subtle energetics and what you did"},
      {label:"Cycle 2",released:true,req:"Lead 5 min chakra/element practice; explain chosen centre, element, and function of awareness"},
      {label:"Cycle 3",released:true,req:"Lead 5 min Vāyu practice; explain chosen Vāyu, direction/function, and session"},
      {label:"Cycle 4",released:true,req:"Lead 5 min emotional digestion practice; explain emotion, energetic principle, and regulatory/digestive/transformation function"}
    ],
    "Awareness Meditations": [
      {label:"Cycle 1",released:true,req:"Lead 5 min awareness meditation on a door of perception; explain object → field → commentary → awareness"},
      {label:"Cycle 2",released:true,req:"Lead 5 min awareness meditation on attention in one chakra; explain quality/function explored"},
      {label:"Cycle 3",released:true,req:"Lead 5 min awareness meditation on one Vāyu; explain direction/function and aligned awareness"},
      {label:"Cycle 4",released:true,req:"Lead 5 min awareness meditation beyond an emotional state; explain observations and non-identification"}
    ],
    "Somatic Connections": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"To be released"})),
    "Somatic Granularity": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"To be released"})),
    "Regulation": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"End project — to be released"}))
  },
  "Dance": {
    "Standing Grooves – Foundations": [
      {label:"Cycle 1",released:true,req:"Free associations: Groove system 1–2 / Footwork system 1–2"},
      {label:"Cycle 2",released:true,req:"Free associations: Groove system 1–4 / Footwork system 1–4"},
      {label:"Cycle 3",released:true,req:"Free associations: Groove system 1–6 / Footwork system 1–6"},
      {label:"Cycle 4",released:true,req:"Free associations: Groove system 1–8 / Footwork system 1–8"}
    ],
    "Standing Grooves – Advanced": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"To be released"})),
    "Open Forms": [
      {label:"Cycle 1",released:true,req:"Free association moving all elements cycle 1 × 90 sec"},
      {label:"Cycle 2",released:true,req:"Free association cycle 1–2 × 90 sec"},
      {label:"Cycle 3",released:true,req:"Free association cycle 1–3 × 90 sec"},
      {label:"Cycle 4",released:true,req:"Free association cycle 1–4 × 90 sec"}
    ],
    "Ground Flows": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"To be released"})),
    "Creation": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"End project — to be released"}))
  },
  "Athletics": {
    "Lightness Skills": [
      {label:"Cycle 1",released:true,req:"B4 × 6r / G1 & G2 × 6 reps per type"},
      {label:"Cycle 2",released:true,req:"A × 6r / B3 × 6 reps / D random game × 60s / H × 60s"},
      {label:"Cycle 3",released:true,req:"A × 6r / B × 6r at max, min 6 ft / E × 60s"},
      {label:"Cycle 4",released:true,req:"C full game × 60s / D full game × 60s"}
    ],
    "Climbar": [
      {label:"Cycle 1",released:true,req:"Free association: integrate at least 80% of all elements (10/13), 90–120 sec"},
      {label:"Cycle 2",released:true,req:"Free association: at least 80% of all elements (11/14), 90–120 sec"},
      {label:"Cycle 3",released:true,req:"Free association: at least 80% of all elements (12/15), 90–120 sec"},
      {label:"Cycle 4",released:true,req:"Free association: at least 80% of all elements (11/14), 90–120 sec"}
    ],
    "Balance": [
      {label:"Cycle 1",released:true,req:"C1,2,3 × 10 steps / F × 60s / I × 60s"},
      {label:"Cycle 2",released:true,req:"B × 10 steps / E × 60s / G × 60s"},
      {label:"Cycle 3",released:true,req:"C1,2,3 × 10 reps / D × 60s / E × 60s / F × 60s"},
      {label:"Cycle 4",released:true,req:"A1,2,3 × 10 reps / C × 60s / D × 60s / E × 60s"}
    ],
    "Hanging Brachiation Swinging": [
      {label:"Cycle 1",released:true,req:"B calls × 30s / F × 4r, stop with E / H × 60s"},
      {label:"Cycle 2",released:true,req:"B calls × 30s / D × 4/4r / F × 4r, min 6 ft / H × 60s"},
      {label:"Cycle 3",released:true,req:"B calls × 30s / D game × 60s / F × 60s"},
      {label:"Cycle 4",released:true,req:"B calls × 30s / D game × 60s / F × 60s"}
    ],
    "Application": [1,2,3,4].map(n=>({label:`Cycle ${n}`,released:false,req:"End project — to be released"}))
  }
};

const STATES=["not-started","learning","practicing","reliable","video-ready","submitted","passed"];
const STATE_LABELS={"not-started":"Not started",learning:"Learning",practicing:"Practicing",reliable:"Reliable","video-ready":"Video-ready",submitted:"Submitted",passed:"Passed"};
const storeKey='hmsLadderDataV1';
let data=loadData();
let timerTicker=null; let deferredInstall=null;

function defaultData(){return{weeklyTarget:360,sessions:[],cycleStates:{},activeTimer:null};}
function loadData(){try{return {...defaultData(),...JSON.parse(localStorage.getItem(storeKey)||'{}')}}catch{return defaultData()}}
function save(){localStorage.setItem(storeKey,JSON.stringify(data));}
function key(field,module,cycle){return [field,module,cycle].join('||')}
function startOfWeek(d=new Date()){const x=new Date(d);const day=(x.getDay()+6)%7;x.setHours(0,0,0,0);x.setDate(x.getDate()-day);return x}
function sessionsThisWeek(){const s=startOfWeek();return data.sessions.filter(x=>new Date(x.endedAt||x.startedAt)>=s)}
function sumMinutes(arr){return arr.reduce((a,s)=>a+Number(s.minutes||0),0)}
function fmtDate(iso){return new Intl.DateTimeFormat(undefined,{weekday:'short',hour:'numeric',minute:'2-digit'}).format(new Date(iso))}
function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

function init(){
  populateFields(); bind(); restoreTimer(); renderAll();
  if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
}
function bind(){
  document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>showTab(b.dataset.tab)));
  document.getElementById('quickStartBtn').onclick=()=>showTab('practice');
  document.getElementById('showPracticeBtn').onclick=()=>showTab('practice');
  fieldSelect.onchange=()=>populateModules(); moduleSelect.onchange=()=>populateCycles();
  startTimerBtn.onclick=startTimer; stopTimerBtn.onclick=stopTimer; cancelTimerBtn.onclick=cancelTimer;
  addManualBtn.onclick=addManual;
  editTargetBtn.onclick=()=>{targetInput.value=data.weeklyTarget;targetDialog.showModal()};
  saveTargetBtn.onclick=()=>{data.weeklyTarget=Math.max(1,Number(targetInput.value)||360);save();renderAll()};
  exportBtn.onclick=exportData; importInput.onchange=importData; resetBtn.onclick=resetData;
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;installBtn.classList.remove('hidden')});
  installBtn.onclick=async()=>{if(deferredInstall){deferredInstall.prompt();deferredInstall=null;installBtn.classList.add('hidden')}};
}
function showTab(id){document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active',p.id===id));document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===id));window.scrollTo({top:0,behavior:'smooth'});}
function populateFields(){fieldSelect.innerHTML=Object.keys(HMS).map(x=>`<option>${esc(x)}</option>`).join('');populateModules();}
function populateModules(){const f=fieldSelect.value;moduleSelect.innerHTML=Object.keys(HMS[f]).map(x=>`<option>${esc(x)}</option>`).join('');populateCycles();}
function populateCycles(){const f=fieldSelect.value,m=moduleSelect.value;cycleSelect.innerHTML=HMS[f][m].map((x,i)=>`<option value="${i}">${esc(x.label)}${x.released?'':' (locked)'}</option>`).join('');updateTimerClassification();}
function updateTimerClassification(){if(data.activeTimer)return;const cyc=HMS[fieldSelect.value]?.[moduleSelect.value]?.[Number(cycleSelect.value)];timerClassification.textContent=[fieldSelect.value,moduleSelect.value,cyc?.label].filter(Boolean).join(' → ')}
[fieldSelect,moduleSelect,cycleSelect,focusInput].forEach(el=>el?.addEventListener?.('change',updateTimerClassification));

function startTimer(){
 const f=fieldSelect.value,m=moduleSelect.value,i=Number(cycleSelect.value),cyc=HMS[f][m][i];
 data.activeTimer={startedAt:new Date().toISOString(),field:f,module:m,cycle:cyc.label,focus:focusInput.value.trim()};save();restoreTimer();renderAll();
}
function restoreTimer(){
 if(timerTicker)clearInterval(timerTicker);
 const a=data.activeTimer;
 startTimerBtn.classList.toggle('hidden',!!a);stopTimerBtn.classList.toggle('hidden',!a);cancelTimerBtn.classList.toggle('hidden',!a);
 [fieldSelect,moduleSelect,cycleSelect,focusInput].forEach(el=>el.disabled=!!a);
 if(!a){timerStatus.textContent='READY';timerDisplay.textContent='00:00:00';updateTimerClassification();return}
 timerStatus.textContent='PRACTICING';timerClassification.textContent=[a.field,a.module,a.cycle,a.focus].filter(Boolean).join(' → ');
 const tick=()=>{const sec=Math.max(0,Math.floor((Date.now()-new Date(a.startedAt))/1000));timerDisplay.textContent=new Date(sec*1000).toISOString().slice(11,19)};tick();timerTicker=setInterval(tick,1000);
}
function stopTimer(){
 const a=data.activeTimer;if(!a)return;const endedAt=new Date();const mins=Math.max(1,Math.round((endedAt-new Date(a.startedAt))/60000));
 data.sessions.push({...a,endedAt:endedAt.toISOString(),minutes:mins,source:'timer'});data.activeTimer=null;save();restoreTimer();renderAll();showTab('dashboard');
}
function cancelTimer(){if(confirm('Cancel this timer without recording it?')){data.activeTimer=null;save();restoreTimer();renderAll()}}
function addManual(){const mins=Math.max(0,Number(manualMinutes.value)||0);if(!mins)return;const f=fieldSelect.value,m=moduleSelect.value,cyc=HMS[f][m][Number(cycleSelect.value)];data.sessions.push({startedAt:new Date().toISOString(),endedAt:new Date().toISOString(),minutes:mins,field:f,module:m,cycle:cyc.label,focus:focusInput.value.trim(),source:'manual'});manualMinutes.value='';save();renderAll();showTab('dashboard')}

function renderAll(){renderDashboard();renderTree();renderStats();weekTargetLabel.textContent=data.weeklyTarget;}
function renderDashboard(){
 const ws=sessionsThisWeek(),wm=sumMinutes(ws);weekMinutes.textContent=wm;weekProgress.style.width=`${Math.min(100,wm/data.weeklyTarget*100)}%`;weekProgressText.textContent=`${wm} / ${data.weeklyTarget} XP`;
 const counts=countStates();creditCount.textContent=counts.passed;readyCount.textContent=counts['video-ready'];
 const by=Object.fromEntries(Object.keys(HMS).map(f=>[f,0]));ws.forEach(s=>by[s.field]=(by[s.field]||0)+Number(s.minutes||0));const max=Math.max(1,...Object.values(by));
 domainBars.innerHTML=Object.entries(by).map(([f,v])=>`<div class="bar-row"><span>${esc(f)}</span><div class="bar-track"><div class="bar-fill" style="width:${v/max*100}%"></div></div><span class="right">${v}</span></div>`).join('');
 const rec=[...data.sessions].sort((a,b)=>new Date(b.endedAt)-new Date(a.endedAt)).slice(0,5);
 recentSessions.className='list'+(rec.length?'':' empty-state');recentSessions.innerHTML=rec.length?rec.map(s=>`<div class="session-item"><div class="row between"><div class="session-title">${esc(s.field)} · ${esc(s.module)}</div><strong>${s.minutes}m</strong></div><div class="muted small">${esc(s.cycle||'')} ${s.focus?'· '+esc(s.focus):''} · ${fmtDate(s.endedAt)}</div></div>`).join(''):'No sessions yet.';
}
function countStates(){const out=Object.fromEntries(STATES.map(x=>[x,0]));Object.values(data.cycleStates).forEach(s=>out[s]=(out[s]||0)+1);return out}
function fieldCredits(field){let n=0;Object.entries(data.cycleStates).forEach(([k,v])=>{if(v==='passed'&&k.startsWith(field+'||'))n++});return n}
function renderTree(){
 const c=countStates();treeCreditCount.textContent=c.passed;
 skillTree.innerHTML=Object.entries(HMS).map(([field,mods])=>`<div class="field-card"><div class="field-head"><div><div class="field-title">${esc(field)}</div><div class="muted small">${fieldCredits(field)} credits</div></div><div class="metric" style="font-size:20px">${fieldCredits(field)}</div></div><div class="module-list">${Object.entries(mods).map(([mod,cycles])=>`<div class="module"><div class="module-name">${esc(mod)}</div><div class="cycles">${cycles.map((cyc,i)=>{const k=key(field,mod,cyc.label),state=data.cycleStates[k]||'not-started';return `<button class="cycle ${cyc.released?'':'locked'}" data-k="${esc(k)}" data-state="${state}" ${cyc.released?'':'disabled'}>${esc(cyc.label)}<br><span>${STATE_LABELS[state]}</span></button>`}).join('')}</div><div class="cycle-note">${cycles.some(x=>x.released)?'Tap a released cycle to advance its readiness state. Locked items are marked “to be released” in the guide.':'To be released.'}</div></div>`).join('')}</div></div>`).join('');
 document.querySelectorAll('.cycle:not(.locked)').forEach(btn=>btn.onclick=()=>advanceState(btn.dataset.k));
}
function advanceState(k){const cur=data.cycleStates[k]||'not-started';const next=STATES[(STATES.indexOf(cur)+1)%STATES.length];data.cycleStates[k]=next;save();renderAll();}
function renderStats(){
 const ws=sessionsThisWeek();statsWeek.textContent=sumMinutes(ws);statsAll.textContent=sumMinutes(data.sessions);
 statsByField.innerHTML=`<div class="stats-row"><strong>Field</strong><strong class="right">Week</strong><strong class="right">All</strong></div>`+Object.keys(HMS).map(f=>{const w=sumMinutes(ws.filter(s=>s.field===f)),a=sumMinutes(data.sessions.filter(s=>s.field===f));return `<div class="stats-row"><span>${esc(f)}</span><span class="right">${w}</span><span class="right">${a}</span></div>`}).join('');
}
function exportData(){const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`hms-ladder-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href)}
function importData(e){const file=e.target.files?.[0];if(!file)return;const r=new FileReader();r.onload=()=>{try{data={...defaultData(),...JSON.parse(r.result)};save();restoreTimer();renderAll();alert('Backup imported.')}catch{alert('Could not read that backup file.')}};r.readAsText(file);e.target.value=''}
function resetData(){if(confirm('Delete all HMS Ladder data stored in this browser?')){data=defaultData();save();restoreTimer();renderAll()}}

init();
