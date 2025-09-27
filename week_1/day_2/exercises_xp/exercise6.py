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

