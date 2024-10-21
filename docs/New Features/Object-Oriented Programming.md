---
sidebar_position: 3
---
Pluto makes a plethora of improvements when it comes to object-oriented programming.

## Method Creation

A series of methods was otherwise ugly to implement into a Lua table.
```pluto title="Old Code"
local t = {}

function t:f1(...) end
function t:f2(...) end
function t:f3(...) end
```
Now, you can inline these statements inside of your table.
```pluto title="New Code"
local t = {
    function f1() end,
    function f2() end,
    function f3() end
}
```
This automatically marks the functions as methods.
:::caution
Keep in mind, this produces *methods*, meaning you'll need to use the colon invocation syntax to avoid positional ambiguities in your parameters.
:::

## Static Functions

For consistency with the above syntax, you can use 'static function' to declare non-method functions in your tables:

```pluto
local t = {
    static function say(msg)
        print(msg)
    end
}
t.say("Hello") -- "Hello"
```

#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20t%20%3D%20%7B%0D%0A%20%20%20%20static%20function%20say(msg)%0D%0A%20%20%20%20%20%20%20%20print(msg)%0D%0A%20%20%20%20end%0D%0A%7D%0D%0At.say(%22Hello%22)%20--%20%22Hello%22)

## New Operator

Pluto adds an easy way to make instances with the `new` operator. This operator will also call the `__construct` method if it exists.

```pluto
local Human = {
    function __construct(name)
        self.name = name
    end
}
local john = new Human("John")
print(john.name) -- John
```

#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20Human%20%3D%20%7B%0D%0A%20%20%20%20function%20__construct(name)%0D%0A%20%20%20%20%20%20%20%20self.name%20%3D%20name%0D%0A%20%20%20%20end%0D%0A%7D%0D%0Alocal%20john%20%3D%20new%20Human(%22John%22)%0D%0Aprint(john.name)%20--%20John)

Note that for compatibility with Lua and C API classes, the `new` operator checks for the existence of a static 'new' function. If it exists, `new X(...)` will be identical to `X.new(...)`.

## Class Statement

The `class` statement is similar to a table constructor, but it does not require commas or semicolons:

```pluto
class Human
    function __construct(name)
        self.name = name
    end

    function __gc()
        print(self.name .. " died of irrelevance")
    end
end
local john = new Human("John")
```

The class statement also supports modifiers: `local class NAME`, `export class NAME`

### Class Expression

There is also a `class` expression, which can be used e.g. when assigning to a variable:

```pluto
local Human = class
    function __construct(name)
        self.name = name
    end
end
```

### Extends

The class statement also supports `extends` to specify a parent:

```pluto
class Entity
    age = 1
end

class Human extends Entity
end

local human = new Human()
print(human.age) -- 1
```
This also adds a `__parent` field to Human.

#### [Try It Yourself](https://pluto-lang.org/web/#code=class%20Entity%0D%0A%20%20%20%20age%20%3D%201%0D%0Aend%0D%0A%0D%0Aclass%20Human%20extends%20Entity%0D%0Aend%0D%0A%0D%0Alocal%20human%20%3D%20new%20Human()%0D%0Aprint(human.age)%20--%201)

## Parent Expression

The `parent` expression is a shorthand for `self.__parent`, which also supports method call syntax, in which case it's a shorthand for `self.__parent.METHOD(self, ...)`.

```pluto
class Entity
    function __construct(name)
        self.name = name
    end
end

class Human extends Entity
    -- If we don't define __construct, the parent-constructor would be called automatically.
    -- However, if we overwrite it, we can use parent:__construct to call it manually.
    function __construct(name)
        parent:__construct(name)
    end
end

local human = new Human("John")
print(human.name) -- "John"
```

Note that if you have a local variable (or function parameter) called "parent", the `parent` expression will defer to it.

#### [Try It Yourself](https://pluto-lang.org/web/#code=class%20Entity%0D%0A%20%20%20%20function%20__construct(name)%0D%0A%20%20%20%20%20%20%20%20self.name%20%3D%20name%0D%0A%20%20%20%20end%0D%0Aend%0D%0A%0D%0Aclass%20Human%20extends%20Entity%0D%0A%20%20%20%20--%20If%20we%20don't%20define%20__construct%2C%20the%20parent-constructor%20would%20be%20called%20automatically.%0D%0A%20%20%20%20--%20However%2C%20if%20we%20overwrite%20it%2C%20we%20can%20use%20parent%3A__construct%20to%20call%20it%20manually.%0D%0A%20%20%20%20function%20__construct(name)%0D%0A%20%20%20%20%20%20%20%20parent%3A__construct(name)%0D%0A%20%20%20%20end%0D%0Aend%0D%0A%0D%0Alocal%20human%20%3D%20new%20Human(%22John%22)%0D%0Aprint(human.name)%20--%20%22John%22)

## Private Fields

Pluto allows you to specify if a field is 'public' or 'private'. Private fields can only be accessed by the class that defined them.

```pluto
class Human
    public name
    private age

    function __construct(name, age)
        self.name = name
        self.age = age
    end

    function getAge()
        return self.age
    end
end

local human = new Human("John", 42)
print(human.name) -- "John"
print(human:getAge()) -- 42
print(human.age) -- nil
```

#### [Try It Yourself](https://pluto-lang.org/web/#code=class%20Human%0D%0A%20%20%20%20public%20name%0D%0A%20%20%20%20private%20age%0D%0A%0D%0A%20%20%20%20function%20__construct(name%2C%20age)%0D%0A%20%20%20%20%20%20%20%20self.name%20%3D%20name%0D%0A%20%20%20%20%20%20%20%20self.age%20%3D%20age%0D%0A%20%20%20%20end%0D%0A%0D%0A%20%20%20%20function%20getAge()%0D%0A%20%20%20%20%20%20%20%20return%20self.age%0D%0A%20%20%20%20end%0D%0Aend%0D%0A%0D%0Alocal%20human%20%3D%20new%20Human(%22John%22%2C%2042)%0D%0Aprint(human.name)%20--%20%22John%22%0D%0Aprint(human%3AgetAge())%20--%2042%0D%0Aprint(human.age)%20--%20nil)

## Constructor Promotion

Because a common task of `__construct` methods is to assign the value of arguments to table fields, Pluto provides a simple syntax to reduce this boilerplate:

```pluto
class Human
    function __construct(public name, private age)
    end

    function getAge()
        return self.age
    end
end

local human = new Human("John", 42)
print(human.name) -- "John"
print(human:getAge()) -- 42
print(human.age) -- nil
```

#### [Try It Yourself](https://pluto-lang.org/web/#code=class%20Human%0D%0A%20%20%20%20function%20__construct(public%20name%2C%20private%20age)%0D%0A%20%20%20%20end%0D%0A%0D%0A%20%20%20%20function%20getAge()%0D%0A%20%20%20%20%20%20%20%20return%20self.age%0D%0A%20%20%20%20end%0D%0Aend%0D%0A%0D%0Alocal%20human%20%3D%20new%20Human(%22John%22%2C%2042)%0D%0Aprint(human.name)%20--%20%22John%22%0D%0Aprint(human%3AgetAge())%20--%2042%0D%0Aprint(human.age)%20--%20nil)

## Instanceof Operator

The `instanceof` operator can be used to check if a table is a class instance, including inherited classes:

```pluto
class Entity end
class Human extends Entity end
local e = new Entity()
local h = new Human()
print(e instanceof Entity) -- true
print(e instanceof Human) -- false
print(h instanceof Entity) -- true (by inheritance)
print(h instanceof Human) -- true
```
It can also be used as a function:
```pluto
class Entity end
local e = new Entity()
print(instanceof(e, Entity)) -- true
```

#### [Try It Yourself](https://pluto-lang.org/web/#code=class%20Entity%20end%0D%0Aclass%20Human%20extends%20Entity%20end%0D%0A%0D%0Alocal%20e%20%3D%20new%20Entity()%0D%0Alocal%20h%20%3D%20new%20Human()%0D%0A%0D%0Aprint(e%20instanceof%20Entity)%20--%20true%0D%0Aprint(e%20instanceof%20Human)%20--%20false%0D%0Aprint(h%20instanceof%20Entity)%20--%20true%20(by%20inheritance)%0D%0Aprint(h%20instanceof%20Human)%20--%20true%0D%0A%0D%0Aprint(instanceof(e%2C%20Entity))%20--%20true%0D%0A)

:::info
Note that, while the instanceof operator generates Lua-compatible bytecode, the instanceof function is a part of Pluto's standard library, and hence unavailable under Lua.
:::

## Using Compatibility Mode?

Some of the syntax discussed here may be different due to compatiblity mode:
- `new` -> `pluto_new`
- `class` -> `pluto_class`
- `parent` -> `pluto_parent`

Alternatively, `pluto_use new, class, parent` will enable these keywords independently of environment settings.
