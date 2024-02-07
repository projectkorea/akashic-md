# dp문제, 부분해는 전체해가 된다.
n = int(input())
count_zero =[1,0,1]
count_one = [0,1,1]

def fibo(num):
    length = len(count_zero)
    if length <= num:
        for i in range(length, num+1):
            count_zero.append(count_zero[i-1]+count_zero[i-2])
            count_one.append(count_one[i-1]+count_one[i-2])
    print(count_zero[num], count_one[num])

for i in range(n):
    num = int(input())
    fibo(num)

# 내가 푼 것
n = int(input())

zero =[1, 0, 1]
one = [0, 1, 1]

for i in range(n):
    num = int(input())
    length = len(zero)
    if length <= num:
        for j in range(length, num+1):
            zero.append(zero[j-1] + zero[j-2])
            one.append(one[j-1] + one[j-2])
    print(zero[num],one[num])