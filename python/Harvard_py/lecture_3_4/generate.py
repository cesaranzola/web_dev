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


import random 

# number = random.randint(1, 100)
# print(number)


# Shuffle - a function to randomize a list of values

cards = ["king", "queen", "jack"]
random.shuffle(cards)
for card in cards:
    print(card)

