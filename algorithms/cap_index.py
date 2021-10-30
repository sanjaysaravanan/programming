sample_str = "aBCdefGH"

cap_letter_list = ["A", "B", "Z"]
cap_index_list = []
index = 0
for i in sample_str:
    if i in cap_letter_list:
        cap_index_list.append(index)
    index += 1

print(cap_index_list)
