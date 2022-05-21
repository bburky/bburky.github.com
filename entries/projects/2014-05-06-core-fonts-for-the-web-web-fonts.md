---
title: Core fonts for the Web web fonts
date: 2014-05-06
url: https://github.com/bburky/Core-fonts-for-the-Web-web-fonts
---
The Microsoft [Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web) included Andale Mono, Arial, Arial Black, Comic Sans MS, Courier New, Georgia, Impact, Times New Roman, Trebuchet MS, Verdana and Webdings as TrueType fonts. Though Microsoft no longer distributes these fonts, the old versions may still be redistributed freely. However, the [EULA](http://www.microsoft.com/typography/fontpack/eula.htm) specifies that the fonts may not be modified in any way.

But wouldn't it be fun to use them as `@font-face` web fonts? But sadly the original, redistributable, format is only either `.exe` or `.sit.hqx` files...

With sufficient usage of JavaScript, random HTML5 features ([blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) URLs in dynamically generated stylesheet rules) and [emscripten](http://emscripten.org)-compiled [cabextract](http://www.cabextract.org.uk/), anything is possible.

* [Source code](https://github.com/bburky/Core-fonts-for-the-Web-web-fonts)
* [Demo](http://bburky.com/Core-fonts-for-the-Web-web-fonts/demo.html)