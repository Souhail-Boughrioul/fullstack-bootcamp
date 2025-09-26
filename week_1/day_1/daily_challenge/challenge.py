# challenge 1
number = int(input("give me a number"))
length = int(input("give me a length"))

multiples = []

for i in range(1, length + 1):
    multiples.append(number * i)

print(multiples)

# challenge 2
word = input("Enter a word: ")
result = ""

for char in word:
    if char not in result:  
        result += char

print(result)