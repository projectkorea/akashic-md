n,m = map(int,input().split())
x,y,direction = map(int,input().split())
plan = [list(map(int,input())) for _ in range(m)]
d = [[0] * n for _ in range(m)]

dx = [-1,0,1,0]
dy = [0,1,0,-1]
x=y=1

def turn_left():
    global direction
    direction -=1
    if direction == -1:
        direction = 3

count = 1
turn_time = 0

while True:
    turn_left()
    nx = x + dx[direction]
    ny = y + dy[direction]

    if plan[nx][ny] == 0 and d[nx][ny] == 0:
        d[nx][ny] = 1
        x,y=nx,ny
        count +=1
        turn_time = 0
        continue
    else:
        turn_time +=1
    if turn_time ==4:
        nx = x - dx[direction]
        ny = y - dy[direction]
        if plan[nx][ny]==0:
            x,y=nx,ny
        else:
            break
        turn_time = 0
print(count)

