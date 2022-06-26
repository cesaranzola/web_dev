from calculator import square

def main():
    # test_square()
    test_positive(),
    test_negative(),
    test_zero()

# Example 1
# def test_square():
    # if square(2) != 4:
        # print("2 square was not 4.")
    # if square(3) != 9:
        # print("3 square was not 9.")
    
# Example 2 - Using assert and try and except 
# def test_square():
#     try:
#         assert square(2) == 4
#     except AssertionError:
#         print("2 squared was not 4.")
#     try:
#         assert square(3) == 9
#     except AssertionError:
#         print("3 squared was not 9.")
#     try:
#         assert square(-2) == 4
#     except AssertionError:
#         print("-2 squared was not 4.")
#     try:
#         assert square(-3) == 9
#     except AssertionError:
#         print("-3 squared was not 9.")
#     try:
#         assert square(0) == 0
#     except AssertionError:
#         print("0 squared was not 0.")
    
    
# Example 3
# def test_square():
#     assert square(2) == 4
#     assert square(3) == 9
#     assert square(-2) == 4
#     assert square(-3) == 9
#     assert square(0) == 0
    
    
    
def test_positive():
    assert square(2) == 4
    assert square(3) == 9

def test_negative():
    assert square(-2) == 4
    assert square(-3) == 9

def test_zero():
    assert square(0) == 0

if __name__ == "__main__":
    main()

