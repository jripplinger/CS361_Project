from random import randint

def generate_random():
    phone_number = ""
    for num in range(0,9):
        value = str(randint(0,9))
        phone_number += value
    return phone_number

def generate_script(phone_number):
    script = "import React from \"react\";\nfunction PhoneNumber() {\n\treturn (\n\t<div>"+phone_number+"</div>\n \t)\n};\n\nexport default PhoneNumber;"
    return script


phone_number = generate_random()
script = generate_script(phone_number)
file = open("./src/components/PhoneNumber.js", "w")
file.write(script)
file.close()



