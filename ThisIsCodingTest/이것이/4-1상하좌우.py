n = int(input())
plans = input().split()
moves = ['L','R','U','D']
dx = [0,0,-1,1]
dy = [-1,1,0,0]
x=y=1

for plan in plans:
    for i in range(len(moves)):
        if moves[i] == plan:
            nx = x + dx[i]
            ny = y + dy[i]
            if nx > n or ny > n or nx < 1 or ny < 1:
                continue
            else:
                x,y=nx,ny
print(x,y)


