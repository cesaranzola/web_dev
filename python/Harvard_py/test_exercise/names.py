# name = input("What's your name? ")
# print(f"Hello, {name}")

# names = []
# for _ in range(3):
    # names.append(input("What's your name? "))
# 
# for name in sorted(names):
    # print(f"Hello, {name}")



# name = input("What's your name? ")

# "w" overwrites each time the file, if yoy want to add subsequent data, you have to change it to 'a' that stands for append
# file = open("names.txt", 'w')
# file.write(name)
# file.close()


# name = input("What's your name? ")
# file = open("names.txt", 'a')
# file.write(f"{name}\n")
# file.close()


# =================================================================
# ========================= With statement ====================

# name = input("What's your name? ")
# With keyword allow us to open and close a file immediately after execution
# with open("names.txt", 'a') as file:
    # file.write(f"{name}\n")


# Only read a file 
# name = input("What's your name? ")
with open("names.txt", 'r') as file:
    lines = file.readlines()

for line in lines:
    print(f"Hello,", line.rstrip())
        

