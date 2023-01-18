Pluto adds the following syntax:
```pluto
enum MyEnum begin
	OPTION_1,
	OPTION_2,
	OPTION_3
end

assert(OPTION_1 == 1)
assert(OPTION_2 == 2)
assert(OPTION_3 == 3)
```
Enums can start at a base number, and increment from there.
```pluto
enum MyEnum begin
	OPTION_1 = 0,
	OPTION_2,
	OPTION_3 = 5,
	OPTION_4
end

assert(OPTION_1 == 0)
assert(OPTION_2 == 1)
assert(OPTION_3 == 5)
assert(OPTION_4 == 6)
```
Enums can also be anonymous.
```pluto
enum begin
	OPTION_1,
	OPTION_2,
	OPTION_3
end

assert(OPTION_1 == 1)
assert(OPTION_2 == 2)
assert(OPTION_3 == 3)
```