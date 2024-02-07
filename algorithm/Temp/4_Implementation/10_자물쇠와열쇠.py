def rotate_a_matrix_by_90_degree(a):
    n = len(a)
    m = len(a[0])
    result = [[0]*n for _ in range(m)]
    for i in range(n):
        for j in range(m):
            result[j][n-i-1] = a[i][j]
    return result

def solution(key,lock):
    n = len(lock)
    m = len(key)
    #굳이 3배로 하는 이유가 있나? 
    #꼬투리 까지 확인하기 위해 양옆이 하나 더 늘어난 3배 체택
    new_lock = [[0]*(n*3)for _ in range(n*3)]
    for i in range(n):
        for j in range(n):
            new_lock[i+n][j+n] = lock[i][j]
    
    #4가지 방향에 대해서 확인
    for rotation in range(4):
        key = rotate_a_matrix_by_90_degree(key)
        for x in range(n*2):
            # n*2의 이유: 0은 첫 번째 박스의 첫번째 칸, n은 두번째 박스으 첫번째칸, 2n은 세번째 칸의 첫번째칸
            for y in range(n*2):
                # 자물쇠 열쇠 넣기
                # i,j만큼 더함으로써 key를 넣었다고 가정
                for i in range(m):
                    for j in range(m):
                        new_lock[x+i][y+j] += key[i][j]
                if check(new_lock) == True:
                    return True
                #자물쇠 다시 빼기
                for i in range(m):
                    for j in range(m):
                        new_lock[x+i][y+j] -= key[i][j]
    return False

def check(new_lock):
    lock_length = len(new_lock)//3
    #자물쇠 중간 부분 모두 1인지 확인
    for i in range(lock_length,lock_length*2):
        for j in range(lock_length, lock_length*2):
            if new_lock[i][j] != 1:
                return False
    return True
