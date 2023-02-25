#1차시도
#그리디니깐, 적은 놈들을 많은 놈들 쪽으로 바꿔!
# 적은 그룹 ,많은 그룹 카운트

s=list(map(int,input()))
temp=s[0]
count0=0
count1=0

if temp ==0:
    count0=1
else:
    count1=1

for i in s[1:]:
    if temp != i:
        temp = i
        if i == 0:
            count0+=1
        elif i ==1:
            count1+=1

print(count0 if count0<=count1 else count1 )

# 답하고 비교해봐야 하는데, 포기하지 않고 그리디 문제 해결방법을 떠올렸더니 풀린 문제였다.
# 포기하지 말고, 고민(문제의 목적, 해결방법 알고리즘이 나와있으니까)을 한 번더 해보자