# How to Run the Presentation

## Quick Start (paste this into Terminal)

```bash
cd ~/Documents/HBCUC2/Marys\ Hand/presentation && python3 -m http.server 8090
```

Then open Safari and go to: **http://localhost:8090**

---

## Controls

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `F` | Toggle fullscreen |
| `Esc` | Exit fullscreen |

You can also click the right side of the screen to go forward, left side to go back.

---

## Before the Presentation (Checklist)

1. Open Terminal, paste the command above
2. Open **Safari** (not Chrome — transparent videos only work in Safari)
3. Go to `http://localhost:8090`
4. Press `F` to go fullscreen
5. Have Xcode Simulator ready for slide 6 (live demo)
6. Test arrow keys work

---

## If Something Goes Wrong

### Server won't start (port already in use)
```bash
lsof -ti :8090 | xargs kill
cd ~/Documents/HBCUC2/Marys\ Hand/presentation && python3 -m http.server 8090
```

### Videos not playing
- Make sure you're in **Safari**, not Chrome
- Transparent `.mov` files only work in Safari

### Need a different port
```bash
cd ~/Documents/HBCUC2/Marys\ Hand/presentation && python3 -m http.server 9000
```
Then go to `http://localhost:9000` instead.

### Jump to a specific slide
Add `#slide-3` to the URL: `http://localhost:8090/#slide-3`

---

## Slide Order (for reference)

| # | Slide |
|---|-------|
| 0 | Splash (auto-advances) |
| 1 | Title |
| 2 | The Problem |
| 3 | Research Evidence |
| 4 | Mary McLeod Bethune |
| 5 | CBL Framework |
| 6 | Three Pillars |
| 7 | Live Demo (switch to Xcode Sim) |
| 8 | Design & Tech |
| 9 | Accessibility |
| 10 | Impact |
| 11 | Close + Questions |
