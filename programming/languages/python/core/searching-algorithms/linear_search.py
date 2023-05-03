def linear_search(my_list, key):
    for i in range(0, len(my_list)):
        if my_list[i] == key:
            return i

    return -1


print(linear_search([1, 2, 6, 4], 16))
