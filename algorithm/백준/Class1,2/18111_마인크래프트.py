# 문제 성찰
"""
알고리즘, '완전탐색'이 필요한 문제였다.
쉬운 문제는 풀이대로 따라가다보면 자연스럽게 컴퓨팅적사고가 됐다.
하지만 이 문제는 풀이를 위해 컴퓨팅적 사고를 떠올려야 해서 막혔던 것 같다.
최적의 답을 위해 최적의 솔루션을 찾기보다 완전탐색으로 최적의 답을 찾는 문제다.
"""

# 새로 안 사실
"""
1.
Python, PyPy 모두 추가시간이 주어지지 않는다.
따라서 도중에 검사하기보다 모든 원소를 돌고나서 체크를 하는것이 낫다. 

2. 
d = [map(int, input().split())for _ in range(n)]
VS
d = []
for _ in range(n):
    d += map(int, input().split())

첫번째 방법은 map객체가 리스트안에 그대로 들어가서 3개의 원소고
두번째 방법은 숫자가 차곡차곡 들어 sum(d)가 가능했다.
"""

# 실수
"""
d를 카운터로 바꾸고 합을 하니 ,중복되는 숫자가 다 없어져 적은 숫자가 나왔다.
여러 IDE를 쓰다보니, 코드 수정한 것을 제대로 반영하지 못했다.
"""

from sys import stdin
from collections import Counter

input = stdin.readline
n,m,b = map(int, input().split())
d = []
for _ in range(n):
    d += map(int, input().split())
area, sum_block = n*m, sum(d)+b

d = Counter(d)
ans_time = 2e9
ans_height = 0 

# 완전탐색으로 목표 높이를 고정시킨 후 시간 계산
for height in range(257):
    # 갖고 있는 블록으로 땅을 평탕하게 할 수 있는지
    if area * height <= sum_block:
        now_time = 0
        for key in d:
            # 땅의 높이가 목표치보다 낮다면
            if key < height :
                now_time += (height-key) * d[key]
            # 땅이 목표치 보다 높다면 = 땅을 파야함 = 2초
            else:
                now_time += (key-height) * d[key] * 2
        if now_time <= ans_time:
            ans_time = now_time
            ans_height = height
            
print(ans_time, ans_height)

"""
# 예전 생각
배열의 모든 요소가 같게 하려면
모든 요소의 평균을 향해 더하거나 빼기를 통해?
더하는 것이 시간이 적기 때문에 더하는 것이 우선이 되어야함
평균값 반올림 정수를 향해?
"""