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