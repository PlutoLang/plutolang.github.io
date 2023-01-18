Pluto implements a plethora of compound operators, which are actually faster than their Lua counterparts.
# Additions
- Modulo: `%=`
- Addition: `+=`
- Exponent: `^=`
- Bitwise OR: `|=`
- Subtraction: `-=`
- Bitshift left: `<<=`
- Bitwise AND: `&=`
- Float division: `/=`
- Bitshift right: `>>=`
- Multiplication: `*=`
- Concatenation: `..=`
- Integer division: `//=`
- Null-Coalescing: `??=`
# Why are they faster?
They store their left-operand in a temporary register, which reduces a lookup & makes them roughly 30% faster.

```pluto title="Example Code"
local a = 5

-- Old
a = a + 5

-- New
a += 5
```
