---
title: Proof of concept SECCOMP_RET_USER_NOTIF based Frida syscall tracer
date: '2021-06-26'
url: 'https://gist.github.com/cfa97a45e16fa0528f67dc9f31adc51e'
---
A hacked up version of [`seccomp/seccomp_user_notification.c`](https://man7.org/tlpi/code/online/dist/seccomp/seccomp_user_notification.c.html) running inside [Frida](https://frida.re/).

`installFilter()` should be called on the main thread of the application. It's not possible to install the seccomp filter from `rpc.exports.init()` because it runs on a Frida thread. 

`installFilter()` sets NO_NEW_PRIVS (required if non-root), installs the seccomp filter to trigger notifications, then creates a pthread to watch for notifications. Upon notifications a callback into Frida is invoked.

When the callback fires, it won't be on the thread that invoked the syscall. I'm not actually sure how to use Frida interact with the suspended thread. Untested, but [frida/frida-gum#559](https://github.com/frida/frida-gum/pull/559) may allow running code on the thread.
