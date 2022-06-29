# url = input("What's your url? ").strip()
# print(url)

# url = input("What's your url? ").strip()
# 
# username = url.replace("https://www.twitter.com/", "")
# print(f"username: {username}")

# import re
# url = input("What's your url? ").strip()
# 
# username = re.sub("https://www.twitter.com/", "", url)

# import re
# url = input("What's your url? ").strip()
# 
# username = re.sub("(https?://)?(www\.)?twitter.com/", "", url)
# print(f"username: {username}")

# As a software engineering best practice, you should always increment the complexity of your ReGex into small chunks 
# Stepwise refinement 



import re
url = input("What's your url? ").strip()

matches = re.search("^https?://(?:www\.)?twitter.com/([a-z0-9_]+)", url, re.IGNORECASE)
if matches:
    print(f"username:", matches.group(1))
    
    

