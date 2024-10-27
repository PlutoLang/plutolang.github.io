Pluto allows `do` to be used as a universal block opener, meaning it can be used instead of `then` and `begin`.
```pluto title="If Statement Example"
local x = 3
if x == 3 do
    print("x is 3!")
end
```
```pluto title="Class Statement Example"
class Human do
    function __construct(public name) end
    function greet() print($"Hello, {self.name}!") end
end
new Human("John"):greet()
```
```pluto title="Enum Statement Example"
enum Suit do
    HEARTS,
    DIAMONDS,
    CLUBS,
    SPADES
end
assert(HEARTS == 1)
```
