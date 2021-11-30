from collections import deque

queue = deque()

queue.append(5)
queue.append(2)
queue.append(3)
queue.append(7)
# queue.pop() # 7
queue.popleft() # 5
queue.append(1)
queue.append(4)
queue.popleft() # 2

print(queue) # 입력한 순서대로

queue.reverse()
print(queue)

# pop 최근 들어온 것
# popleft 먼저 들어온 것