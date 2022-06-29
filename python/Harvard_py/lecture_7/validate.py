# email = input("What's your email? ").strip()
# 
# if "@" in email:
    # print("Valid")
# else:
    # print("Invalid")

# email = input("Please enter your email address: ").strip()
# 
# if "@" in email and "." in email:
    # print("Valid")
# else:
    # print("Invalid")

# email = input("Please enter your email address: ").strip()
# username, domain = email.split("@")
# 
# if username  and "." in domain:
    # print("Valid")
# else:
    # print("Invalid")

# email = input("Please enter your email address: ").strip()
# username, domain = email.split("@")
# 
# if username  and domain.endswith(".edu"):
    # print("Valid")
# else:
    # print("Invalid")
    
    
# import re
# email = input("Please enter your email address: ").strip()
# 
# if re.search(".+@.+\.edu", email):
    # print("Valid")
# else:
    # print("Invalid")


# import re
# email = input("Please enter your email address: ").strip()
# 
# if re.search("^.+@.+\.edu$", email):
    # print("Valid")
# else:
    # print("Invalid")
    
import re
email = input("Please enter your email address: ").strip()

if re.search("^[^]+@[^@]+\.edu$", email):
    print("Valid")
else:
    print("Invalid")