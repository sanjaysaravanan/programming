""" 
    222020034000

"""

test_str = "0000020034000"

max_count = 0

counter = 0

for i in test_str:
    if i == "0":
        counter += 1
    else:
        if max_count <= counter:
            max_count = counter
        counter = 0


if max_count >= counter print(max_count) else print(counter)