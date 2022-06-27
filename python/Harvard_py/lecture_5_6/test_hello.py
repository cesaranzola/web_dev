from hello import hello 


def test_default():
    assert hello() == "hello, world"

def test_argument():
    assert hello("Cesar") == "hello, Cesar"

# Your unit test should be short and sweet, otherwise you can generate bugs inside your tests
c