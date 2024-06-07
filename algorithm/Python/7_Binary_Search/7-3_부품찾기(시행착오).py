n=int(input())
array=list(map(int,input().split()))
m=int(input())
targets=list(map(int,input().split()))

array = set(map(int,input().split())) # -> 단순히 특정 수 체크 용도라면

for target in targets: # O(M)
    if target in array: # O(N)
        print("yes" ,end=' ')
    else:
        print("no", end=' ')

# 시간복잡도 O(M * N), 종류가 n가지가 아니라면 set방법도 괜찮음