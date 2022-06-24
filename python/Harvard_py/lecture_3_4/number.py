
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
def main():
    x = get_int()
    print(f"x is {x}")

def get_int():
    while True:
        try:
            x = int(input("What's x? "))
        except ValueError:
            print('It is not an integer.')
        else:
            break
    return x

main()

