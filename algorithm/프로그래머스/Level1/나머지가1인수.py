def solution(n):
    x = 1
    while(x):
        if(n%x==1):
            break
        x+=1
    return x

# 참고, 나머지가 1인 수는 약수-1 % ==0랑 같음

def solution(n):
    for i in range(2,n//2+1):
        if n % i == 1:
            return i
    return n-1

# for문 도중에 return을 하면 반복문 탈출이 아니라 그냥 리턴이 되네
# 범위: n끝까지 볼 게 아니라, 답이 반드시 있다고 했으니까 2로 나눴을 때까지만 보고 아니면 n-1하면 되겠네