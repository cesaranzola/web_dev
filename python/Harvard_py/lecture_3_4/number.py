
# try:
    # x = int(input("What's x? "))
    # print(f"x is {x}")
# except ValueError:
    # print("It is not an integer.")

try:
    x = int(input("What's x? "))
except ValueError:
    print("It is not an integer.")
else:
    print(f"x is {x}")

