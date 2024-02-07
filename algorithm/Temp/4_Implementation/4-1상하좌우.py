n = int(input())
plans = input().split()

moves = ['L','R','U','D']
# dx=[-1,1,0,0]
# dy=[0,0,-1,1]
# x가 열의 값이 바뀌니까, 좌상단 좌표 배치에서 오른쪽 대각선 으로 갈수록(y++,x++)임
dx=[0,0,-1,1]
dy=[-1,1,0,0]
x=y=1

# for move in moves:
# 인덱스 순서에 따라 dx, dy 결정되니까 인덱스로받아야함
for plan in plans:
    for i in range(len(moves)):
        if plan == moves[i]:
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 1 or ny < 1 or nx > n or ny > n:
                continue
            else:
                x,y=nx,ny
                # x = nx
                # y = ny
                # 코드 간략화

print(nx,ny)