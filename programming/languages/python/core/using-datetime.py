import csv
from datetime import datetime
from pprint import pprint

with open("laureates.csv", "r") as f:
    reader = csv.DictReader(f)
    laureates = list(reader)

for laureate in laureates:
    if laureate["surname"] == "Einstein":
        # pprint(type(laureate)) # <class 'dict'>
        year_date = datetime.strptime(laureate["year"], "%Y")
        # print(type(year_date))  # <class 'datetime.datetime'>
        born_date = datetime.strptime(laureate["born"], "%Y-%m-%d")
        # print(type(born_date))  # <class 'datetime.datetime'>
        print(
            f"(Roughly) Age at which they received the prize: {year_date.year - born_date.year}")
        break
