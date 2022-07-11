# args is use for positional arguments = numbers divide by commas
# kwargs are used for keyword arguments = name of the parameter equal to some value

# Variatic functions
def f(*args, **kwargs):
    print("Positional:", args)
    
f(100, 50, 25)
