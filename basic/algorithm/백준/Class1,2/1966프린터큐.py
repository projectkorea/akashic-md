from collections import deque 

t = int(input()) 

for _ in range(t):
    n , x = map(int,input().split())
    que = deque(list(map(int,input().split())))
    idx_que = deque(list(range(n)))

    cnt = 0 
    
    while que:
        if que[0] == max(que):
            cnt += 1
            que.popleft()
            if idx_que.popleft() == x:
                print(cnt)
        else:
            que.append(que.popleft())
            idx_que.append(idx_que.popleft())

            # popleft() queue 만의 방법
            # list(range(n)) 0 부터 n-1 까지 리스트 생성
            # while queue: 방법 if와 else로 구분해 pop만 시킬 것인지, pop시킨 것을 다시 append할 것인지 구분