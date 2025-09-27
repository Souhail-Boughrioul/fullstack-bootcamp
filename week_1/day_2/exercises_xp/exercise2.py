# Exercise 2 : Cinemax 
family = {}

n = int(input("How many family members? "))

for _ in range(n):
    name = input("Enter name: ")
    age = int(input(f"Enter age of {name}: "))
    family[name] = age

total_cost = 0

for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    print(f"{name} has to pay ${cost}")
    total_cost += cost

print(f"Total cost for the family: ${total_cost}")
