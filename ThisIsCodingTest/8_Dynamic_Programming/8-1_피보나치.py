import time

def fibo(x):
    if x ==1 or x ==2:
        return 1
    return fibo(x-1) + fibo(x-2)

d = [0] * 100

# memo방법 fibo (1)
def fibo_memo(x):
    if x ==1 or x == 2:
        return 1
    # d[x]가 입력이 됐다면, d[x]리턴
    if d[x] !=0:
        return d[x]
    d[x] = fibo_memo(x-1)+fibo_memo(x-2)
    return d[x]

# memo방법 fibo (2)
dd = [0] * 100
dd[1] = 1
dd[2] = 1
n=30
for i in range(3, n+1):
    dd[i] = dd[i-1]+dd[i-2]
print(dd[n])


start = time.time()
print(fibo(6))
mid = time.time()
print(round(mid-start,3))

print(fibo_memo(6))
end = time.time()
print(round(end-mid,3))