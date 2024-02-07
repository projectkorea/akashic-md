n = int(input())
s =[]
s_op=[]
answer = True
count = 1

for _ in range(n):
    num = int(input())
    
    while num >= count:
        s_op.append('+')
        s.append(count)
        count +=1
    if s[-1] == num :
        s.pop()
        s_op.append('-')
    else:
        answer = False
        print("NO")
        break
        
if answer:
    for i in s_op:
        print(i)
        
        