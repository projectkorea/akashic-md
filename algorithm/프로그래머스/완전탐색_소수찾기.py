from itertools import permutations
import math

def solution(numbers):
    # numbers로 받은 숫자 리스트에 각각 저장하기
    li = list(numbers)
    num = len(li)
    poss =[]
    answer = 0
    
    # 조합 가능한 숫자 리스트에 저장하기
    for i in range(1,num+1):
        d = list(permutations(li,i))
        for j in range(len(d)):
            if d[j][0] != '0':
                poss.append(''.join(d[j]))
    
    # 중복되는 숫자 없애기
    set_poss = set(poss)
    
    # 소수 찾기
    for item in set_poss:
        count = 0
        for dividor in range(2, int(math.sqrt(int(item)))+1):
            # 소수가 아니라면 반복문 바로 끝내기
            if int(item) ==1 and int(item) % dividor == 0:
                count =1
                break
        if count ==0:
            answer +=1
            
    # 시간탐색: 문자열 길이가 최대 7이라면, 가능한 예비 문자열은
    # 1) 7 + 7*6 + 7*6*5 + 7*6*5*4 + ... + 7*6*5*4*3*2*1
    # 7 + 42 + 200 + 800 + 2400 + 5040  -> 대략 1만 이하
    # 2) 소수확인하는 방법: 2부터 그숫자-1까지 %값이 0이면 break
    # 9,999,999 소수 확인 하려면 엄청난데?
    # 100부터 51이상은 보지 않아도 되는 것 처럼, 쓸데없는 연산은 빼면 됌
    # /2 말고 좀 더 획기적으로 줄 일 수 있는 방법 없나?
    # 제곱근 범위까지 볼까, 천만이면, 제곰근이 3천대된다.
    
    return answer

print(solution("17"))