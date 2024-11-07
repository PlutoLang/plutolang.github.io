---
sidebar_position: 10
---

This document will explain how external libraries are handled in Pluto and give some recommendations for their usage.

## How `require` locates files

By default, `require` only checks the installation directory and current working directory for a matching file or an `init` file in a subfolder matching the requested name.

So, if you want to `require` a file in the same working directory, e.g. `mylib`, it has to be in one of these places:
- `./mylib.lua`
- `./mylib/init.lua`
- `./mylib.pluto`
- `./mylib/init.pluto`

Notably, there is no standardized `lib` or `modules` folder. However, you can update `package.path` to check such folders as well:
```pluto norun
package.path ..= package.config[3].."lib"..package.config[1].."?.pluto"
```
With this, we could for example have `mylib` located at `./lib/mylib.pluto`.

## An approach to package management

While it is perfectly viable to grab some pre-existing code from the internet and drop it somewhere in your project, there is often no "chain of custody", causing this code to never receive updates and making it harder to report bugs in the right place.

Our solution for this is [APM](https://github.com/PlutoLang/apm#readme), short for Agnostic Package Manager. It is agnostic in the sense that it can be used for non-Pluto projects and dependencies as well.

The way you use APM is by creating Pluto script that loads APM and then describes dependencies using its Pluto-based configuration format:
```pluto norun title="deps.pluto"
;(require"http".request"//use.agnostic.pm"|>load)()

git "https://github.com/PlutoLang/pluto-dns"
    from "dns.pluto" to "dns.pluto"
```
After running the `deps.pluto` script, you will find the `dns.pluto` file in your working directory, so you can proceed to use it:
```pluto norun title="index.pluto"
local dns = require "dns"
local resolver = new dns.httpresolver()
print(resolver:query("A", "testrr-1337.soup.do")[1].ip) --> 1.3.3.7
```
To later update your dependencies, simply run `deps.pluto` again. [Learn more...](https://github.com/PlutoLang/apm#readme)

## Noteworthy packages for Pluto

While Pluto's standard library is still growing, a few packages are available to provide what is currently missing:
- [iniparser](https://github.com/calamity-inc/iniparser) — INI reader & writer for Lua 5.3+ and Pluto
- [pluto-discord-bot](https://github.com/PlutoLang/pluto-discord-bot) — a library enabling you to write Discord bots in Pluto
- [pluto-websocket](https://github.com/PlutoLang/pluto-websocket) — expands Pluto's `socket` library with WebSocket client functionality
- [pluto-query](https://github.com/PlutoLang/pluto-query) — expands Pluto's `xml` library with query selector functionality
- [pluto-dns](https://github.com/PlutoLang/pluto-dns) — DNS client library
