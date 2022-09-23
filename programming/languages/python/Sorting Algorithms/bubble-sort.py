#A simple program to sort a list of numbers using the bubble sort algorithm
#O(n^2) solution    
def bubble_sort(list):
    n = len(list)
    for i in range(n - 1):
        for j in range(n - 1):
            if list[j] > list[j + 1]:
                list[j + 1], list[j] = list[j], list[j + 1]
                # print(list)


import random

list = random.sample(range(1, 100), 10)
print(f"Unsorted List: {list}")
bubble_sort(list)
print(f"Sorted List: {list}")




