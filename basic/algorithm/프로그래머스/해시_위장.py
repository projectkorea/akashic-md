# 곱집합 연산
# (A+1) x (B+1) - 1 로 계산했다. 1 을 빼주는 이유는
# (A+1) x (B+1) 의 경우에는 비어있는 경우도 포함되기 때문이다.

def solution(clothes):
    dic={}
    for item in clothes:
        if item[1] not in dic:
            dic[item[1]] = 1
        else:
            dic[item[1]] +=1
    
    cases = 1
    
    for item in dic.values():
        cases *= item+1
        
    return cases-1