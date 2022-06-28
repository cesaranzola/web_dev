# name = input("What's your name? ")
# print(f"Hello, {name}")

# names = []
# for _ in range(3):
    # names.append(input("What's your name? "))
# 
# for name in sorted(names):
    # print(f"Hello, {name}")


    
name = input("What's your name? ")

file = open("names.txt", 'w')
file.write(name)
file.close()

