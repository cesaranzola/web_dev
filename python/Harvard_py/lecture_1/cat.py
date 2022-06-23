# print("meow")
# print("meow")
# print("meow")
# print("meow")

# i = 3
# while i != 0:
    # print("meow")
    # i -= 1

# For loop using lists
# for i in [0, 1, 2]:
    # print("meow")
    
# for loop using range function
# for _ in range(3):
    # print("meow")
    
# Pythonic way 
# print("meow\n" * 3, end="")

# While True example
# while True:
#     n = int(input("What's n? "))
#     if n > 0:
#         break

# for _ in range(n):
#     print("meow")
    
    
def main():
    n = get_num()
    meow(n)
    
def get_num():
    while True:
        n = int(input("What's n? "))
        if n > 0:
            break
    return n

def meow(n):
    for _ in range(n):
        print("meow")
        
main()
    