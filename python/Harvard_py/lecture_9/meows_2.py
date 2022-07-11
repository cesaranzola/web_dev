import sys

if len(sys.argv) == 1:
    print("Meow")
elif len(sys.argv) == 3 and sys.argv[1] == "-n":
    n = int(sys.argv[2])
    for _ in range(n):
        print("Meow")
else:
    print("Usage: meows_2.py")
    