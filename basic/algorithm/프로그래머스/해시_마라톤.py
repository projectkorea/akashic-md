# 1. collections Counter객체 풀이
# 1) 원소:빈도의 딕셔너리형태, multiset이라고도 부름
# 2) Counter객체로 뺄셈이 가능하다

import collections as col

def solution(p, c):
    answer = col.Counter(p) - col.Counter(c)
    return list(answer.keys())[0]


# 2. zip 풀이
# 1) 인데스별로 묶이며, 가장 짧은 리스트를 기준으로 맞춰진다.
def solution(p,c):
    p.sort()
    c.sort()
    for p,c in zip(p,c):
        if p!=c:
            return p
    return p[-1]

# 3. hash 풀이
def solution(p,c):
    temp = 0
    dic={}
    for p in p:
        dic[hash(p)] = p
        temp += int(hash(p))
    for c in c:
        temp -= hash(c)
    answer =dic[temp]

    return answer