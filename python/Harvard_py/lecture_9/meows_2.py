import argparse

parser = argparse.ArgumentParser(description="Meow like a cat")
parser.add_argument("-n", help="Number of times to meow", type=int, default=1)
args = parser.parse_args()

for _ in range(int(args.n)):
    print("Meow")
    
