# memo방법 fibo (2)

import time
start = time.time()

dd = [0] * 100
dd[1] = 1
dd[2] = 1
n=30
for i in range(3, n+1):
    dd[i] = dd[i-1]+dd[i-2]
print(dd[n])

end = time.time()
print(round(end-start,3))