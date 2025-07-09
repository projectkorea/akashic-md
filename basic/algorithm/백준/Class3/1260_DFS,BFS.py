def DFS(v):
  print(v,end='')
  visit[v] = 1
  for i in range(1, n+1):
    if visit[i] == 0 and s[v][i] == 1:
      DFS(i)

def BFS(v):
  queue = [v]
  visit[v] = 1
  while(queue):
    v = queue[0]
    print(v, end='')
    del queue[0]
    for i in range(1, n+1):
      if visit[i] == 0 and s[v][i] == 1:
        queue.append(i)
        visit[i] = 1



n, m, v = map(int, input().split())
s = [[0] * (n+1) for i in range(n+1) ] 
# 원소 개수 멀티플, [0]*(n+1) 자체를 반복
visit = [0 for i in range(n+1)]
# visit = [0] *(n+1)

for i in range(m):
  x, y = map(int, input().split())
  s[x][y] = 1
  s[y][x] = 1

# DFS(v)
BFS(v)