# 0은 곱하면 안되고, 1은 더해야 하고 = 0과1은 더하기

s=list(map(int,input()))
s.sort()
result = s[0]

for item in s[1:]:
    if item == 0 or item == 1 or result ==0 :
        result += item
    else:
        result *= item

print(result)
