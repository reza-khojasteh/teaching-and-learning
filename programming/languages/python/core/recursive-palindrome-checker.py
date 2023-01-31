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


print(palindrome_checker("racacar"))
