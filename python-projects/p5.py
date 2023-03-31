#quiz game
import random

questions = [
    {
        "question": "The battel of plassey was fought in?",
        "choices": ["A. 1757", "B. 1782", "C. 1748", "D. 1764"],
        "answer": "B"
    },
    {
        "question": "Which of the following is used in pencils?",
        "choices": ["A. Graphite", "B. Silicon", "C. Charcoal", "D. Phosphorous"],
        "answer": "A"
    },
    {
        "question": "OS abbrevation usually means?",
        "choices": ["A. order of significance", "B. open software", "C. operating system", "D. optical sensor"],
        "answer": "C"
    },
    {
        "question": "What is the highest mountain in the world?",
        "choices": ["A. K2", "B. Mount Everest", "C. Denali", "D. Kilimanjaro"],
        "answer": "B"
    }
]

def ask_question(question):
    print(question["question"])
    for choice in question["choices"]:
        print(choice)
    answer = input("Enter your answer (A, B, C, or D): ")
    return answer.upper()

def play_quiz():
    score = 0
    random.shuffle(questions)
    for question in questions:
        user_answer = ask_question(question)
        if user_answer == question["answer"]:
            print("Correct!")
            score += 1
        else:
            print(f"Incorrect. The correct answer is {question['answer']}.")
    print(f"\nYour final score is {score} out of {len(questions)}.")

play_quiz()
