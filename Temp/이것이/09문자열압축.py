def solution(s):
    answer =[] 
    
    print(len(s))
    for step in range(1,len(s)//2+1):
        prev = s[:step]
        compressed=''
        num = 1
        
        for i in range(step,len(s)+1,step):
            if prev == s[i:step+i]:
                num +=1
            # 전 압축문자와 같지 않을 때
            else:
                if num != 1:
                    compressed += str(num) + prev
                else:
                    compressed += prev
                prev = s[i:step+i]
                num = 1
            # step에 짤려 마지막 인덱스가 붙여지지 않을 떄
            if i==len(s)-step and prev[-1] != s[-1]:
                compressed += s[step+i:]
            
        print(compressed)            
        answer.append(len(list(compressed)))
    
    answer = min(answer)
    return answer