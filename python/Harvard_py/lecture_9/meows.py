def meow(n: int) -> None:
    return "meow\n" * n
        
        
number: int = int(input("Number: "))
meows: str = meow(number)
print(meows, end="")


