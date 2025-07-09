# 굳이 리스트에 넣어서 확인하지 않아도 되는 문제
# 체스판의 성질을 이용하여, 홀수냐 짝수냐(%2)만 판별하면 파악할 수 있음

n,m = map(int,input().split())
li=[(list(input())) for _ in range(n)]
count = []

for i in range(n-8+1):
    for j in range(m-8+1):
        count1 = 0
        count2 = 0
        # 체크
        # 체크판 하나일 대 두가지 경우의 수 비교
        for p in range(i,i+8):
            for q in range(j,j+8):
                
                # case1) 홀수B 짝수W
                # case2) 짝수B 홀수W
            
                # 짝수쪽 위치일 때
                if (p+q)%2 ==0:
                    if li[p][q] == 'W':
                        count2 += 1
                    if li[p][q] == 'B':
                        count1 += 1
                # 홀수쪽 위치일 때
                else:
                    if li[p][q] == 'W':
                        count1 +=1
                    if li[p][q] == 'B':
                        count2 +=1
        count.append(min(count1,count2))

print(min(count))