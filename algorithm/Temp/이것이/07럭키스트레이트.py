n = list(map(int,input()))
half = len(n)//2

n1 = n[:half]
n2 = n[half:]

print("LUCKY" if sum(n1) == sum(n2) else "READY")

