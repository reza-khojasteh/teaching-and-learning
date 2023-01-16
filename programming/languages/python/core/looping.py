NAMES = ["Reza", "Ryan"]
AGES = [47, 2]

# while loop
i = 0
while i < len(NAMES):
    print(NAMES[i], AGES[i])
    i += 1

# for loop
for name in NAMES:
    print(name)

# for loop using zip
for name, age in zip(NAMES, AGES):
    print(f"{name} {age}")

# for loop using reversed
for name in reversed(NAMES):
    print(name)

# for loop using range
for i in range(2):
    print(NAMES[i])

# for loop using enumerate
for i, name in enumerate(NAMES):
    print(f"{i} {name}")
