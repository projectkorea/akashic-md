n = int(input())
group = sorted(list(map(int,input().split())))

answer = 0
num = 0

for fear in group:
    num += 1
    if num == fear:
        answer+=1
        num = 0

print(answer)