n=list(map(int,input()))

left=sum(n[:int(len(n)/2)])
right=sum(n[int(len(n)/2):])

if left ==right:
    print("LUCKY")
else:
    print("READY")


#/ gives a floating point result. If you want an integer result, use //.
# left=sum(n[:len(n)/2]) 이 부분에서
# len(n)/2 가 3.0이 나오면서 슬라이싱이 안됐음. 