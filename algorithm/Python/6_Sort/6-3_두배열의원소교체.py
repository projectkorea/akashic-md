n,k = map(int,input().split())
li_a=list(map(int,input().split()))
li_b=list(map(int,input().split()))

li_a.sort()
li_b.sort(reverse=True)

for i in range(k):
    if li_a[i] < li_b[i]:
        li_a[i],li_b[i]=li_b[i],li_a[i]
    else:
        break # 정렬했기 때문에 b가 더이상 크지 않으면 의미 없어 반복문 탈출

print(sum(li_a))
