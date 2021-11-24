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