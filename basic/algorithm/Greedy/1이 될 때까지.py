# 문제
# 어떠한 수 N이 1이 될 때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행
# 1. N에서 1을 뺀다
# 2. N을 K로 나눈다
# N과 K가 주어질 때 N이 1이 될 때까지 1번 혹은 2번의 과정을 수행해야 하는 최소 횟수를 구하라
# 2 <= N, K <= 100000

# 내 풀이
n,k = map(int,input().split())
count = 0
while n!=1:
    if n%k==0:
      n//=k
    else:
      n-=1
    count +=1
print(count)


# n이 100억 이상일 때
# N이 K의 배수가 되도록 한 번에 빼기
n,k = map(int,input().split())
result = 0

while True:
    # N이 K로 나누어 떨어지는 수가 될 때까지 1씩 빼기
    # 처음 나누는 수가 아닌 나누어 떨어지는 수가 될 때까지 1씩 빼기
    target = (n//k) * k         # 타겟을 한 번에 빼서 1씩 빼는 횟수를 줄임
    result += n - target
    
    if n < k :
        break
    
    # K로 나누기
    result += 1
    n//=k

# 마지막으로 남은 수에 대하여 1씩 빼기
result += n-1
print(result)


# 다른 버전
n,k = map(int,input().split())
result = 0

while n>=k:
    result += n%k
    n //= k
    result+=1

print(result+n-1)