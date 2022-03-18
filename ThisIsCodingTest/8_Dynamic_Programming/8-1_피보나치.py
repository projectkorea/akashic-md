import time

def fibo(x):
    if x ==1 or x ==2:
        return 1
    return fibo(x-1) + fibo(x-2)

start = time.time()
print(fibo(6))
end = time.time()
print(round(end-start,3))