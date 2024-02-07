# 변수를 저장할 수 있는 메모리가 8mb로 제한되어있고, 입력개수는 천만개이다.
# 이 수들을 리스트에 하나씩 배열하면 메모리가 초과된다.
# 따라서 수는 10000보다 작은 자연수라는 점을 이용하여 문제를 푼다.

from sys import stdin
input = stdin.readline
n = int(input())
li = [0] * 10001

for _ in range(n):
    li[int(input())] += 1

for i in range(1,10001):
    if li[i] !=0:
        for _ in range(li[i]):
            print(i)