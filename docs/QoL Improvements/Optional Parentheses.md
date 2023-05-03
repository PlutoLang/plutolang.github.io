The parenthesis around some types of expressions are optional now.
```pluto showLineNumbers title="Gross Way"
print(("hello world"):contains("world"))
```
```pluto showLineNumbers title="Clean Way"
print("hello world":contains("world"))
```
This also works for table types.