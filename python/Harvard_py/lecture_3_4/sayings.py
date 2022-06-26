
def main():
    hello("world"),
    goodbye("world")

def hello(name):
    print(f"Hello, " + name)

def goodbye(name):
    print(f"Goodbye, " + name)


# Only run thew function when yoy run the file directly, if you use it as a library it won't execute the main function     
## double underscore functions belong to the program, and nobody is allowed to use it them as regular functions names
if __name__ == "__main__":
    main()
    
# By default, Python names the programs as __main__, if you import a library the name that it will display is the name of the file not __main__













    
