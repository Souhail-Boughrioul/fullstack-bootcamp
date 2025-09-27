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
