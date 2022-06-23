# students = ["Hermione", "Harry", "Ron"]
# print(students[0])
# print(students[1])
# print(students[2])

# List using a for loop
# students = ["Hermione", "Harry", "Ron"]
# for student in students:
    # print(student)

# List and len method
# students = ["Hermione", "Harry", "Ron"]
# for i in range(len(students)):
    # print(i + 1, students[i])

# Hardcoded example
# students = ["Hermione", "Harry", "Ron"]
# houses = ["Gryffindor", "Gryffindor", "Gryffindor", "Slytherin"]

# =================================================================
# ========================== Dictionaries =========================

# students = {
    # "Hermione": "Gryffindor",
    # "Harry": "Gryffindor",
    # "Ron": "Gryffindor",
    # "Draco": "Slytherin",
# }
# 
# print(students["Hermione"])
# print(students["Harry"])
# print(students["Ron"])
# print(students["Draco"])


# students = {
    # "Hermione": "Gryffindor",
    # "Harry": "Gryffindor",
    # "Ron": "Gryffindor",
    # "Draco": "Slytherin",
# }
# 
#If you loop through a dict, it will print the keys
# for student in students:
    # print(student, students[student], sep=", ")


# A list of dicts 
students = [
    { "name": "Hermione", "house": "Gryffindor", "patronus": "Otter"},
    { "name": "Harry", "house": "Gryffindor", "patronus": "Stag"},
    { "name": "Ron", "house": "Gryffindor", "patronus": "Jack Russell Terrier"},
    { "name": "Draco", "house": "Slytherin", "patronus": "None"},
]

for student in students:
    print(student["name"], student["house"], student["patronus"])
    

