# 나의 풀이
import sys
n,m = map(int,sys.stdin.readline().split())
li = list(map(int,sys.stdin.readline().split()))
li.sort()

#이진탐색으로 절단기의 높이를 설정하기
start = 0
end = max(li)
while start <= end:
    mid = (start + end) // 2
    sum = 0
    for i in li:
        if i - mid > 0:
            sum += i-mid
    # 필요량 만큼 딱 얻었을 경우
    if sum == m:
        answer = mid
        break
    # 필요량 만큼 더 얻었을 경우
    elif sum > m:
        start = mid + 1
        answer = mid
    # 필요량 보다 적게 얻을 경우
    else:
        end = mid - 1
        
print(answer)

# 다른 이의 풀이

from sys import stdin
from collections import Counter

def BS_tree(data,M):
    start, end = 0, max(data)
    result = 0
    while start<= end:
        total = 0
        mid = (start+end)//2
        for x,num in data.items():
          if x > mid:
            total += (x-mid)*num #해당 값이 등장한 개수만큼 곱한다
        if total < M:
            end = mid -1
        else:
            result = mid
            start = mid + 1
    return result

_, M = map(int, stdin.readline().split())
data = Counter(map(int, stdin.readline().split()))
print(BS_tree(data,M))


# 복습: 시간초과가 안나네? 3036 ms
from sys import stdin

def BS_Tree(li,m):
    start,end = 0,max(li)
    answer = 0
    while start <= end:
        mid = (start+end) //2
        result = 0
        for item in li:
            if item > mid:
                result+=item-mid
        if result >= m:
            start = mid + 1
            answer = mid
        else:
            end = mid - 1
    return answer
    
   
_,m = map(int,stdin.readline().split())
li = list(map(int,stdin.readline().split()))
print(BS_Tree(li,m))

# 복습: 카운터함수를 쓰니 시간이 급격히 줄어들었다 456 ms
from sys import stdin
from collections import Counter

def BS_Tree(data,m):
    start,end = 0,max(data)
    answer = 0
    while start <= end:
        mid = (start+end) //2
        result = 0
        for item, num in data.items():
            if item > mid:
                result+=(item-mid) * num
        if result >= m:
            start = mid + 1
            answer = mid
        else:
            end = mid - 1
    return answer
    
   
_,m = map(int,stdin.readline().split())
data = Counter(map(int,stdin.readline().split()))
print(BS_Tree(data,m))