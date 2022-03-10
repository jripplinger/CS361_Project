def get_random():
    file = open("random_nums", "r")
    nums = file.readlines()
    return nums
    
def nums_to_phone_nums(nums):
    file = open("./components/PhoneNumber.js", "w")
    file.write("import React from \"react\";\nfunction PhoneNumber() {\n\treturn (\n\t<div>\n")
    for i in range(len(nums)):
        file.write("\t")
        file.write(nums[i])
    file.write("\n\t</div>\n\t)\n};\nexport default PhoneNumber;")
    file.close()

nums = get_random()
nums_to_phone_nums(nums)
