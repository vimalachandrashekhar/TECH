#printing a string with all vowels removed
a = input("Enter the sentence: ")
vowels = "AEIOUaeiou"
b = ""

for char in a:
    if char not in vowels:
        b= b + char

print(b)