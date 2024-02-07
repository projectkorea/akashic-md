n = int(input())
li =[]
for idx in range(n):
    age,name = input().split()
    li.append((int(age),name,idx))
li.sort(key=lambda x:(x[0],x[2]))
for info in li:
    print(info[0], info[1]) 

# 나이와 순서 두개를 비교하는 것이다.
# 하지만 애초에 리스트가 입력받은 순 으로 저장됐으니 lambda x:x[2]는 굳이 필요 없겠군