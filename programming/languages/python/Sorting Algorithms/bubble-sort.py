# A simple program to sort a list of numbers using the bubble sort algorithm with O(n^2)
import random

# Version 1


# def bubble_sort(list):
#     n = len(list)
#     for i in range(n - 1):
#         for j in range(n - 1):
#             if list[j] > list[j + 1]:
#                 list[j + 1], list[j] = list[j], list[j + 1]
#                 # print(list)

# Version 2


# def bubble_sort(list):
#     n = len(list)
#     for i in range(n - 1):
#         for j in range(n - 1 - i):
#             if list[j] > list[j + 1]:
#                 list[j + 1], list[j] = list[j], list[j + 1]
#                 # print(list)

# Version 3 (with with O(n^2) for the best)


def bubble_sort(list):
    n = len(list)

    for i in range(n - 1):
        swapped = False

        for j in range(n - 1 - i):
            if list[j] > list[j + 1]:
                list[j + 1], list[j] = list[j], list[j + 1]
                swapped = True

        if not swapped:
            break


list = random.sample(range(1, 100), 10)
print(f"Unsorted List: {list}")
bubble_sort(list)
print(f"Sorted List: {list}")