# Author: Reza Khojasteh
# Date: 2023-01-27
# Merge sort is a divide and conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is the key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
# Merge sort requires O(nlog(n)) for the worst case and O(n) extra space.

def merge_sort(my_list):
    n = len(my_list)
    if n > 1:
        mid = n // 2
        left = my_list[:mid]
        right = my_list[mid:]
        merge_sort(left)
        merge_sort(right)
        i = j = k = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                my_list[k] = left[i]
                i += 1
            else:
                my_list[k] = right[j]
                j += 1
            k += 1
        while i < len(left):
            my_list[k] = left[i]
            i += 1
            k += 1
        while j < len(right):
            my_list[k] = right[j]
            j += 1
            k += 1
    # print(my_list) # uncomment this line to see the steps of the merge sort algorithm


# merge_sort([4, 2, 3, 1]) # uncomment this line to see the steps of the merge sort algorithm
