# Exercise 1 : Convert lists into dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))
print(result)

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

# Exercise 3: Zara
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2

print("Zara's clients are:", brand["type_of_clothes"])

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print("Last competitor:", brand["international_competitors"][-1])

print("Major US colors:", brand["major_color"]["US"])

print("Number of pairs:", len(brand))

print("Keys:", brand.keys())

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)

print("Number of stores:", brand["number_stores"])

# Exercise 4 : Some Geography
def describe_city(city, country = "morocco"):
    print(f"{city} is in {country}")

describe_city('rabat')

import random

def guess_number(user_number):
    random_number = random.randint(1, 100)  
    if user_number == random_number:
        print(" Success! You guessed the number!")
    else:
        print("Fail. Your number:", user_number, "| Random number:", random_number)

guess_number(25)  

# Exercise 6 : Let’s create some personalized shirts !
def make_shirt(size, message):
    print(f"The size of the shirt is {size} and the text is '{message}'")

make_shirt("M", "Code is life")

def make_shirt(size="L", message="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{message}'")

make_shirt()                        
make_shirt("M")                     
make_shirt("S", "Keep learning!")  

make_shirt(message="Debug > Sleep", size="XL")

# Exercise 7 : Temperature Advice
import random

# Function to get random temperature
def get_random_temp(season):
    if season == "winter":
        return random.randint(-10, 16)
    elif season == "spring":
        return random.randint(10, 23)
    elif season == "summer":
        return random.randint(24, 32)
    elif season == "autumn":
        return random.randint(16, 23)
    else:
        return random.randint(-10, 40) 

# Main function
def main():
    season = input("Enter a season (winter, spring, summer, autumn): ").lower()
    temp = get_random_temp(season)

    print(f"The temperature right now is {temp}°C.")

    if temp < 0:
        print("that’s freezing! Wear some extra layers today.")
    elif temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif temp <= 23:
        print("Nice weather, not too hot, not too cold.")
    elif temp <= 32:
        print("Warm day! Perfect for outdoor activities.")
    else:
        print("It’s really hot! Stay hydrated!")

# Call the main function
main()

# Exercise 8 : Star Wars Quiz
# Star Wars Quiz Data
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

# Function to run the quiz
def run_quiz():
    correct = 0
    incorrect = 0
    wrong_answers = []

    for q in data:
        user_answer = input(q["question"] + " ")
        if user_answer.strip().lower() == q["answer"].lower():   
            print("✅ Correct!\n")
            correct += 1
        else:
            print("Wrong!\n")
            incorrect += 1
            wrong_answers.append({
                "question": q["question"],
                "your_answer": user_answer,
                "correct_answer": q["answer"]
            })
    return correct, incorrect, wrong_answers

# Function to show results
def show_results(correct, incorrect, wrong_answers):
    print("Results:")
    print("Correct answers:", correct)
    print("Incorrect answers:", incorrect)

    if wrong_answers:
        print("\nHere are the questions you got wrong:")
        for w in wrong_answers:
            print(f"- Q: {w['question']}")
            print(f"  Your answer: {w['your_answer']}")
            print(f"  Correct answer: {w['correct_answer']}\n")

    # Bonus: Ask to play again if more than 3 wrong
    if incorrect > 3:
        retry = input("You got more than 3 wrong. Do you want to play again? (yes/no): ").lower()
        if retry == "yes":
            print("\n🔄 Restarting quiz...\n")
            main()

# Main function
def main():
    correct, incorrect, wrong_answers = run_quiz()
    show_results(correct, incorrect, wrong_answers)

# Start quiz
main()
