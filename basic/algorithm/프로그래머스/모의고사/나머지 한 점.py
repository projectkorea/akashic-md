def solution(v):
    x = [i[0] for i in v]
    y = [i[1] for i in v]
    
    for i in range(2):
        x[0] ^= x[i+1]
        y[0] ^= y[i+1]
        
    return [x[0],y[0]]

# ^ XOR연산은 다르면 1이다.
# 따라서 x[0]과 x[1], x[2]을 비교해서 x[0]과 다르면 x[0]에 대입하는 형식으로, 다른 좌표를 찾아낸다.
# ^ 비트연산을 통해 같은 값이 두개있으면 나머지 한 값이 나오네

## counter.collection을 이용한 방법
from collections import Counter

def solution(v):
  x = [i[0] for i in v]
  y = [i[1] for i in v]
  x_count = Counter(x)
  y_count = Counter(y)

  x_answer = [i for i in x_count if x_count[i] == 1]
  y_answer = [i for i in y_count if y_count[i] == 1]

  answer = x_answer+y_answer
  return answer
  
