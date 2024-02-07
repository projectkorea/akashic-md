def solution(s):
    answer=len(s)
    for step in range(1,len(s)//2+1):
        compressed=""
        count=1
        prev=s[0:step]
        for next in range(step,len(s),step):
            if prev == s[next:next+step]:
                count+=1
            else:
                compressed += str(count) + prev if count >=2 else prev
                count = 1
                prev=s[next:next+step]
        compressed += str(count) + prev if count >=2 else prev # 뭉텅이 2개 밖에 없을 때 for문 다 돌리고 압축 결과 넣어야 하므로
        answer = min(len(compressed),answer)
    return answer

print(solution('abcabcdede'))