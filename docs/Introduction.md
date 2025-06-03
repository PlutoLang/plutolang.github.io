---
sidebar_position: 0
---

# What is Pluto?
Pluto is a superset of Lua 5.4 designed to assist with general-purpose programming & facilitate cleaner, more streamlined development by:
- Implementing a [greatly enhanced standard library](<category/runtime-environment>).
- Adding more than a dozen highly-desired syntaxes such as [switch statements](<New Features/Switch Blocks>), [compound operators](<New Operators#compound-operators>), [string interpolation](<New Features/String Interpolation>), [classes](<New Features/Object-Oriented Programming#class-statement>), [ternary expressions](<New Features/Ternary Expressions>), [enums](<New Features/Enumerations>), etc.
- A myriad of other improvements, such as [generalized iteration](<Qol Improvements/Generalized Iteraction>), [compiler warnings](<New Features/Compiler Warnings>), and a [preprocessor](<New Features/Preprocessing>).

Despite the immense additions, Pluto remains highly compatible with Lua:
- (Mostly) compatible with Lua 5.4 source code.
  - Our only breakage is the addition of new keywords, which causes conflicts when those keywords are used as identifiers. However, Pluto leverages parser heuristics and — in cases where parser heuristics fail — [Compatibility Mode](<Compatibility#compatibility-mode>) to eliminate this concern. Most Lua 5.4 source code will execute flawlessly on Pluto.
- Bytecode compatible for the Lua version it's based on. (e.g, 5.4.8)
  - Capable of executing Lua bytecode, and also generates bytecode that Lua can execute.
  - Most of Pluto's features generate bytecode that is backwards-compatible with Lua. New features that are not bytecode backwards-compatible will say so in their documentation.
- Actively rebases with Lua's main repository. We are not a time-frozen dialect. When Lua 5.5 releases, we intend on updating to that.

With Compatibility Mode, Pluto has been dropped into large communities and did not break any existing scripts.

## What does Pluto aspire to be?
Pluto aspires to be a version of Lua with a larger feature-set, that is all. Pluto is not a Lua-killer, an attempted successor, or any of that. Many people (rightly so) love Lua precisely because of the design philosophy. And fundamentally, Pluto is a major deviation from Lua's design philosophy. Some may prefer this, some may not.