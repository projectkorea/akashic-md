# 영역별 카운트가 필요함
# 아이디어: 카운트는 vistied ==False일 때만 시키고,
# visited Ture일 때 연결되어 있는 노드들은 연쇄적으로 True로 만들어 버려서 카운트 되지 않게 하기

n,m = map(int,input().split())

graph=[]
for i in range(n):
    graph.append(list(map(int,input())))

#DFS로 연결된 노드 방문
# index error는 len(array) 이상일 때만, -1은 순서 뒤로 가느 인덱스!!
# def DFS(x,y):
#     try:
#         if graph[x][y] ==0:
#             graph[x][y] = 1
#             DFS(x-1,y)
#             DFS(x+1,y)
#             DFS(x,y-1)
#             DFS(x,y+1)
#             return True
#         else:
#             return False
#     except:
#         pass

def DFS(x,y):
    # if x > -1 or x<n and y>-1 or y<m:
    # 여집합 
    if x > -1 and x<n and y>-1 and y<m:
        if graph[x][y] == 0:
            graph[x][y] = 1
            DFS(x-1,y)
            DFS(x+1,y)
            DFS(x,y-1)
            DFS(x,y+1)
            return True
        else:
            return False
    else:
        return
    
result = 0

for i in range(n):
    for j in range(m):
        if DFS(i,j) == True:
            result +=1

print(result)