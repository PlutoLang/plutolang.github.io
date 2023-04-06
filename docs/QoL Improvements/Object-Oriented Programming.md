Pluto makes a plethora of improvements when it comes to object-oriented programming.

## Method Creation

A series of methods was otherwise ugly to implement into a Lua table.
```pluto showLineNumbers title="Old Code"
local t = {}

function t:f1(...) end
function t:f2(...) end
function t:f3(...) end
```
Now, you can inline these statements inside of your table.
```pluto showLineNumbers title="New Code"
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

```pluto showLineNumbers
local t = {
    static function say(msg)
        print(msg)
    end
}
t.say("Hello") -- "Hello"
```

## New Expression

Pluto adds an easy way to make instances with the `new` expression. This expression will also call the `__construct` method if it exists.

```pluto showLineNumbers
local Human = {
    function __construct(name)
        self.name = name
    end
}
local john = new Human("John")
print(john.name) -- John
```

## Class Statement

The `class` statement is similar to a table constructor, but it does not require commas or semicolons:

```pluto showLineNumbers
class Human
    function __construct(name)
        self.name = name
    end

    function __gc()
        print(self.name .. " died of irrelevance")
    end
}
local john = new Human("John")
```

The class statement also supports modifiers: `local class NAME`, `export class NAME`

### Class Expression

There is also a `class` expression, which can be used e.g. when assigning to a variable:

```pluto showLineNumbers
local Human = class
    function __construct(name)
        self.name = name
    end
end
```

### Extends

The class statement also supports `extends` to specify a parent:

```pluto showLineNumbers
class Entity
    age = 1
end

class Human extends Entity
end

local human = new Human()
print(human.age) -- 1
```

This also adds a `__parent` field to Human.

## Parent Expression

The `parent` expression is a shorthand for `self.__parent`, which also supports method call syntax, in which case it's a shorthand for `self.__parent.METHOD(self, ...)`.

```pluto showLineNumbers
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

## Using Compatibility Mode?

Some of the syntax discussed here may be different due to compatiblity mode:
- `new` -> `pluto_new`
- `class` -> `pluto_class`
- `parent` -> `pluto_parent`
