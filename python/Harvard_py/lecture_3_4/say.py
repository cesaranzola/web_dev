import sys

from sayings import goodbye
# If you are going to use multiple functions from the same library, you might as well import the complete library
# import sayings

if len(sys.argv) == 2:
    goodbye(sys.argv[1])