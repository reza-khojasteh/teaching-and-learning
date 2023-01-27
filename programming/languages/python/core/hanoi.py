# a recursive solution to the Towers of Hanoi problem

def hanoi(f, s, t, n):
    if n <= 0:
        return
    if n == 1:
        print(f, "->", t)
    else:
        hanoi(f, t, s, n - 1)
        print(f, "->", t)
        hanoi(s, f, t, n - 1)


hanoi('f', 's', 't', 3)
