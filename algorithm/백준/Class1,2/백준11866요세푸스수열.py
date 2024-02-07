n,k = map(int,input().split())
li = list(range(1,n+1))
result = ['<']
index = 0

while li:
    for _ in range(k-1):
        if index == len(li)-1:
            index = 0
        else:
            index += 1
    result.append(li.pop(index))
    result.append(',')
    result.append(' ')
    if index == len(li):
        index = 0
result.pop()
result.pop()
result.append('>')
for x in result:
    print(x, end='')