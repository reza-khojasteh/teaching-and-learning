# Author: Reza Khojasteh
# Date: 2023-01-30
# Quick sort is a divide and conquer algorithm and requires O(n^2) for the worst case and O(nlog(n)) for the best and average case.
# Regardig space complexity, it requires O(log(n)) for the best case and O(n) for the worst and average case.
# The worst case occurs when the partition process always picks greatest or smallest element as pivot.
# The best case occurs when the partition process always picks the middle element as pivot.
# The average case occurs when the pivot is chosen randomly.
# The worst case occirs when the partition process always picks greatest or smallest element as pivot.

def quick_sort(my_list):
    n = len(my_list)
    if n > 1:
        recursive_quick_sort(my_list, 0, n - 1)


def recursive_quick_sort(my_list, start=0, end=None):
    # uncomment the following two 'print(my_list)' statements and the last commented out ones to see the outcome of the quick sort algorithm, after each swap!
    if end - start > 0:
        pivot = end
        pivot_element = my_list[end]
        i = start
        j = end - 1
        while i <= j:
            while i <= j and my_list[i] <= pivot_element:
                i += 1
            while i <= j and my_list[j] > pivot_element:
                j -= 1
            if i < j:
                my_list[i], my_list[j] = my_list[j], my_list[i]
                i += 1
                j -= 1
                # print(my_list)
        if i != pivot:
            my_list[i], my_list[pivot] = my_list[pivot], my_list[i]
            # print(my_list)
        recursive_quick_sort(my_list, 0, i - 1)
        recursive_quick_sort(my_list, i + 1, end)


# my_list = [5, 4, 3, 2, 1]
# print("Before Sorting: ", my_list)
# quick_sort(my_list)
# print("After Sorting: ", my_list)
