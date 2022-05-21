---
title: Python WinRT Image Capture (and Focus Stacking)
date: '2020-05-03'
# url: 'https://gist.github.com/563457900bc566b0d261ff15847dadd6'
url: https://nbviewer.org/gist/bburky/563457900bc566b0d261ff15847dadd6
---
[Python/WinRT](https://pypi.org/project/winrt/) is a crazy thing:

> The Windows Runtime Python Projection (Python/WinRT) enables Python developers to access Windows Runtime APIs directly from Python in a natural and familiar way.

Use some native WinRT APIs via Python to capture photos with variable focus. Then use [align_image_stack](http://hugin.sourceforge.net/docs/manual/Align_image_stack.html) and [enblend](http://enblend.sourceforge.net/) from the [Hugin](http://hugin.sourceforge.net/) panorama tools to focus stack the images.
