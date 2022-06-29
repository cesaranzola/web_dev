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
    
# import re
# email = input("Please enter your email address: ").strip()
# 
# if re.search("^[^]+@[^@]+\.edu$", email):
    # print("Valid")
# else:
    # print("Invalid")
    

# import re
# email = input("Please enter your email address: ").strip()
# 
# if re.search("^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.edu$", email):
    # print("Valid")
# else:
    # print("Invalid")
    

# import re
# email = input("Please enter your email address: ").strip()
# 
#\w represents alpha-numeric characters and underscore
# if re.search("^\w+@\w+\.(edu|com|gov|net|org)$", email):
    # print("Valid")
# else:
    # print("Invalid")

# import re
# email = input("Please enter your email address: ").strip()
# 
#\w represents alpha-numeric characters and underscore
# if re.search("^\w+@\w+\.(edu|com|gov|net|org)$", email, re.IGNORECASE):
    # print("Valid")
# else:
    # print("Invalid")   

# import re
# email = input("Please enter your email address: ").strip()
# 
#\w represents alpha-numeric characters and underscore
# if re.search("^\w+@(\w+\.)?\w+\.edu$", email, re.IGNORECASE):
    # print("Valid")
# else:
    # print("Invalid")      
    
import re
email = input("Please enter your email address: ").strip()

# \w represents alpha-numeric characters and underscore
if re.search("^(\w|\.)+@(\w+\.)?\w+\.edu$", email, re.IGNORECASE):
    print("Valid")
else:
    print("Invalid")      