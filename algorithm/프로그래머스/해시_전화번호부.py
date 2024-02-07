# 1. 문제를 100% 이해하지 못했다.
# 2. 출제자의 의도, 풀이의 핵심을 이해해보도록 하자
'''
'접두어'에 FOCUS!
'''

# 1. startswith() 풀이 방법
def solution(phoneBook):
    phoneBook = sorted(phoneBook)
    # 새로 안 사실
    # 접두어별로 있는지 확인 = 문자열 기준 앞의 인덱스 부터 확인
    for p1, p2 in zip(phoneBook,phoneBook[1:]):
        if p2.startswith(p1):
            return False
    return True

# 2. hash 풀이 방법
def solution(phoneBook):
    dic={}

    for phone in phoneBook:
        dic[phone] = 1

    for phone in phoneBook:
        temp =""
        for number in phone:
            temp +=number
            # 각 자리를 붙은 게 dic안에 있으면 and 자기 자신은 제외(어차피 중복 안되니까)
            if temp in dic and temp != phone:
                return False
    return True