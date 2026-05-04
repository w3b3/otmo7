# otmo7

An engineering operating model, presented as a 20-slide deck.

Live at [otmo7.com](https://otmo7.com)

---

## What it covers

Eight principles for how engineering works on this team:

1. **No scrum dailies** — async by default; standups only when they earn their time
2. **Real-time feedback** — don't wait for retros; say it now
3. **AI tools are not optional** — use them; stay in the loop; bring curiosity and ownership; no silos
4. **Refine because you must** — not because you want to
5. **No PMs** — engineers own the product decisions; architecture review is required; ideas come from anyone
6. **Wire for signals** — instrument before you ship; flag, measure, and decide; review with Claude Code
7. **Transparency and flexibility** — every effort produces an artifact; the loop closes when it's shared
8. **Surface your contribution** — core hours of overlap; make your work visible

Underlying claim: **high autonomy, high signal, high leverage.**

---

## Structure

```
slides/
├── index.html          # entry point — fetches and assembles the deck
├── script.js           # keyboard + click navigation
├── style.css           # layout and typography
├── server.js           # local dev server (Node)
├── start.sh            # convenience script to start local server
└── slides/
    ├── slide-01.html   # title
    ├── slide-02.html   # principle 01
    └── ...             # through slide-20
```

## Running locally

```bash
cd slides
node server.js
# open http://localhost:3000
```

## Navigation

| Input | Action |
|---|---|
| `→` / `Space` / `PageDown` | next slide |
| `←` / `PageUp` | previous slide |
| `Home` / `End` | first / last slide |
