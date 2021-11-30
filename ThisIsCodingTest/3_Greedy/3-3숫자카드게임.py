# min함수를 이용한 풀이
n,m = map(int,input().split())
data = [list(map(int,input().split())) for _ in range(n)]
min_list=[]
for row in data:
    min_list.append(min(row))
print(max(min_list))

# 책 풀이 + 연산 횟수 줄음
n,m = map(int,input().split())
answer= 0
for _ in range(n):
    data=list(map(int,input().split()))
    answer = max(min(data),answer)
print(answer)