#BFS풀이: 시작지점에서 가까운 노드부터 차례대로 그래프의 모든 노드를 탐색하기 때문
from collections import deque

n,m=map(int,input().split())
graph=[]
for i in range(n):
    graph.append(list(map(int,input())))
    # list(iterative)이므로 input의 한 음절씩 int로 바뀌어 list로 들어가게된다.

# 상하좌우
dx = [-1,1,0,0]
dy = [0,0,-1,1]

def BFS(x,y):
    queue = deque()
    queue.append((x,y))
    while queue:
        x,y=queue.popleft()
        for i in range(4):
            nx = dx[i] + x
            ny = dy[i] + y
            # 공간을 벗어낫거나, 벽인 경우는 continue로 바로 다음 반복 문으로 이동
            if nx<0 or nx>=n or ny<0 or ny>=m or graph[nx][ny]==0:
                continue
            elif graph[nx][ny] ==1: # 0이면 못가는 곳, 2이상이면 이미 방문했던 곳, 딱 1이여야 다음칸으로 이동할 수 있음
                graph[nx][ny] = graph[x][y] + 1 # 한 칸 이동 했음을 표시
                queue.append((nx,ny)) # 현재 이동한 곳이 다음 출발지점이 됌
    return graph[n-1][m-1]

print(BFS(0,0))
for i in range(n):
    print(graph[i])


# [3, 0, 5, 0, 7, 0]
# [2, 3, 4, 5, 6, 7]
# [0, 0, 0, 0, 0, 8]
# [14, 13, 12, 11, 10, 9]
# [15, 14, 13, 12, 11, 10]
# [1,0]에서 상으로 이동할 때 1+2가 되버리기 때문에 3이 됌