s=sorted(list(input()))
num = ['1','2','3','4','5','6','7','8','9','0']

idx = 0
for i in s:
    if i not in num:
        break
    idx +=1

s_num = list(map(int,s[:idx]))
s_let = s[idx:]

sum_num = str(sum(s_num))
s_let.append(sum_num)

print(''.join(s_let))