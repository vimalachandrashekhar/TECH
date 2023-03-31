def filter_palindromes(words):
    
    palindromes = []
    for word in words:
        if word == word[::-1]:
            palindromes.append(word)
    return palindromes
my_words = ["deed", "wow", "level", "world", "vimala" , "malayalam"]
print(filter_palindromes(my_words))
