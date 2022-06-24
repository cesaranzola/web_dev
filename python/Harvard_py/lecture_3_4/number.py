
# try:
    # x = int(input("What's x? "))
    # print(f"x is {x}")
# except ValueError:
    # print("It is not an integer.")

# try:
    # x = int(input("What's x? "))
# except ValueError:
    # print("It is not an integer.")
# else:
    # print(f"x is {x}")

# The else clause is associated with the try statement nor with the except clause.


# Third iteration to the program
# while True:
    # try:
        # x = int(input("What's x? "))
    # except ValueError:
        # print("It is not an integer.")
    # else:
        # break
# print(f"x is {x}")


# Use functions with the try and except clauses
# def main():
    # x = get_int()
    # print(f"x is {x}")
# 
# def get_int():
    # while True:
        # try: # Statement 
            # x = int(input("What's x? "))
        # except ValueError:
            # print('It is not an integer.')
        # else:
            # break
    # return x # return is stronger than break keyword, you can return and at the same time it will break the execution
# 
# main()


# Return the function without using the break keyword
# def main():
    # x = get_int()
    # print(f"x is {x}")
# 
# def get_int():
    # while True:
        # try:
            # x = int(input("What's x? "))
        # except ValueError:
            # print('It is not an integer.')
        # else:
            # return x
    # 
# main()

# Refinements
# def main():
    # x = get_int()
    # print(f"x is {x}")
# 
# def get_int():
    # while True:
        # try:
            # return int(input("What's x? "))
        # except ValueError:
            # print('x is not an integer')
# 
# main()


# Using the pass keyword
# def main():
    # x = get_int()
    # print(f"x is {x}")
# 
# def get_int():
    # while True:
        # try:
            # return int(input("What's x? "))
        # except ValueError:
            # pass
# 
# main()


# Final iteration 
def main():
    x = get_int("What's x? ")
    print(f"x is {x}")
    
def get_int(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            pass
main()
        
    