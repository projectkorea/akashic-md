def solution(n):
  s = []
  num = 0
  while n> 0: # 1. n번째수를 2진수로 표현
    s.append(n%2)
    n //=2
  for i in range(len(s)): # 2. 2진수를 3의 거듭제곱합으로 변환
    if s[i] == 1:
      num += 3 ** i
  return num