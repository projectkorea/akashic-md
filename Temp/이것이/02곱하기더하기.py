s=sorted(list(map(int,input())))
answer =0

for num in s:
    if num == 0 or num ==1 or answer ==0:
        answer+=num
    else:
        answer*=num

print(answer)

a = list('123') # OK
a = list(map(int,'123')) # OK
print(a)