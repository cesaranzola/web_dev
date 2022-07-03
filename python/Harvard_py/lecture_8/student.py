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
from webbrowser import get


class Student():
    # Dunder or magic methods in python
    def __init__(self, name, house):
        self.name = name
        self.house = house
# class Student:
def main():
    student = get_student()
    print(f"{student.name} from {student.house}")
    
def get_student():
    name = input("Name: ")
    house = input("House: ")
    student = Student(name, house)
    return student 

if __name__ == '__main__':
    main()
    
    
