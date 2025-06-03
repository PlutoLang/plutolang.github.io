---
sidebar_position: 0
---

# What is Pluto?
Pluto is a superset of Lua 5.4 designed to assist with general-purpose programming & facilitate cleaner, more streamlined development via:
- A [greatly enhanced standard library](<category/runtime-environment>).
- [Pre-existing packages](<Packages#noteworthy-packages-for-pluto>).
- More than a dozen highly-desired syntaxes such as [switch statements](<New Features/Switch Blocks>), [compound operators](<New Operators#compound-operators>), [string interpolation](<New Features/String Interpolation>), [classes](<New Features/Object-Oriented Programming#class-statement>), [ternary expressions](<New Features/Ternary Expressions>), [enums](<New Features/Enumerations>), etc.
- A myriad of other improvements, such as [generalized iteration](<Qol Improvements/Generalized Iteraction>), [compiler warnings](<New Features/Compiler Warnings>), and a [preprocessor](<New Features/Preprocessing>).

Despite the immense additions, Pluto remains highly compatible with Lua:
- (Mostly) compatible with Lua 5.4 source code.
  - Our only breakage is the addition of new keywords, which causes conflicts when those keywords are used as identifiers. However, Pluto leverages parser heuristics and — in cases where parser heuristics fail — [Compatibility Mode](<Compatibility#compatibility-mode>) to eliminate this concern. Most Lua 5.4 source code will execute flawlessly on Pluto.
- Reads and writes Lua 5.4 bytecode meaning it's forwards- and backwards-compatible.
  - Only some Pluto features generate backwards-incompatible bytecode, but they will say so in their documentation.
- Actively rebases with Lua's main repository. We are not a time-frozen dialect. When Lua 5.5 releases, we intend on updating to that.

With Compatibility Mode, Pluto has been dropped into large communities and did not break any existing scripts.

## What does Pluto aspire to be?
Pluto aspires to be a version of Lua with a larger feature-set, that is all. Pluto is not a Lua-killer, an attempted successor, or any of that. Many people (rightly so) love Lua precisely because of the design philosophy. And fundamentally, Pluto is a major deviation from Lua's design philosophy. Some may prefer this, some may not.