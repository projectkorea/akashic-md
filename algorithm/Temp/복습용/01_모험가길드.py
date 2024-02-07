# 1. 공포도가 X인 모험가는 반드시 X명 이상으로 그룹을 구성
# 2. 그룹수가 최대가 되게
# 3. 모든 모험가가 참여하지 않아도 된다.  = 공포도가 높은 참여자를 빼도 된다.
# 출력 값: 그룹 수

n = int(input())
li = list(map(int,input().split()))
li.sort()
answer = 0
count = 0
for item in li:
    count +=1
    if count >= item:
        answer +=1
        count = 0

print(answer)