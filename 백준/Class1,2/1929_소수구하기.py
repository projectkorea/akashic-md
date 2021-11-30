# 가장 중요한 d[0], d[1] 을 1로 넣지 않어서 m이 0인경우에 소수가 0과 1도 출력되는 문제가 발생했다.

import math
m,n = map(int,input().split())
d = [0 for _ in range(n+1)]
d[0] = d[1] = 1

for i in range(2,int(math.sqrt(n))+1):
    # 남은 소수에 대하여
    if d[i] == 0:
        # 소수 배수 다 지우기, j=2 2배수 부터 시작 j=1안하는 이유가 소수는 지우면 안됨
        j = 2
        while i*j <=n:
            d[i*j] = 1
            j+=1
            
for i in range(m,n+1):
    if d[i] == 0:
        print(i)
        