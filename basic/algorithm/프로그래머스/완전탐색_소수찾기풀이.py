from itertools import permutations
import math

def check(n):
    # 0과 1은 무시
    if n < 2:
        return False
    for i in range(2,int(math.sqrt(n))+1):
        if n % i == 0:
            return False
    return True

def solution(numbers):
    answer = []
    for i in range(1,len(numbers)+1): #len(문자열) 해도 체크가 된다.
        
        # 조합 가능한 숫자 리스트에 저장하기
        d = list(map(''.join, permutations(list(numbers),i))) # 숫자 합치기
        for j in list(set(d)) : # 중복 제거한 숫자
            if check(int(i)): # 소수인지 확인
                answer.append(int(i))
    answer =len(set(answer)) # 7, 7인 경우 77,77은 두 번 나오기 때문에
    return answer

print(solution("17"))