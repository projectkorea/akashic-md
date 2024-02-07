# 문자열 1개 부터, len(s)/2 까지 탐색해서, 최소의 result를 찾는다
# 1차 풀이(72점)
def zipper(s,chunk):
    s=list(s)
    temp = ''.join(s[:chunk])
    answer = len(s)
    toggle = 0
    for i in range(chunk,len(s),chunk):
        #chunk가 1이라고 생각
        #chunk 수 만큼 반복해서 붙여주기

        # 문자열 단위 마다 비교 연산
        target = s[i]
        for j in range(1,chunk):
            try:
                target += s[i+j]
            except:
                break
        if temp == target:
            if toggle ==1: # 두 번 연속 압축됐다. -chunk
                answer -= chunk
            else:
                answer = answer - chunk + 1 # 한 번 압축됐다. -chunk +1
            toggle = 1
        else:
            toggle = 0
        temp = target
    return answer
        

def solution(s):
    answer = len(s)

    for chunk in range(1,int(len(s)/2)+1):
        answer = min(answer,zipper(s,chunk))
    return answer


#2차 풀이 해설 참고

def solution(s):
    answer = len(s)
    for step in range(1,len(s)//2+1):
        compressed = ""
        prev = s[0:step]
        count  = 1
        for next in range(step, len(s), step):
            if prev == s[next:next+step]:
                count+=1
            else:
                compressed += str(count) + prev if count >= 2 else prev
                prev = s[next:next+step]
                count = 1
        compressed += str(count) + prev if count >= 2 else prev
        answer = min(answer,len(compressed))
    return answer