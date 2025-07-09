    # sys.stdin.readline() = input()
    # round(숫자,자리수) 반올림
    # from collections import Counter
    # cnt = sorted(cnt.items(),key=lambda x:(-x[1]:x[0]))
    
import sys
from collections import Counter
n = int(sys.stdin.readline())
s = []
for i in range(n):
    s.append(int(sys.stdin.readline()))
s.sort()

print(round(sum(s)/n))
print(s[n//2])

c = Counter(s).most_common()
if len(s) > 1:
    if c[0][1] == c[1][1]:
        print(c[1][0])
    else:
        print(c[0][0])
else:
    print(c[0][0])

print(s[-1] - s[0])

# Counter 클래스: 카운터객체, dic형태 가장 카운트부터 순서대로 배치가 됨
from collections import Counter
a = 'aabbbcccc'
print(Counter(a))
# Counter({'c': 4, 'b': 3, 'a': 2})

# most_common 메서드: 배열 리턴 
Counter('hello world').most_common()
# [('l', 3), ('o', 2), ('h', 1), ('e', 1), (' ', 1), ('w', 1), ('r', 1), ('d', 1)]
cnt = Counter(data)
cnt = sorted(cnt.items(), key=lambda x: (-x[1],x[0])) # -붙이면 내림차순

# 내 풀이
import sys
from collections import Counter

n = int(sys.stdin.readline())
s = []
for _ in range(n):
    s.append(int(sys.stdin.readline()))

# 산술평균
print(round(sum(s)/n))

# 중앙값
s.sort()
print(s[n//2])

# 최빈값
cnt = Counter(s)
cnt= sorted(cnt.items(), key=lambda x:(-x[1],x[0]))
# 최빈값이 두 개 이상이라면
if len(s) >1:
    if cnt[0][1] == cnt[1][1]:
        print(cnt[1][0])
    else:
        print(cnt[0][0])
else:
    print(cnt[0][0])

#스코프
print(s[-1]-s[0])