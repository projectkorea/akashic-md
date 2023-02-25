n=list(map(int,input()))

left = []
right = []

# 0~n//2-1 n//2~n-1
for i in range(len(n)):
    if i < len(n)//2:
        left.append(n[i])
    else:
        right.append(n[i])

print('LUCKY' if sum(left) == sum(right) else 'READY')