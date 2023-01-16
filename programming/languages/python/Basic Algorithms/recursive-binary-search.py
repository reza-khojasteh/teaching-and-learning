# A recursive binary search solution:
# the function takes in a list and a key,
# the function returns the index of the key if found,
# otherwise, it returns -1.
def binary_search(sorted_list, key):
    if not sorted_list or len(sorted_list) == 0:
        return -1
    else:
        return recursive_binary_search(sorted_list, key, 0, len(sorted_list) - 1)


def recursive_binary_search(sorted_list, key, low_index, high_index):
    if low_index <= high_index:
        middle = (low_index + high_index) // 2

        if sorted_list[middle] == key:
            return middle
        elif key < sorted_list[middle]:
            return recursive_binary_search(sorted_list, key, low_index, middle - 1)
        else:
            return recursive_binary_search(sorted_list, key, middle + 1, high_index)
    else:
        return -1


# OR
# def binary_search(list, item):
#     #base case
#     if not list or len(list) == 0:
#         return -1
#     else:
#         mid = len(list) // 2
#         if list[mid] == item:
#             return mid
#         elif item < list[mid]:
#             return binary_search(list[:mid], item)
#         else:
#             index = binary_search(list[mid + 1:], item)
#             if index == -1:
#                 return -1
#             else:
#                 return mid + 1 + index

print(binary_search([1, 2, 3, 4, 5], 4))