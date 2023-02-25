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

# 문제에서 원하는 바 : 그리디 목적에 맞게, 나누는 것에 집중한 코드
# 내 풀이: 먼저 나눌 수 있는지 확인하고 나누기 때문에 반례가 없을 것이라고 생각

# n이 100억 이상일 때
n,k = map(int,input().split())
result = 0

while True:
    target = (n//k) * k 
    result += n - target
    
    if n< k :
        break
    
    result += 1
    n//=k

result +=n-1
print(result)


# 커스터마이징
# 클린코드를 지향합니다
n,k = map(int,input().split())
result = 0

while n>=k:

    result += n%k
    n //= k
    result+=1

print(result+n-1)