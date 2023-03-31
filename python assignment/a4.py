#printing median value
def calculate_median(numbers):
    numbers_sorted = sorted(numbers)
    n = len(numbers_sorted)
    if n % 2 == 0:
        
        middle_left = numbers_sorted[n//2 - 1]
        middle_right = numbers_sorted[n//2]
        median = (middle_left + middle_right) / 2
    else:
        
        median = numbers_sorted[n//2]
    return median

numbers = [1, 5, 2, 8, 4, 7]
median = calculate_median(numbers)
print(median)
