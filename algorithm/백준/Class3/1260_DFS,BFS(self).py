def DFS(v):
    visit[v] = 1
    print(v ,end=' ')
    for i in range(n+1):
        if s[v][i] == 1 and visit[i] == 0:
            DFS(i)

def BFS(v):
    visit[v] = 0
    queue = [v]
    while(queue):
        v = queue[0]
        print(queue[0], end=' ')
        del queue[0]
        for i in range(n+1):
            if s[v][i] == 1 and visit[i] == 1:
                queue.append(i)
                visit[i] = 0
            
            
n, m, v = map(int, input().split())
s = [[0]* (n+1) for i in range(n+1) ]
visit = [0]*(n+1)

for i in range(m):
    x,y = map(int,input().split())
    s[x][y] = 1
    s[y][x] = 1
    
DFS(v)
print()
BFS(v)