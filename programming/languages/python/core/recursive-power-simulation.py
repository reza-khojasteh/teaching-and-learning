def recursive_power_simulation(value, number):
    if number == 0:
        return 1
    elif number == 1:
        return value
    else:
        return value * recursive_power_simulation(value, number - 1)


print(recursive_power_simulation(3, 3))
