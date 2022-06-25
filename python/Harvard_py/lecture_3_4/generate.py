# import random
# 
# coin = random.choice(["heads", "tails"])
# print(coin)

# how to import an specific function from a module?
# It is considered a best practice to import the entire module to control the scope and have var and function with the same name 
# as the one found on the module itself
# from random import choice
# 
# coin = choice(["heads", "tails"])
# print(coin)


# import random 

# number = random.randint(1, 100)
# print(number)


# Shuffle - a function to randomize a list of values

# cards = ["king", "queen", "jack"]
# random.shuffle(cards)
# for card in cards:
    # print(card)


# import statistics
# 
# print(statistics.mean([90, 100]))

# import sys
# 
# print("Hello, my name is " + str(sys.argv[1]))

# import sys
# try:
    # print("Hello, my name is " + str(sys.argv[1]))
# except IndexError:
    # print("Too few arguments.")
    
import sys

if len(sys.argv) < 2:
    print("Too few arguments.")
elif len(sys.argv) > 2:
    print("Too many arguments.")
else:
    print("Hello, my name is " + str(sys.argv[1]))

