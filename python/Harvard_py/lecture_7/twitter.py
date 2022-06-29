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

import re
url = input("What's your url? ").strip()

username = re.sub("(https?://)?(www\.)?twitter.com/", "", url)
print(f"username: {username}")
