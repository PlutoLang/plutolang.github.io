The parenthesis around some types of expressions are optional now.
```lua showLineNumbers title="Gross Way"
print(("hello world"):contains("world"))
```
```lua showLineNumbers title="Clean Way"
print("hello world":contains("world"))
```
In the future, this is planned to expand towards table types.