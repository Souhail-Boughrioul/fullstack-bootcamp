# Exercise 1: What is the Season?
month = int(input("Enter a month (1-12): "))

if month in [3, 4, 5]:
    print("Spring")
elif month in [6, 7, 8]:
    print("Summer")
elif month in [9, 10, 11]:
    print("Autumn")
elif month in [12, 1, 2]:
    print("Winter")
else:
    print("Invalid month")

# Exercise 2: For Loop
numbers = list(range(1, 21))
# Print numbers from 1 to 20
for i in numbers:
    print(i)
print()  # for newline

# Print numbers with even index (0,2,4,... in range 1-20)
for i in numbers:
    if (i-1) % 2 == 0:  # index of i in 1-20 list
        print(i)

# Exercise 3: While Loop
my_name = "Souhail"  

name = ""
while name.strip().lower() != my_name.lower() :
    name = input("Enter your name: ")

print("Welcome!", my_name)

# Exercise 4: Check the index
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter your name: ")

if user_name in names:
    print("Index:", names.index(user_name))
else:
    print("Name not found")

# Exercise 5: Greatest Number
# Ask the user for 3 numbers
num1 = float(input("Input the 1st number: "))
num2 = float(input("Input the 2nd number: "))
num3 = float(input("Input the 3rd number: "))

# Find the greatest number
greatest = max(num1, num2, num3)

print("The greatest number is:", greatest)

# Exercise 6: Random number
import random

# Ask the user for a number
user_number = int(input("Enter a number from 1 to 9: "))

# Generate a random number between 1 and 9
random_number = random.randint(1, 9)

# Check if the user guessed correctly
if user_number == random_number:
    print("Winner")
else:
    print("Better luck next time.")