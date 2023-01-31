def recursive_power_simulator(value, number):
    if number == 0:
        return 1
    elif number == 1:
        return value
    else:
        return value * recursive_power_simulator(value, number - 1)


print(recursive_power_simulator(3, 3))
