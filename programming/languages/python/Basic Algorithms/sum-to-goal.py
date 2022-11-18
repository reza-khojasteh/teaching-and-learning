# A simple program to find the two numbers that add up to a goal number

# O(n^2) solution
# def sum_to_goal(goal, list_of_numbers):
#     for i in range(len(list_of_numbers)):
#         for j in range(i + 1, len(list_of_numbers)):
#             if list_of_numbers[i] + list_of_numbers[j] == goal:
#                 return list_of_numbers[i], list_of_numbers[j]

#     return -1

# O(nlogn) solution
# def sum_to_goal(goal, list_of_numbers):
#     list_of_numbers.sort()

#     i = 0
#     j = len(list_of_numbers) - 1

#     while i < j:
#         if list_of_numbers[i] + list_of_numbers[j] == goal:
#             return list_of_numbers[i], list_of_numbers[j]
#         elif list_of_numbers[i] + list_of_numbers[j] > goal:
#             j -= 1
#         else:
#             i += 1

#     return -1

# O(n) solution
# def sum_to_goal(goal, list_of_numbers):
#     dictionary_of_numbers = {}

#     for i in list_of_numbers:
#         if dictionary_of_numbers.get(goal - i) is not None:
#             return dictionary_of_numbers[goal - i], i
#         else:
#             dictionary_of_numbers[i] = i

#     return -1

# Or even better (to save space in storing entries as we don't need to store indices here):
def sum_to_goal(goal, list_of_numbers):
    set_of_numbers = set()  # and not {} as that is reserved for creating empty dicts only!

    for i in list_of_numbers:
        # check if the difference between the goal and the current number is in the set
        if goal - i in set_of_numbers:
            return goal - i, i
        # if not, add the current number to the set
        else:
            set_of_numbers.add(i)

    # if we reach here, it means we didn't find a pair of numbers that add up to the goal
    return -1


print(sum_to_goal(9, [1, 3, 5, 4, 5]))
