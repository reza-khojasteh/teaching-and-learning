def binary_search(my_list, key):
    low_index = 0                   # low_index stores lowest index where you might find key
    # high_index stores highest index where you might find key
    high_index = len(my_list) - 1
    # initially these indexes cover every element in array

    while low_index <= high_index:  # when low_index become bigger than high index, we stop
        # because we have eliminated all possiblities
        # be careful here, we need to find mid point
        mid_index = (low_index + high_index) // 2
        # this is NOT high_index/2.  That only works
        # when low_index == 0
        if key == my_list[mid_index]:
            return mid_index
        elif key < my_list[mid_index]:
            high_index = mid_index - 1
        else:
            low_index = mid_index + 1

    return -1


print(binary_search([1, 2, 6, 14], 16))
