# Ask use for name
# name = input("What's your name? ")
# print("Hello, " + name)

# Alternative print version
# print("Hello,", name)

# How to modify the default behavior of the print function
# print("Hello, ", end="") # End modifies the default behavior of printing a new line, it does nothing instead
# print(name)

# Print sep parameter
# It changes the single space separator for a double question mark
# In Python you have positional parameters, they are executed in the same order you wrote them, on the contrary, named parameters can be added at the end of the function
# print("Hello,", name, sep="??")


# How to scape characters in a string
# print("Hello, \"friend\"")


# Another pythonic way to print a string
name = input("What's your name? ")

# How to remove whitespace from the string
name = name.strip()

# Capitalize user's name
name = name.capitalize()


# Capitalize each input word
name = name.title()

print(f"Hello, {name}")
