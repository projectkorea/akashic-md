n = int(input())
li = sorted(list(map(int,input().split())))

# 가능한 경우의 수 입력 ㄴㄴ
# 그리디: x는 1부터 target-1까지 모든 금액을 만들 수 있는 상태라고 가정
# 그리디 문제특: 증명하긴 어렵지만 말이됌 ㅇㅇ
# target을 만들 수 있으려면 니가 가진 동전의 단위가 target과 같거나 작아야한다.

# 만들 수 없는 금액의 조건: 1) 가장 작은동전보다 적은 금액 2) 모든 동전을 더한 것 보다 큰 금액

target = 1
for x in li:
    if target<x:
        break
    target+=x