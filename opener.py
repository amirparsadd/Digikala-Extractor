import webbrowser

PREFIX = "https://www.digikala.com/search/?q="

searchs = open("./data.txt", encoding="UTF-8").read().splitlines()

for query in searchs:
  webbrowser.open_new_tab(PREFIX + query)
  input("Press Enter For Next Result: ")