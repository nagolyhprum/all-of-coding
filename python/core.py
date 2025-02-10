# This is a comment - python only supports inline comments

# variables names follow standard naming conventions of
# [a-zA-Z_][a-zA-Z0-9_]*

# Primitives
var_integer = 10
var_float = 11.1
var_string = "text content"
var_true = True
var_false = False
var_none = None

# you can use the type(x) function to determine types
# DO NOT USE ==
if type(var_integer) is int:
    print("Yes")

# recommended especially for classical inheritance
if isinstance(var_integer, int):
    print("Yes")

if isinstance(var_integer, (int, float)):
    print("Yes")

# None should use just is
if var_none is None:
    print("Yes")

# Tuple type checking is more complicated
def check_tuple_shape(t):
    """
    This is a docstring - it gets stored as function.__doc__
    Verifies the shape of a tuple
    """
    return isinstance(t, tuple) and len(t) == 3 and isinstance(t[0], int) and isinstance(t[1], str) and isinstance(t[2], float)

t1 = (42, "hello", 3.14)
t2 = (42, "hello")  # Wrong length
t3 = ("not an int", "hello", 3.14)  # Wrong type in first position

print(check_tuple_shape(t1))  # ✅ True
print(check_tuple_shape(t2))  # ❌ False
print(check_tuple_shape(t3))  # ❌ False

# Data Structures

# lists can be altered (add / remove)
var_list = [10, False, "Last"]

# tuples are final - cannot be changed
# tuple[0] = 5 # eg: this would be an error
var_tuple = (10, False, "Last")

# there are also diff functions in sets for convenience
var_set = set()
var_set.add(10)
var_set.remove(10)
var_set.clear()
var_alt_set = { 10, False, "Last" }

var_dictionary = dict()
var_alt_dictionary = {}


print(var_dictionary, var_alt_dictionary)

# Control Flow

if True:
    # pass allows you to have empty bodys for blocking code
    pass
elif True:
    pass
else:
    pass

# Iteration
for item in [1, 2, 3]:
    print(item)

for i in range(5):  # 0 to 4
    print(i)

for i in range(1, 6):  # 1 to 5
    print(i)

for i in range(0, 10, 2):  # 0, 2, 4, 6, 8 (step of 2)
    print(i)

# incase you want indices
words = ["apple", "banana", "cherry"]
for index, word in enumerate(words):
    print(index, word)

# incase you need to combine arrays
# Stops at the shortest sequence if they have different lengths.
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")


# dictionary iteration
# keys(), values(), and items() provide different ways to iterate.
person = {"name": "Alice", "age": 25, "city": "NY"}
for key in person:
    print(key, person[key])  # Default iteration is over keys

for key, value in person.items():
    print(key, value)  # Iterates over key-value pairs
    break
    continue
else:
    print("The loop completed without a break")

# List Comprehension
# [$expression for $iterator in $iterable]
# {$expression for $iterator in $iterable}
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]


# Generators
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for num in countdown(3):
    print(num)  # 3, 2, 1

var_global = True

def function(a, b, c, *args, **kwargs):
    # try to avoid global and nonlocal
    global var_global # allows us to mutate var_global
    var_global = False
    print(type(args)) # tuple
    print(type(kwargs)) # dictionary
    print(a, b, c, args, kwargs)
    def inner():
        # for nested functions only
        nonlocal a # allows us to mutate a
    pass

function("a", "b", "c", 1, 2, 3, other=True, notMe={})

# they are anonymous (un-named)
var_lambda = lambda x: True

# OOP

class ClassName:
    other = 3 # static
    prop : bool # instance - optional
    def __init__(self):
        """
        This is the parent docs
        """
        self.prop = True
    # A
    def doSomething(self):
        # B
        print(self.prop)
        self.prop = False
        print(self.prop)
        self.__private()
    # private and protected are convention and not always enforced
    # start with _ to make it protected (self / child access only)
    def _protected():
        pass
    # start with __ to make it prive (self access only)
    def __private():
        pass

# decorators take the decorated entity and returns a new one
# you can decorate functions and class
def Decorator(cls):
    print(cls)
    return cls

@Decorator
# inheritance
class Child(ClassName):
    def __init__():
        """
        This is the child docs
        """
        # important - self is a function
        super().__init__()
    # simply override - no keywords necessary
    def doSomething(self):
        # simply override - no keywords necessary
        super()._protected()
        self._protected()
        super().doSomething()
        super().__private()
    # magic / dunder functions
    def __str__():
        pass
    # return a string that looks like the code to recreate the object
    def __repr__():
        pass
    def __add__():
        pass
    def __eq__():
        pass
    # interacts with len()
    def __len__():
        pass
    def __getitem__(self, key):
        pass
    def __setitem__(self, key, value):
        pass
    # interacts with del
    def __del__():
        pass
    # call this as a function
    def __call__(self, *args):
        pass
    # Helper decorators
    @property
    def value():
        pass
    @value.setter
    def value():
        pass
    @value.deleter
    def value():
        pass

    
instance = ClassName()
print(ClassName.other)
print(instance.prop)

print(instance.__init__.__doc__)
print(instance.doSomething.__doc__)
print(check_tuple_shape.__doc__)

# Files

# a - append is also an option
# with ensures the file is properly closed after reading/writing
with open("./README.md", "r") as file:
    content = file.read()
    # file.readline()
    # file.readlines()
    # file.write("content")
    # file.writelines(["", "", ""])
    print(content)
    
# Error handling

try:
    # code with errors goes here
    # except handlers
    pass
except ZeroDivisionError:
    # catches a specific error
    pass
except ValueError:
    # catches a specific error
    pass
except Exception as e:
    # generic exception handler
    pass
finally:
    # always runs
    pass

# Advanced

# Requests
# Testing / Debugging