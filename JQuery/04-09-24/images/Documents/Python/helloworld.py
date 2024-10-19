# print("Hello world!")

# INDENTATION: EXAMPLE

j=1 
while(j<=5):
 print(j)
 j=j+1

if 5>2:
 print("Five is greater then 2")  #use onwe space
if 5<8:
    print("Five is less then 8") #use 4 space (best use)


#VARIABLE
x=5
y="Dhiraj Kumar"

print(x)
print(y)

#CASTING

a= float(6) #this will be 6.0
A= "Acuvate"
print(A)

#TYPE
print(type(x))
print(type(a))

#VARIABLES NAME

myname ="Dhiraj kr"
my_name ="Dhiraj_kr"
myName ="dhirajKumar"
MYNAME ="DHIRAJ KUMAR"
myname2 ="Dhirajkumar2"
_myname ="_dhirajkumar"

print(myname)
print(my_name)
print(myName)
print(MYNAME)
print(myname2)
print(_myname)

#Many Values to Multiple Variables
x, y, z = "hero" , "honda" , "Gunda"
print(x)
print(y)
print(z)

# One Value to Multiple Variables
x = y = z = "Orange"
print(x)
print(y)
print(z)


#GLOBAL VARIABLE 
x= "Awsome"
def myfun(): #function
  print("Dhiraj is " + x)
myfun()  


x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()

print("Python is " + x)

x = ["apple", "banana", "sweet"] #LIST

print(x)
print(type(x))

x = ("apple", "banana", "cherry") #TUPLE
print(x)
print(type(x))

x = {"name" : "John", "age" : 36}
print(x)
print(type(x))

x = {"apple", "banana", "cherry"}
print(x)
print(type(x))


#ARTHMETIC OPERATION 

# Addition
a = 10
b = 5
print(a + b)  # Output: 15

# Subtraction
print(a - b)  # Output: 5

# Multiplication
print(a * b)  # Output: 50

# Division
print(a / b)  # Output: 2.0

# Modulus (remainder)
print(a % b)  # Output: 0

# Exponentiation
print(a ** b)  # Output: 100000

# Floor division
print(a // b)  # Output: 2


#Comparison Operators

# Equal to
print(a == b)  # Output: False

# Not equal to
print(a != b)  # Output: True

# Greater than
print(a > b)  # Output: True

# Less than
print(a < b)  # Output: False

# Greater than or equal to
print(a >= b)  # Output: True

# Less than or equal to
print(a <= b)  # Output: False


#Logical Operators

x = True
y = False

# AND
print(x and y)  # Output: False

# OR
print(x or y)  # Output: True

# NOT
print(not x)  # Output: False


#Assignment Operators

# Simple assignment
a = 10

# Add and assign
a += 5  # Equivalent to a = a + 5
print(a)  # Output: 15

# Subtract and assign
a -= 3  # Equivalent to a = a - 3
print(a)  # Output: 12

# Multiply and assign
a *= 2  # Equivalent to a = a * 2
print(a)  # Output: 24

# Divide and assign
a /= 4  # Equivalent to a = a / 4
print(a)  # Output: 6.0


#Bitwise Operators

x = 10  # 1010 in binary
y = 4   # 0100 in binary

# AND
print(x & y)  # Output: 0 (0000 in binary)

# OR
print(x | y)  # Output: 14 (1110 in binary)

# XOR
print(x ^ y)  # Output: 14 (1110 in binary)

# NOT
print(~x)  # Output: -11 (inverts bits)

# Left Shift
print(x << 2)  # Output: 40 (101000 in binary)

# Right Shift
print(x >> 2)  # Output: 2 (0010 in binary)


# Identity Operators

a = [1, 2, 3]
b = [1, 2, 3]
c = a

# is
print(a is b)  # Output: False (different objects)
print(a is c)  # Output: True (same object)

# is not
print(a is not b)  # Output: True


#Membership Operators

my_list = [1, 2, 3, 4, 5]

# in
print(3 in my_list)  # Output: True

# not in
print(6 not in my_list)  # Output: True


#IF-ELSE CONDITION

x = 10
if x > 5:
    print("x is greater than 5")


x = 3
if x > 5:
    print("x is greater than 5")
else:
    print("x is not greater than 5")


#IF-ELIF-ELSE

x = 10
if x > 10:
    print("x is greater than 10")
elif x == 10:
    print("x is equal to 10")
else:
    print("x is less than 10")

#Loops

#FOR LOOP- Looping through a list

my_list = [1, 2, 3, 4, 5]
for item in my_list:
    print(item)

#FOR LOOP THROUGH RANGE

for i in range(5):
   print(i)


#loop though string
for char in "Hello":
    print(char)


#while loop

#BASIC WHILE LOOP 
x = 0
while x < 5:
    print(x)
    x += 1

X=3
while(X<9):
   print(X)
   X=X+1

#Using break, continue, and pass
   
for i in range(10):
    if i == 3:
        continue  # Skip when i is 3
    elif i == 7:
        break  # Stop the loop when i is 7
    elif i == 5:
        pass  # Do nothing when i is 5
    print(i)


#POSITION AND KEYWORD ARGUMENT

def introduction(name, age):
   print(f"my name is {name} and my age is {age}")
introduction("dhiraj", 22)
introduction(name="Raman", age=21)

#Functions and Scope

def greet(name="Guest"):
   print(f"Hello {name} !")

greet()
greet("Dhiraj")   

#Arbitrary Arguments

def sum_number(*args):
   total=0
   for num in args:
      total +=num
   return total  
print(sum_number(1, 2, 3, 4, 8))


def show_details(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

show_details(name="Alice", age=30, city="New York")
