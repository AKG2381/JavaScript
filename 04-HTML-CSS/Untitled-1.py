list1 = [9,1,7,2,6,4,3,99]
def bubble_sort(list1):
    for i in range(len(list1)-1):
        for j in range(i,len(list1)):
            if list1[i]>list1[j]:
                list1[i],list1[j] = list1[j],list1[i]
    return list1
sorted_list = bubble_sort(list1)
print(sorted_list)

# to find the second largest number without sorting
list1 = [9,1,7,2,6,4,3,99]
def find_second_larget(list1):
    max = 0
    for i in range(len(list1)):
        if list1[i]>max:
            max = list1[i]
    print(max)
    second = 0
    for i in range(len(list1)):
        if list1[i]<max and list1[i]>second:
            second = list1[i]
    print(second)
x = find_second_larget(list1)

# Python program to print the upper pyramid


#   *
#  * *
# * * *

#   *
#  * *
n = 3
for i in range(1,n+1):
    print("*"*i)



    