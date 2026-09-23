# HMS Ladder MVP

A zero-cost, mobile-first progressive web app for tracking HMS practice minutes, readiness states, and official credits.

## Core model
- 1 XP = 1 minute of deliberate HMS practice.
- Timers are classified by field → module → cycle/milestone.
- Readiness states: Not started → Learning → Practicing → Reliable → Video-ready → Submitted → Passed.
- Only `Passed` cycles count toward the official credit total.
- Weekly XP target defaults to 360 minutes and can be changed in the app.

## Run locally
From this folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Put it on your phone for free
The easiest next step is GitHub Pages:
1. In GitHub: Settings → Pages.
2. Under Build and deployment choose “Deploy from a branch.”
3. Select `main` and `/ (root)`, then Save.
4. Open the resulting Pages URL on your phone and choose “Add to Home Screen.”

## Data storage
This MVP uses browser `localStorage`. Export a backup from the Stats screen periodically.

Cloud sync/login can be added later with Supabase without changing the basic interaction model.

## Curriculum source
The built-in tree was transcribed from the uploaded HMS Year 3 exam guide. Items explicitly marked “To be released” remain locked rather than being filled in with invented requirements.
