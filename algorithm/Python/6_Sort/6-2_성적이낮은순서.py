n=int(input())
li=[]
for i in range(n):
    li.append(list(input().split())) #split으로 받으면 또 split대로 list가 나뉘는군
    li[i][1] = int(li[i][1])

li.sort(key=lambda x:x[1]) # array=sorted(key=lambda x:x[1]) 다중 리스트에서 각 요소 별로 정렬할 때 많이 쓰임

for i in li:
    print(i[0],end=' ')