---
sidebar_position: 3
title: Beginner's Guide
---

This article is for people completely unfamiliar with Lua who want to jump right into Pluto.

For people already familiar with Lua, the rest of this documentation should be a good introduction to Pluto.

## Your first program

Let's start simple by saying hello to the world.

```pluto
print("Hello, world!")
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=print(%22Hello%2C%20world!%22))

Participation using the "try it yourself" links is recommended — not just running the code, but also modifying it.

As you can see, this program prints "Hello, world!", and it does so by calling the builtin `print` function from Lua.

## Simple arithmetic

Of course, we want more than a glorified text file, so let's get a bit more programmatic with some arithmetics.

```pluto
print($"2 + 2 is {2 + 2}")
```

Notice the `$` before the string; this allows us to use curly brackets to embed expressions directly into the string. In this case, we embed the expression `2 + 2`, which evaluates to 4.

#### [Try It Yourself](https://pluto-lang.org/web/#code=print(%24%222%20%2B%202%20is%20%7B2%20%2B%202%7D%22))

## Variables

Variables in Lua/Pluto are global by default and are assigned trivially:

```pluto
a = 2
print($"a is {a}")
a += 2
print($"I added 2 and now it's {a}")
```

Notice how we still have a `$` before the strings but this time we're embedding the expression `a` which simply evaluates to the value of `a` at that particular moment.

#### [Try It Yourself](https://pluto-lang.org/web/#code=a%20%3D%202%0D%0Aprint(%24%22a%20is%20%7Ba%7D%22)%0D%0Aa%20%2B%3D%202%0D%0Aprint(%24%22I%20added%202%20and%20now%20it's%20%7Ba%7D%22))

## Conditionals

Programming isn't just about arithmetics, tho, so let's get into the flow — or the "control flow", as computer scientists would call it.

```pluto
a = 1
b = 2

if a + b == 4 then
    print("The sum is 4!")
else
    print("The sum is not 4. Could you change a or b to fix it?")
end
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=a%20%3D%201%0D%0Ab%20%3D%202%0D%0A%0D%0Aif%20a%20%2B%20b%20%3D%3D%204%20then%0D%0A%20%20%20%20print(%22The%20sum%20is%204!%22)%0D%0Aelse%0D%0A%20%20%20%20print(%22The%20sum%20is%20not%204.%20Could%20you%20change%20a%20or%20b%20to%20fix%20it%3F%22)%0D%0Aend)

As you see, the message being printed changes based on whether the expression `a + b == 4` is _true_ or _false_.

## Loops

We can't just change _if_ code will run, but also how often. For example, we could make a script that counts from 1 to 10:

```pluto
for i=1, 10 do
    print(i)
end
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=for%20i%3D1%2C%2010%20do%0D%0A%20%20%20%20print(i)%0D%0Aend)

We can also change the interval. For example, count from 0 to 100 in intervals of 10:

```pluto
for i=0, 100, 10 do
    print(i)
end
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=for%20i%3D0%2C%20100%2C%2010%20do%0D%0A%20%20%20%20print(i)%0D%0Aend)

## Tables

Alright, you know the basic control flow, and data types (numbers and string), so let's look at a more interesting data type: tables. These can store organised data, for example, scores for each player in a game:

```pluto
players = {
    ["John"] = 15,
    ["Jane"] = 10,
    ["Bob"] = 12,
}
for name, score in players do
    print($"{name} has a score of {score}.")
end
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=players%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%2012%2C%0D%0A%7D%0D%0Afor%20name%2C%20score%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20a%20score%20of%20%7Bscore%7D.%22)%0D%0Aend)

Notice how we're still using a for-loop, but this time we're _iterating_ over the our players table instead of a range of numbers.

We can also store tables within tables, so we could have more data than just a single number for each player:

```pluto
players = {
    ["John"] = {
        ["kills"] = 15,
        ["deaths"] = 5,
    },
    ["Jane"] = {
        ["kills"] = 10,
        ["deaths"] = 8,
    },
    ["Bob"] = {
        ["kills"] = 12,
        ["deaths"] = 8,
    },
}
for name, data in players do
    print($"{name} has {data.kills} kills and {data.deaths} deaths.")
end
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=players%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%205%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2012%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%7D%0D%0Afor%20name%2C%20data%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20%7Bdata.kills%7D%20kills%20and%20%7Bdata.deaths%7D%20deaths.%22)%0D%0Aend)

## Calculating K/D ratios

Let's put all of what we've learned so far to the test and make a program that actually does some work for us instead of the other way around.

```pluto
players = {
    ["John"] = {
        ["kills"] = 15,
        ["deaths"] = 5,
    },
    ["Jane"] = {
        ["kills"] = 10,
        ["deaths"] = 8,
    },
    ["Bob"] = {
        ["kills"] = 12,
        ["deaths"] = 8,
    },
}
-- Add "kd" field to each player
for players as player do
    player.kd = player.kills / player.deaths
end
-- Print
for name, data in players do
    print($"{name} has a K/D of {data.kd}.")
end
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=players%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%205%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2012%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%7D%0D%0A--%20Add%20%22kd%22%20field%20to%20each%20player%0D%0Afor%20players%20as%20player%20do%0D%0A%20%20%20%20player.kd%20%3D%20player.kills%20%2F%20player.deaths%0D%0Aend%0D%0A--%20Print%0D%0Afor%20name%2C%20data%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20a%20K%2FD%20of%20%7Bdata.kd%7D.%22)%0D%0Aend)

Notice another variant of the for-loop: The for-as loop. This is handy for calculating the K/D since we don't care about the name.

## Encapsulation in functions

We've been using functions quite a bit — or at least, the `print` function — so it's about time we make our own function.

```pluto
function calculate_kd(plys: table)
    for plys as ply do
        ply.kd = ply.kills / ply.deaths
    end
end
players = {
    ["John"] = {
        ["kills"] = 15,
        ["deaths"] = 5,
    },
    ["Jane"] = {
        ["kills"] = 10,
        ["deaths"] = 8,
    },
    ["Bob"] = {
        ["kills"] = 12,
        ["deaths"] = 8,
    },
}
calculate_kd(players)
for name, data in players do
    print($"{name} has a K/D of {data.kd}.")
end
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=function%20calculate_kd(plys%3A%20table)%0D%0A%20%20%20%20for%20plys%20as%20ply%20do%0D%0A%20%20%20%20%20%20%20%20ply.kd%20%3D%20ply.kills%20%2F%20ply.deaths%0D%0A%20%20%20%20end%0D%0Aend%0D%0Aplayers%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%205%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2012%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%7D%0D%0Acalculate_kd(players)%0D%0Afor%20name%2C%20data%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20a%20K%2FD%20of%20%7Bdata.kd%7D.%22)%0D%0Aend)

And as you can see, the code behaves exactly the same as before! Perhaps not very interesting, but better than the alternative.

Let's break down what exactly is happening:
- On the first line, we declare a function with the name `calculate_kd` and a parameter `plys` of type `table`. Note that the `: table` part is optional, but it's always good to be explicit about assumptions! (Didn't think you'd find relationship advice here, did you?)
- Then near the end of the script, we call `calculate_kd` with our `players` table as an argument.

## Local variables

Next, I'd like to introduce local variables, but you've actually already seen them! In the example above, the `calculate_kd` function's `plys` argument is a local variable, because it is only available within that function's body.

However, other than having a local variable by virtue of it being a function parameter, we can also manually define one just like we've already defined variables except we put `local` before it:

```pluto
local a = 1
print(a)
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20a%20%3D%201%0D%0Aprint(a))

## Nil values

However, what happens when we use a variable we didn't define, or we don't give it a value?

```pluto
local no_value_given
print(no_value_given)
print(never_defined)
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20no_value_given%0D%0Aprint(no_value_given)%0D%0Aprint(never_defined)%0D%0A)

As you can see, this prints "nil" two times, so that's the answer — we get `nil` in both cases. `nil` is a special type that is used as the result of valueless expressions.

## Where to go from here

You should now have an understanding of the fundemantals of Pluto. If you want to learn more, the rest of this documentation is certainly a good place to learn more about Pluto.

You could start with some of the Pluto features we already made use of in this guide:
- [String Interpolation](New%20Features/String%20Interpolation.md) (`$`-strings)
- [For-As Loop](New%20Features/For-As%20Loop.md)
- [Type Hinting](New%20Features/Type%20Hinting.md)

If you want to understand the underpinnings of Pluto a bit better, [the Lua manual](https://www.lua.org/manual/5.4/) would be a good place to look.
