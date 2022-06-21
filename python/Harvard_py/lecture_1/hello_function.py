# def hello(to):
    # print("Hello,", to)
# 
# name = input("What's your name? ")
# hello(name)


# Define default parameter in a function
# def hello(to="World"):
    # print("Hello,", to)
# 
# hello()
# name = input("What's your name? ")
# hello(name)

# Calling functions inside another functions
# def main():
    # name = input("What's your name? ")
    # hello(name)
# 
# def hello(to="World"):
    # print("Hello,", to)
# 
# main()


def main():
    x = int(input("What's your name? "))
    print("x squared is:", square(x))
    
# Version 1    
# def square(n):
    # return n ** 2

# Version 2
# def square(n):
    # return n * n

# Version 3
def square(n):
    return pow(n, 2)

main()








