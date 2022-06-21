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
def main():
    name = input("What's your name? ")
    hello(name)

def hello(to="World"):
    print("Hello,", to)

main()









