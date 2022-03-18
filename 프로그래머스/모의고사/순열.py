def solution(arr):
    arr.sort()
    for index in range(len(arr)):
        if arr[index] != (index+1) : return False    
    return True


# 문제의 유니버스를 잘 살폈어야 했다.
# 이 문제는 무조건 소팅하면 1부터 끝까지 가는 유니버스안에 있었다. 이를 캐치했어야 했다.
# 짜잘하게 for문 문법과, 인덱스 문법, sort문법을 복습하는 계기가 됐다.