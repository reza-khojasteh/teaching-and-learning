# A simple program to find the two numbers that add up to a goal number
def sum_to_goal(goal, list_of_numbers):
    dictionary_of_numbers = {}

    for i in list_of_numbers:
        if dictionary_of_numbers.get(goal - i) is not None:
            return i, dictionary_of_numbers[goal - i]
        else:
            dictionary_of_numbers[i] = i

    return -1


print(sum_to_goal(9, [1, 3, 5, 4, 5]))