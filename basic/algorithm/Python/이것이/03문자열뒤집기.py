s = list(map(int,input()))
chunk0 = 0
chunk1 = 0
prev=s[0]

for now in s[1:]:
    if prev == 0:
        if prev == now:
            pass
        else:
            chunk0 +=1
            prev = now
    else:
        if prev ==now:
            pass
        else:
            chunk1 +=1
            prev = now
print(min(chunk0,chunk1))

