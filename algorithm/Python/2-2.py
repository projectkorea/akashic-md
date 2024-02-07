#쿼드 트리 함수 정의
def quad_tree(x, y, n):
    global matrix, answer #배열 정보와 답이 될 변수를 끌어옴
    color = matrix[y][x] #첫 색깔(흑백)과 나머지 색이 같아야함
    double_break = False #for문 탈출용 double_break
    
    for i in range(x, x+n):
        if double_break:
            break
            
        for j in range(y, y+n):
            if matrix[j][i] != color: #하나라도 틀릴시에 재귀문 생성
            
                answer += '(' #문 열고
                quad_tree(x, y, n//2) #2사분면
                quad_tree(x + n//2, y, n//2) #1사분면
                quad_tree(x, y + n//2, n//2) #3사분면
                quad_tree(x + n//2, y + n//2, n//2) #4사분면
                answer += ')' #문 닫고
                
                double_break = True #탈출!
                break
    
    if not double_break:
        if matrix[y][x] == 1: #검정색이라면
            answer += '1'
        else:
            answer += '0' #흰색이라면


N = int(input())
matrix = []
answer = ''

for _ in range(N):
    matrix.append(list(map(int, str(input()))))

quad_tree(0,0,N)
print(answer)