from sys import stdin
s = list(stdin.readline())

while s[0] !='.':
    pa = 0 # 소괄호
    br = 0 # 대괄호
    stack = [] # 짝 맞는지 확인
    for item in s:
        if item =='(':
            stack.append(')')
        elif item =='[':
            stack.append(']')
        if item =='(':
            pa += 1
        elif item ==')':
            pa -=1
        elif item =='[':
            br += 1
        elif item ==']':
            br -=1
        # 괄호가 닫힐 경우
        if pa < 0 or br < 0:
            break
        # 괄호가 엇갈릴 경우
        if item ==')' or item ==']':
            if stack.pop() != item:
                break
    # 괄호가 짝이 맞지 않을 경우
    if pa ==0 and br==0:
        print("yes")
    else:
        print("no")
    s = list(stdin.readline())