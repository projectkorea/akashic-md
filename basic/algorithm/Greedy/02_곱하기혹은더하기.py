#1차 시도
# + * 만 이용, 좌측부터 계산, 가장 최대 값

s=list(map(int,input()))
# 1은 가장 작은 수에 더하는 게 남
# 0은 무시
sum=0 
s.sort()

for i in s:
    if sum ==0 or i<2:
        sum+=i
    else:
        sum*=i

print(sum)

# 2차시도(보완)
# sum의 대입을 첫번째 값으로 넣어서 보완하기

s=list(map(int,input()))
sum=s[0]

for i in s[1:]:
    if sum <2 or i<2:
        sum+=i
    else:
        sum*=i

print(sum)