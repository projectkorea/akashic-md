#일반적인 풀이
n,m,k = map(int,input().split())
data = list(map(int,input().split()))
data.sort()
max1 = data[n-1] #실수: (n-1)
max2 = data[n-2]
answer = 0

while m>0:
    for i in range(k):
        if m!=0:
            answer += max1
            m-=1
        else:
            break
    if m!=0:
        answer+=max2 #실수: 이 연산에서 m이 0일 수도 있음, if문 추가
        m-=1
    else:
        break
print(answer)


#수열 풀이
n,m,k = map(int,input().split())
data = list(map(int,input().split()))
data.sort()
max1 = data[n-1] #실수: (n-1)
max2 = data[n-2]
answer = 0

count1 = m//(k+1)*k + m%(k+1)*k
count2 = m//(k+1)

answer=max1*count1+max2*count2
print(answer)