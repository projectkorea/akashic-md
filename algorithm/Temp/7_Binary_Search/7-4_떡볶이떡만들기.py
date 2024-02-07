#1차 풀이
n,m=map(int,input().split())
li=list(map(int,input().split()))

li.sort()

# 가운데 떡길이 만큼 잘라봐서 가늠을 하는거지

def binary_search(li,m,start,end):
    h=0
    while start<=end:
        mid = (start+end)//2
        # 떡을 H만큼 잘랐을 때 나머지 길이
        sum_li = []
        for item in li:
            diff = item - li[mid]
            if diff > 0:
                sum_li.append(diff)
        
        # M만큼의 떡을 얻었다면 = 높이 최대
        if m == sum(sum_li):
            h = li[mid]
            break
        # m이상 이미 충분히 얻음 = 높이를 더 높여도 됌  = start 오른쪽으로 이동
        elif m < sum(sum_li):
            start = mid +1
            h = max(li[mid],h)
        # m만큼 얻지 못함. 높이를 줄여야함
        else:
            end = mid -1
    return h

print(binary_search(li,m,0,n-1))
