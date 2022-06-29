# name = input("What's your name? ")
# if "," in name:
    # last, first = name.split(", ")
    # name = f"{first} {last}"
# print(f"Hello, {name}")

# import re
# name = input("What's your name? ")
# matches = re.search("^(.+), (.+)$", name)
# if matches:
    # last, first = matches.groups()
    # name = f"{first} {last}"
# print(f"Hello, {name}")




# import re
# name = input("What's your name? ")
# 
# Only to this function isn't use a zero-indexed list, the 0 is reserved for some other value relate to the string
# matches = re.search("^(.+), (.+)$", name)
# if matches:
    # name = matches.group(2) + " " + matches.group(1)
# print(f"Hello, {name}")



# import re
# name = input("What's your name? ") 
# matches = re.search("^(.+), *(.+)$", name)
# if matches:
    # name = matches.group(2) + " " + matches.group(1)
# print(f"Hello, {name}")

import re
name = input("What's your name? ") 
# := The Walrus operator, which assign the value from right to left and at the same time returns a boolean value
if matches := re.search("^(.+), *(.+)$", name):
    name = matches.group(2) + " " + matches.group(1)
print(f"Hello, {name}")

