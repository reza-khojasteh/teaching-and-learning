# A simple Python program to calculate the number of hours in a day...
hours_in_a_day = 24


def days_to_hours(num_of_days):
    return f"{num_of_days} day(s) is/are {num_of_days * hours_in_a_day} hours."


def calculate_hours(num_of_days):
    try:
        user_input_number = int(num_of_days)

        # we want to do conversion only for positive integers
        if user_input_number > 0:
            calculated_value = days_to_hours(user_input_number)
            print(calculated_value)
        elif user_input_number == 0:
            print("You entered a '0'! Please enter a valid positive number!")
        else:
            print(f"You entered a negative number: '{num_of_days}'! Please enter a valid positive number!")

    except ValueError:
        print(f"Your input: '{num_of_days}', is not a valid number!")


user_input = input("Enter a comma separated list of days and I will convert them to hours!\n")
while user_input != "exit":
    for num_of_days in set(user_input.split(", ")):
        calculate_hours(num_of_days)
    user_input = input("Enter a comma separated list of days and I will convert them to hours!\n")