# memo방법 fibo (1)

import time

d = [0] * 100

def fibo_memo(x):
    if x ==1 or x == 2:
        return 1
    if d[x] !=0:
        return d[x]
    d[x] = fibo_memo(x-1)+fibo_memo(x-2)
    return d[x]

start = time.time()
print(fibo_memo(6))
end = time.time()
print(round(end-start,3))


def fibo_memo(x):
  if x==1 or x==2:
    return 1
  elif d[x] !=0:
    return d[x]
  else:
    d[x] = fibo_memo(x-1) + fibo_memo(x-2)
    return d[x]

fibo_memo(6)