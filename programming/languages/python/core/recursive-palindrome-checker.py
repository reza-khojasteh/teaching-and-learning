def recursive_palindrome_checker(mystring, a, b):
    if a >= b:
        return True
    else:
        if mystring[a] != mystring[b]:
            return False
        else:
            return recursive_palindrome_checker(mystring, a + 1, b - 1)


def palindrome_checker(mystring):
    return recursive_palindrome_checker(mystring, 0, len(mystring) - 1)


print(palindrome_checker("racacare"))

# Or:
# def is_palindrome(word):
#     def check_two_sides(left, right):
#         if left >= right:
#             return True
#         elif word[left] == word[right]:
#             return check_two_sides(left + 1, right - 1)
#         return False

#     return check_two_sides(0, len(word) - 1)


# # testing cases
# print(is_palindrome("noon"))
# print(is_palindrome("table"))
