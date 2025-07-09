def solution1(s):
    li = list(map(int, s))
    if s[0] is '-':
        return ''.join(li) * -1
    else:
        return ''.join(li)
    
def solution2(s):
  return int(s[1:]) * -1 if s[0] == '-'  else int(s)        

def solution3(s):
    return int(s)
# 형변환 시 부호는 알아서 바뀜

# 진수 변경 로직
def solution4(s):
    result = 0

    for idx, number in enumerate(str[::-1]):
        if number == '-':
            result *= -1
        else:
            result += int(number) * (10 ** idx) # 이부분

    return result