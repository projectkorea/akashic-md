# 한 결과물 당 프린트 할 때 분기점을 생각하자
# if stack안의 if문의 else를 빼먹어서 print("NO")가 되지 않았음

for _ in range(int(input())):
    s = list(input())
    stack = ['flag']
    for item in s:
        if item =='(':
            stack.append(item)
        elif item ==')':
            temp = stack.pop() 
            if temp =='flag':
                break
    if stack:
        if stack.pop() =='flag':
            print("YES")
        else:
            print("NO")
    else:
        print("NO")