# 수도코드 기반의 코드로 작성해보자

# 보드의 크기
n = int(input())

# 사과의 개수
k = int(input())

# 사과의 위치
li_app=[]
for _ in range(k):
    li_app.append(list(map(int,input().split())))

# 방향 변환횟수
l = int(input())

#방향 변환 정보
li_di = []
for _ in range(l):
    li_di.append(input().split())

direction = []