from collections import deque
t = int(input())

for _ in range(t):
    n,m=map(int,input().split())
    queue = deque(list(map(int,input().split())))
    idx_queue = deque(list(range(n)))
    count = 0
    while queue:
        if queue[0] == max(queue):
            count +=1
            if idx_queue[0] == m:
                print(count)
                break
            queue.popleft()
            idx_queue.popleft()
        else:
            queue.append(queue.popleft())
            idx_queue.append(idx_queue.popleft())
    
    