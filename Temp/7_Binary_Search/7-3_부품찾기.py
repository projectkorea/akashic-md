n=int(input())
array=list(map(int,input().split()))
m=int(input())
targets=list(map(int,input().split()))

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
