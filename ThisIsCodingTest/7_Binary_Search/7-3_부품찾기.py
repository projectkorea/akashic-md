n=int(input())
array=list(map(int,input().split()))
m=int(input())
targets=list(map(int,input().split()))

# array = set(map(int,input().split())) -> 단순히 특정 수 체크 용도라면

# for target in targets: O(M)
#     if target in array: O(N)
#         print("yes" ,end=' ')
#     else:
#         print("no", end=' ')
# 시간복잡도 O(M * N), 종류가 n가지가 아니라면 set방법도 괜찮음

def binary_search(array,target,start,end):
    while start <= end:
        mid = (start+end)//2
        if array[mid] == target:
            return 'yes'
        elif array[mid] > target:
            end = mid -1
        else: 
            start = mid + 1
    return 'no'

array.sort()

for target in targets:
    result = binary_search(array,target,0,n-1)
    print(result, end=' ')

