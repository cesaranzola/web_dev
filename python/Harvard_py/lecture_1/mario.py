# print("#")
# print("#")
# print("#")

# for _ in range(3):
    # print("#")


# def main():
    # print_column(3)
# 
# def print_column(height):
    # for _ in range(height):
        # print("#")
# 
# main()

# def main():
    # print_column(3)
# 
# def print_column(height):
    # print("#\n" * height, end="")
    # 
# 
# main()

# def main():
#     print_row(4)


# def print_row(width):
#     print("?" * width)

# main()


# def main():
    # print_square(4)
# 
# def print_square(size):
    # for i in range(size):
        # for j in range(size):
            # print("#", end="")    
        # print("")
# 
# main()
    
def main():
    print_square(4)

def print_square(size):
    for i in range(size):
        print_row(size)
    
def print_row(width):
    print("#" * width)

main()


# It is considered best practice to only return a function at the bottom of it
# If you return the function from an arbitrary position it can be frown upon 
