#따라치며 감잡기
n,m = map(int,input().split())

d=[[0]*m for _ in range(n)]
x,y,direction = map(int,input().split())
d[x][y]=1

arr = []
for i in range(n):
    arr.append(list(map(int,input().split())))

# 북쪽기준, 반시계 방향, 북서남동
dx = [-1,0,1,0]
dy = [0,-1,0,1]

#dx,dy의 인덱스를 담당
def turn_left():
    global direction
    direction -=1
    if direction == -1:
        direction =3

# 시뮬 시작
count =1 
turn_time = 0
while True:
    turn_left()
    nx = x + dx[direction]
    ny = y = dy[direction]

    if d[nx][ny]==0 and arr[nx][ny]==0 :
        d[nx][ny] = 1
        x = nx
        y = ny
        count+= 1
        turn_time = 0
        continue
    else:
        turn_time +=1
    if turn_time ==4 :
        nx = x - dx[direction]
        ny = y - dy[direction]
        if arr[nx][ny] ==0:
            x = nx
            y = ny
        else:
            break
        turn_time = 0
print(count)










