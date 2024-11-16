---
sidebar_position: 1
---

# Getting Started

This document will explain how to get started with writing Pluto in no time.

## Write Pluto Online

The easiest way to get started writing Pluto is to use [Write Pluto Online](https://pluto-lang.org/web/), which runs Pluto code directly in your browser using WASM.

## Prebuilt Binaries

You can find pre-built binaries of Pluto for Windows, Linux, & Mac OS over on [Pluto's Github Releases page](https://github.com/PlutoLang/Pluto/releases).

## Packages

### Chocolatey

You can easily install `pluto` and `plutoc` via Chocolatey as follows:

```
choco install plutolang
```

### APT Repository

You can easily install Pluto via APT as follows:

```
wget -qO- https://calamity-inc.github.io/deb-repo/key.gpg | sudo tee /usr/share/keyrings/calamity-inc.gpg > /dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/calamity-inc.gpg] https://calamity-inc.github.io/deb-repo/ buster main" | sudo tee /etc/apt/sources.list.d/calamity-inc.list > /dev/null
sudo apt update
sudo apt install pluto
```

This package includes the `pluto` and `plutoc` executables, shared library, as well as headers for developers (`#include <pluto/...>`).

As the "buster" part implies, these binaries were compiled on Debian 10, but they work on all subsequent Debian releases, as well as Ubuntu 20 and above.

### AUR

Pluto is in the Arch User Repository under the name `plutolang`.

This package includes the `pluto` and `plutoc` executables, shared library, as well as headers for developers (`#include <pluto/...>`).

### Termux

Pluto is available in the Termux package main repository under `plutolang` for binaries and `libpluto` for development library.

### Nix/NixOS

Pluto is available in the [NUR](https://github.com/nix-community/NUR) repository. You can try it by following the installation step, and then test it by running:
```nix
$ nix-shell -p nur.repos.mbekkomo.plutolang --command pluto
```

Optionally, if you want to install the packages without building it first, you can register a [Cachix](https://cachix.org) store to skip it.
```sh
$ cachix use mbekkomo
```

## Compile Pluto Yourself

Pluto can compile on virtually any platform, as long as there's a C++ 17 compiler for it.

First, you need to clone the repository:
```
git clone https://github.com/PlutoLang/Pluto
cd Pluto
```

Then, you can use any of the build methods documented here.

### PHP Scripts

:::info
PHP is required for this method. You can check if PHP is installed by running `php -v`. You can install it via `sudo apt intall php-cli` on Debian or `sudo pacman -S php` on Arch.
:::

Simply run the following commands:
```
php scripts/compile.php clang
php scripts/link_pluto.php clang
php scripts/link_plutoc.php clang
php scripts/link_static.php
```
You can easily modify these commands to a compiler other than clang, if you wish. There are also additional scripts for the various types of shared libraries.

The binaries will be placed in the `src/` directory.

### Visual Studio

In the repository you just cloned, there's a Pluto.sln you can open with Visual Studio.

Within Visual Studio, open the **Build > Batch Build** dialog. Here, click "Select All", then "Build".

The binaries will be placed in the `out/` directory.

### Make

You can simply run the make command:
```
make -j PLAT={yourplatform}
```
The platform list can be found [here](https://github.com/PlutoLang/Pluto/blob/main/src/Makefile#L38).

The binaries will be placed in the `src/` directory.

### Sun

Pluto supports the [Sun build system](https://github.com/calamity-inc/Sun) by providing .sun files in the `src/` directory, you can use them to build `pluto` & `plutoc`:
```
cd src
sun pluto
sun plutoc
```

The binaries will be placed in the `src/` directory.

If you wish to use Pluto as a static library in your own projects, simply add the following to your project's .sun file:
```
require ../Pluto/src
```

Assuming a directory structure where your own project and Pluto share the same parent.
