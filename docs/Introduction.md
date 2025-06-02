---
sidebar_position: 0
---

# What is Pluto?
Pluto is a superset of Lua 5.4 that facilitates
- **general-purpose programming** thanks to a [greatly enhanced standard library](<category/runtime-environment>),
- **accelerated development** through the addition of more than a dozen highly-desired syntaxes such as [switch statements](<New Features/Switch Blocks>), [compound operators](<New Operators#compound-operators>), [string interpolation](<New Features/String Interpolation>), [classes](<New Features/Object-Oriented Programming#class-statement>), [type hinting](<New Features/Type Hinting>), [enums](<New Features/Enumerations>), etc.

while being remarkably compatible with Lua:
- Pluto is largely compatible with Lua 5.4 source code, but there is an imperfection:
  - Pluto implements new keywords, which can cause conflicts with otherwise normal identifiers such as 'switch', or 'class'. The parser tries to identify what is meant but if that doesn't work, you can [use Compatibility Mode](<Compatibility#compatibility-mode>).
- Pluto is also compatible with Lua 5.4 bytecode. Pluto can execute Lua bytecode, and most Pluto features generate bytecode compatible with Lua.
  - There's a small subset of Pluto features which do not generate Lua 5.4 bytecode. This is documented alongside those features, so scripters can vouch to avoid using them when bytecode compatibility is desired.
- Pluto has been dropped into large communities, and did not break any existing scripts (with compatibility mode enabled then gradually disabled).
- Pluto actively rebases with Lua's main repository. We are not a time-frozen dialect. When Lua 5.5 releases, we intend on updating to that.

## What does Pluto aspire to be?
Pluto aspires to be a version of Lua with a larger feature-set, that is all. Pluto is not a Lua-killer, an attempted successor, or any of that. Many people (rightly so) love Lua precisely because of the design philosophy. And fundamentally, Pluto is a major deviation from Lua's design philosophy. Some may prefer this, some may not.