stack = []

stack.append(5)
stack.append(2)
stack.append(3)
stack.append(7)
stack.pop() #7
stack.append(1)
stack.append(4)
stack.pop() #4

print(stack) #가장 깊은 곳 부터 출력
print(stack[::-1]) #pop되면서 출력