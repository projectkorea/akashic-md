# 1차 풀이
# default dict로 사용하는건 DFS안에 for문에서 방문처리할 때.. 가 아니라 단방향거리만 존재니까 다시해보자
from collections import defaultdict
di=defaultdict(list)

n,m,k,x = map(int,input().split())

# 빈 리스트로 초기화
for i in range(1,n+1):
    di[i]

# 유사 딕셔너리로 값 대입
for i in range(m):
    li=list(map(int,input().split()))
    di[li[0]].append(li[1])

count = -1
answer = []
def DFS(x,di,k,count):
    # 최단거리가 같을 때 
    global answer
    if k == count:
        answer +=1
        return    
    # 다음에 방문할 곳이 있다면
    if di[x] != []:
        for i in di[x]:
            DFS(i,di,k,count+1)
    return

DFS(x,di,k,0)

print(i for i in answer if answer ==[])