---
# title: >-
#   avr-gdb python script to get flag from a debug build of
#   https://blog.wokwi.com/capture-the-flag-shitty-add-on/
title: Function hooking example using avr-gdb's built-in simulator and Python
date: '2021-02-15'
url: 'https://gist.github.com/4ff25b15164d93fb5d9fb89ab09af95b'
class: notecard-5x3
---

A simple example using `avr-gdb`'s built in `target sim` AVR simulator on a `.hex` file.

GDB's Python support can be used to mock functions by modifying process state and calling `ret` to skip their execution.
