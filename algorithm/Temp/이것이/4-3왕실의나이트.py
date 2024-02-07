s=list(input())
moves=[(1,2),(-1,2),(1,-2),(-1,-2),(2,1),(-2,1),(2,-1),(-2,-1)]
x = ord(s[0]) - ord('a') + 1
y = int(s[1])

count = 0

for i in range(len(moves)):
    nx = x + moves[i][1]
    ny = y + moves[i][0]
    if nx > 8 or ny > 8 or nx < 1 or ny < 1:
        continue
    else:
        count+=1

print(count)