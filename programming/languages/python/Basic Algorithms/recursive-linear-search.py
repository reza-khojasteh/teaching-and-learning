# write a recursive linear search solution:
# the function takes in a list and a key,
# the function returns the index of the key if found,
# otherwise, it returns -1.
def linear_search(list, key):
    return recursive_linear_search(list, key, 0)


def recursive_linear_search(list, key, index):
    if list is None or len(list) == 0:
        return -1
    else:  # OR return index if list[0] == key else recursive_linear_search(list[1:], key, index + 1)
        if list[0] == key:
            return index
        else:
            return recursive_linear_search(list[1:], key, index + 1)


# OR
# def linear_search(list, item):
#     #base case
#     if len(list) == 0:
#         return -1
#     #recursive case
#     if list[0] == item:
#         return 0
#     else:
#         index = linear_search(list[1:], item)
#         if index == -1:
#             return -1
#         else:
#             return 1 + index


# generate a list of random numbers
import random

list = random.sample(range(1, 100), 10)
print(f"Unsorted List: {list}")
print(linear_search(list, 10))