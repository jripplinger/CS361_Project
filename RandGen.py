# Microservice to generate 10 random int between 0 and 9
# inclusive and write resulting int to text file

from random import randint

def gen_rand_int(min,max):
    random_num = randint(min, max)
    return random_num

def write_to_file(random_nums):
    file = open("./random_nums", "w")
    file.writelines(random_nums)
    file.close()

random_arr = []
for i in range(9):
    random_arr.append(str(randint(0,9))+"\n")
    i+=1
random_arr.append(str(randint(0,9)))

write_to_file(random_arr)