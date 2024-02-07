def solution(numbers):
    numbers = list(map(str,numbers))
    numbers.sort(key=lambda x:x*3, reverse=True)
    return str(int(''.join(numbers)))

'''
from itertools import permutations
def solution(numbers):
    li = sorted(map(''.join,list(permutations(list(map(str,numbers)),len(numbers)))),reverse=True)
    answer = li[0]
    return answer
'''
# 시간 복잡도를 생각 못했다.
# 배열의 개수가 100000까지 되니깐, O(100000!)은 당연히 TImeOut이다

'''
변환된 num을 sort()를 사용하여 key 조건에 맞게 정렬한다. 
lambda x : x*3은 num 인자 각각의 문자열을 3번 반복한다는 뜻이다. 
x*3을 하는 이유? -> num의 인수값이 1000 이하이므로 3자리수로 맞춘 뒤, 비교하겠다는 뜻.
예시가 잘못되서 햇갈렸다.
6,2,10을 비교하는 게 아니라

121 12를 비교할 때 
[121,12] 121 21 > 12 112 이므로

121: 121121
12:  121212 12가 더 큰 수 이는 1000이하의 숫자인 것을 감안해봤을 때 단순히 문자열을 반복해줌으로써 값 비교 가능해짐
'''
