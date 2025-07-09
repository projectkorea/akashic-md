# 문제
# N x M 크기의 배열
# N은 행의 개수, M은 열의 개수
# 각 칸에는 숫자가 하나씩 들어있음
# 1 <= N,M <= 100 
# 1 <= 각 칸에 들어있는 숫자 <= 10000
# 규칙: 한 행을 선택하고 그 행에서 가장 작은 수를 선택
# 원하는 답: 가장 큰 수

# min함수를 이용한 풀이
n,m = map(int,input().split())
data = [list(map(int,input().split())) for _ in range(n)]

min_list=[]

for row in data:
    min_list.append(min(row))

result = max(min_list)
print(result)

# 책 풀이 + 연산 횟수 줄음
n,m = map(int,input().split())
answer= 0

for _ in range(n):
    data=list(map(int,input().split())) # 한 행씩 입력받아 리스트로 저장
    answer = max(min(data), answer)
print(answer)