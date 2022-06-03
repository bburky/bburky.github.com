---
title: Inject Steam GameOverlayRenderer DLL with Frida
date: '2021-08-16'
url: 'https://gist.github.com/9abb40556bba56e745a5e78e47797733'
---
Inspired by:  
<https://gist.github.com/Andon13/d439d5334d8173e5b959f383f1c49b03>

Must be run during process initialization, cannot be run after the game is
started.

GameOverlayRenderer will use an appid from the SteamGameId environment
variable. This is injected too. GameOverlayRenderer does not support
`steam_appid.txt`, but this script will parse the file to discover the appid.

Usage:
```
cd the\game\directory
frida -f "game.exe" -l C:\somewhere\GameOverlayRenderer.js --no-pause
```
