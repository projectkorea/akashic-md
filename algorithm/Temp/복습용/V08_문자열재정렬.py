s=list(input())
print(s)
num_li = ['0','1','2','3','4','5','6','7','8','9']
result = 0

for item in s:
    if item in num_li:
        print(item)
        result += int(item)
        #s.remove(item)  -> 여기서 바로 지우면 인덱스가 하나 땡겨져서 아래와 같은 예시일 때
        # 4가지워지면 1이 카운트 안되고 2로 바로 넘어감
        # AJKDSLSI412K4JSJ9D

s.sort()
for item in s:
    print(item,end='')
print(result,end='')