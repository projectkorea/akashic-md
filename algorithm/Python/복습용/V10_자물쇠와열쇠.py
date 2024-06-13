# 행과 열을 바꾸고, 배열의 요소를 회전 값으로 넣기
def rotate_a_matrix_by90_degree(a):
    n = len(a)
    m = len(a[0])
    result = [[0]*n for _ in range(m)]
    for i in range(n):
        for j in range(m):
            result[j][n-i-1] = a[i][j]
    return result

# 자물쇠를 3배로 늘렸다고 가정하고, 가운데만 모두 1인지 확인하는 함수
def check(new_lock):
    lock_length = len(new_lock) // 3
    for i in range(lock_length,lock_length*2):
        for j in range(lock_length,lock_length*2):
            if new_lock[i][j] != 1:
                return False
    return True

def solution(key,lock):
    n=len(lock)
    m=len(key)
    # 영역을 벗어나 열쇠를 넣을 수도 있어서, 아싸리 3배를 늘림.
    # 열쇠크기는 자물쇠보다 같거나 작으니깐 상하좌우 다 보려면 상하좌우3배크기해야 전부 다 볼 수 있음
    new_lock = [[0] *(n*3) for _ in range (n*3)]
