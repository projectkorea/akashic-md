n = int(input())
count = 0

for hh in range(n+1):
    for mm in range(60):
        for ss in range(60):
            clock = str(hh)+str(mm)+str(ss)
            if '3' in clock:
                count +=1

print(count)