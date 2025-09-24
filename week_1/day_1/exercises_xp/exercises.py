# Exercise 1 : Hello World
print("Hello World\n" * 4)

# Exercise 2 : Some Math
result = (99 ** 3) * 8
print(result)

# Exercise 3 : What’s your name ?
user_name = input("What's your name ?")
my_name = "Souhail"
if user_name.strip().lower() == my_name.lower():
    print(f"Wow! We have the same name {my_name}")
else:
    print(f"Nice to meet you, {user_name}! But sorry, {my_name} is cooler")

# Exercise 4 : Tall enough to ride a roller coaster
height = int(input("Enter your height in cm: "))
if height >= 145:
    print("You are tall enough to ride the roller coaster!")
else:
    print("Sorry, you need to grow some more before you can ride.")

# Exercise 5 : Favorite Numbers
my_fav_numbers = {1, 7, 10}
print("My favorite numbers:", my_fav_numbers)

# Add two new numbers
my_fav_numbers.add(15)
my_fav_numbers.add(27)
print("After adding two numbers:", my_fav_numbers)

removed_number = my_fav_numbers.pop()
print(f"Removed number: {removed_number}")
print("After removing one number:", my_fav_numbers)

# Create a set with friend's favorite numbers
friend_fav_numbers = {5, 7, 13}
print("Friend's favorite numbers:", friend_fav_numbers)
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)

# Exercise 6: Tuple
numbers = (1, 2, 3)

# Tuples are immutable, so we cannot directly add integers.
new_numbers = numbers + (4, 5)
print("Original tuple:", numbers)
print("New tuple with added integers:", new_numbers)

# Exercise 7: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print("Apples count:", basket.count("Apples"))
basket.clear()
print(basket)

# Exercise 8 : Sandwich Orders
sandwich_orders = [
    "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich",
    "Pastrami sandwich"
]
print("The deli has run out of pastrami!\n")

# Remove all "Pastrami sandwich"
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []
# Move sandwiches to finished_sandwiches
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    print(f"I made your {current_sandwich.lower()}")
    finished_sandwiches.append(current_sandwich)

