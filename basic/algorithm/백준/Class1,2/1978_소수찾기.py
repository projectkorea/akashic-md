# 1000*1000 = 1,000,000 완탐해도 시간초과가 안된다.
# case1. 완전탐색 + 소수특징 사용

import math

n = int(input())
li = list(map(int,input().split()))
cnt = 0

for num in li:
    # 자연수만 오니까 1을 노린 것
    if num < 2:
        continue
    else:
        answer = True
        for idx in range(2,int(math.sqrt(num))+1):
            if num % idx == 0:
                answer = False
                break
        if answer:
            cnt +=1
print(cnt)




# case2. 에라토스테네스의 체

import math

n = int(input())
li = list(map(int,input().split()))

# 소수가 아니면 1 표시 / 0과1은 소수가 아님
d = [0] * 1001
d[0] = d[1] = 1 

cnt = 0

# 1부터 1000까지 확인
for num in range(2,1001):
    # 소수가 아님을 확정하지 못했다면
    if d[num] == 0:
        # 확인하기
        for i in range(2,int(math.sqrt(num))+1):
            # 소수가 아니라면
            if num % i == 0:
                # 배수는 다 소수가 아님을 처리
                    j =  1
                    while num*j <=1000:
                        d[num*j] = 1
                        j+=1
    
# 소수 카운트
for i in li:
    if d[i] == 0:
        cnt +=1
    
    
print(cnt)



# case2. 에라토스테네스의 체

import math

n = int(input())
li = list(map(int,input().split()))

# 소수가 아니면 1 표시 / 0과1은 소수가 아님
d = [0] * 1001
d[0] = d[1] = 1 
cnt = 0

for i in range(2,int(math.sqrt(1000))+1):
    if d[i] == 0:
    # i는 제외하고 그 배수부터 읽음 처리 
         j =  2
         while i*j <=1000:
             d[i*j] = 1
             j+=1
    
# 소수 카운트
for i in li:
    if d[i] == 0:
        cnt +=1
    
    
print(cnt)