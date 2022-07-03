#=========================
# immutability

# def main():
    # student = get_student()
    # print(f"{student[0]} from {student[1]}")
# 
# def get_student():
    # name = input("Name: ")
    # house = input("House: ")
    # return (name, house)
# 
# if __name__ == "__main__":
    # main()

# Mutable list 
# def main():
    # student = get_student()
    # if student[0] == "Padma":
        # student[1] == "Ravenclaw"
    # print(f"{student[0]} from {student[1]}")
# 
# def get_student():
    # name = input("Name: ")
    # house = input("House: ")
    # return [name, house]
# 
# if __name__ == "__main__":
    # main()
    
    
# Dictionary



class Student():
    # Dunder or magic methods in python
    def __init__(self, name, house):
        # This type of conditional assignments are unique to classes, a dict will add a key automatically whenever you assign  one to it
        if not name:
            raise ValueError("Missing name")
        if house != ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]:
            raise ValueError("Invalid house")
        self.name = name
        self.house = house
# class Student:
def main():
    student = get_student()
    print(f"{student.name} from {student.house}")
    
def get_student():
    name = input("Name: ")
    house = input("House: ")
    # Constructor form - It's going to instantiate a Student object for you, by using the student class as a mold or blueprint
    student = Student(name, house)
    return student 

if __name__ == '__main__':
    main()
    
    
