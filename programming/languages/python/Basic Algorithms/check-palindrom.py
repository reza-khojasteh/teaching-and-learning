# A recursive solution to check if a string is a palindrome:
def is_palindrome(word):
    def check_two_sides(left, right):
        if left >= right:
            return True
        elif word[left] == word[right]:
            return check_two_sides(left + 1, right - 1)
        return False

    return check_two_sides(0, len(word) - 1)


# testing cases
print(is_palindrome("noon"))
print(is_palindrome("table"))
