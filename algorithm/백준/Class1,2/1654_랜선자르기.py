# 이분탐색 문제 적용법: 
# 1) 특정 값을 찾아야 하는데, 연산 횟수가 너무 많은 것 같다. -> 이분탐색 사용 고려
# 2) 탐색이 되는 대상은 주로 특정 값을 찾는데 필요한 식의 한 부분을 차지하고 있다.
# 3) 여기선 각각의 item들을 !나누는 값!으로써 start mid end, 1부터 max(item)까지 차지하고 있다.
# 분기점 찾기
k,n = map(int, input().split())
li = [int(input()) for _ in range(k)]
start,end = 1,max(li) # 탐색 타겟은 길이, 따라서 end는 자르고자 하는 막대기중 가장 큰 것을 담는다.

while start <= end: #적절한 랜선의 길이를 찾는 알고리즘
    mid = (start + end) // 2 #중간 위치
    lines = 0 #랜선 수
    for item in li:
        lines += item // mid #분할 된 랜선 수
        
    if lines >= n: #랜선의 개수가 분기점
        start = mid + 1
    else:
        end = mid - 1
print(end)

from sys import stdin
K, N = map(int,stdin.readline().split())
li = list(map(int,stdin.readlines()))
h, l = sum(li)//N, 1
# h, l = max(li), 1
while l <= h :
    mid = (h+l)//2
    cnt = sum([x//mid for x in li])
    if cnt < N:
        h = mid - 1
    elif cnt >= N:
        l = mid + 1
        ans = mid
print(ans)

# while문이든 for문이든 def가 다르지 않으면 중간에 변수 선언해도 반복문 나와지더라도 연속이 되는구나 ㄷㄷ 처음앎