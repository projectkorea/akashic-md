# 연속된 숫자 뒤집기
# 출력: 최소의 뒤집는 횟수

# 뒤집기를 구현하는 것이 아니라, 답이 되게 하는 연산을 구하면 되겠군
# 연속된 숫자 뭉치를 구하고, 최소의 뭉치 개수를 출력하면 그게 답이 되겠군

# 첫번째 문자열도 카운트 하는 것 실수

s = list(map(int,input()))
prev=s[0]
count0 = 0
count1 = 0

if prev == 0 :
    count0=1 
else:
    count1=1

for item in s[1:]:
    if prev != item:
        if item == 0:
            count0 +=1
            prev = 0
        else:
            count1 +=1
            prev = 1
print(min(count0,count1))