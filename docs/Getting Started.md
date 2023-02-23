---
sidebar_position: 1
---

# Getting Started

This document will explain how to get started with writing Pluto in no time.

## Write Pluto Online

The easiest way to get started writing Pluto is to use [Write Pluto Online](https://pluto-lang.org/web/), which runs Pluto code directly in your browser using WASM.

## Prebuilt Binaries

You can find pre-built binaries of Pluto for Windows, Linux, & Mac OS over on [Pluto's Github Releases page](https://github.com/PlutoLang/Pluto/releases).

## Compile Pluto Yourself

Pluto can compile on virtually any platform, as long as there's a C++ 17 compiler for it, which includes, but is not limited to:
  - BSD
  - FreeBSD
  - Linux
  - MacOS
  - Windows
  - Solaris

To compile Pluto yourself, you first need to clone the repository:
```
git clone https://github.com/PlutoLang/Pluto.git
cd Pluto
```
And then it's as simple as running the make command:
```
make PLAT={yourplatform}
```
The platform list can be found [here](https://github.com/PlutoLang/Pluto/blob/main/src/Makefile#L38).

After you compile Pluto, all the binaries will be within the `src/` directory.

#### Note for Windows
The `make` command isn't installed by default, so you should install [MSYS](https://www.msys2.org/).
:::tip
On Windows, you can install Visual Studio 2022 and simply use the vendored Visual Studio files from the Pluto repository.
:::
