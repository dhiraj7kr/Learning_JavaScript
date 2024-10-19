# Python3 program for explaining
# use of list, tuple, set and 
# dictionary

# Lists
l = []

# Adding Element into list
l.append(5)
l.append(10)
l.append("Dhiraj")
print("Adding 5, 10 and Dhiraj  in list", l)

# Popping Elements from list
l.pop()
print("Popped one element from list", l)
print()

# Set
s = set()

# Adding element into set
s.add(5)
s.add(10)
print("Adding 5 and 10 in set", s)

# Removing element from set
s.remove(5)
print("Removing 5 from set", s)
print()

# Tuple
t = tuple(l)

# Tuples are immutable
print("Tuple", t)
print()

# Dictionary
d = {}

# Adding the key value pair
d[5] = "Five"
d[10] = "Ten"
print("Dictionary", d)

# Removing key-value pair
del d[10]
print("Dictionary", d)

# Python3 program to show the
# working of upper() function
text = 'dhiRaj iStHe aBoss'

# upper() function to convert
# string to upper case
print("\nConverted String to uper case:")
print(text.upper())

# lower() function to convert
# string to lower case
print("\nConverted String to lowe case:")
print(text.lower())

# converts the first character to 
# upper case and rest to lower case 
print("\nConverted String to title:")
print(text.title())

# swaps the case of all characters in the string
# upper case character to lowercase and viceversa
print("\nConverted String to swap case:")
print(text.swapcase())

# convert the first character of a string to uppercase
print("\nConverted String to text capatalization:")
print(text.capitalize())

# original string never changes
print("\nOriginal String")
print(text)
