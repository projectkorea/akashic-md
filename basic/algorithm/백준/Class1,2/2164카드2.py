from collections import deque
n = int(input())
cards = deque([x for x in range(1,n+1)])

while len(cards) > 1:
    cards.popleft()
    cards.append(cards.popleft())

print(cards[0])