---
sidebar_position: 2
---

# Installation
## Getting Started

To initiate, you'll need to clone Pluto's repository:
```
git clone https://github.com/well-in-that-case/Pluto.git
cd Pluto
```
### Building Pluto
Pluto supports the following platforms:
  - BSD
  - FreeBSD
  - Linux
  - MacOS
  - Windows
  - Solaris

Which is by no means a complete list, any system capable of compiling C++17 should compile Pluto fine.
### Compiling
Compiling is usually as simple as the following command:
```
make PLAT={yourplatform}
```
The platform list can be found [here](https://github.com/well-in-that-case/Pluto/blob/main/src/Makefile#L33).
#### Note for Windows
The `make` command isn't installed by default, so you should install [MSYS](https://www.msys2.org/).
## Running Pluto
After you compile Pluto, all the binaries will be within the `src/` directory.
