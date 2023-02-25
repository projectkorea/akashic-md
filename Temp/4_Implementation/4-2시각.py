a = int(input())
count = 0

# for h in range(a): 문제를 정확히 읽어보면 a+1까지 계산해야함
for h in range(a+1):
    for m in range(60):
        for s in range(60):
            # if '3'in str(h+m+s): int로 더해진 다음에 문자열이 됌
            if '3' in str(h)+str(m)+str(s):
                count +=1
print(count)