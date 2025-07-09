# 1차 시도
# x인 모험가는 반드시 x명 이상으로 구성한 모험가 그룹에 참여해야 한다.

n=int(input())
data = list(map(int,input().split()))

# 우선 X가 높은 순서대로 그룹 형성
data.sort(reverse=True)
answer = 0

# 제약사항: 공포도가 X인데 X명 이상 남았는지 확인하기
while data[0] <= len(data):
    answer +=1
    data=data[data[0]:]

print(answer)

# 공포도 9111 배치에서 최대 그룹수는 1/1/1 총 3개인데, 9먼저 할당시키면 0개임
# 그리디는 fair play에 관심 없음. 조건에 만족시키기만 하면 된다
# 내림차순말고, 오름차순으로 하고 적은애들 부터 보내는 게 능사이다.

#2차 시도
n=int(input())
data = list(map(int,input().split()))
data.sort()
answer=0

while data[0] <=len(data):
    data=data[data[0]:]
    answer +=1 
print(answer)

# answer =3이 나옴. 마지막 slicling에서 2,3에서 2 때문에 3도 포함됨

# 3차 시도
n=int(input())
data = list(map(int,input().split()))
data.sort()
count=0
answer=0
 
for i in data:
    count +=1
    if i <= count :
        answer +=1
        count = 0
print(answer)

# 1,2차 시도는 직관적인 인간의 방식
# 3차시도는 작은 단위로 쪼갠 컴퓨터 방식
# 컴퓨터 방식을 익히려면 분해해서 생각...많이 풀어보자