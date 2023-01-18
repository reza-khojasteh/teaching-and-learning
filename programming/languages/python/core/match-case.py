mycolor = 'Yellow'

match mycolor.lower():
    case 'blue':
        print('Blue')
    case 'green':
        print('Green')
    case 'yellow':
        print('Yellow')
    case _:
        print('Any other color!')
