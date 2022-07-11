def total(galleons, sickles, knuts):
    return (galleons * 17 + sickles) * 29 + knuts

coins = [100, 50, 25]
# How to unpack the data from a list using the * symbol, similar to spread in JavaScript
print(total(*coins), "Knuts")



