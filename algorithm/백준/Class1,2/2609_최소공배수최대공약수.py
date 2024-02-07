# GCD * LCM = GCD*GCD*A*B(A,B는 서로소) = a*b
# a*b//gcd(a,b) = lcm

X,Y=map(int,input().split())
x,y = X,Y

# 최대공약수 구하는 호제법
while y!=0:
    x,y = y,x%y

print(x)
print(X*Y//x)