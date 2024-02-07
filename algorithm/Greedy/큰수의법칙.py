# 문제
# 큰 수 만들기

# N: 배열의 크기
# M: 더할 횟수
# K: 연속해서 더할 수 있는 횟수

# 입력 예시
# 5 8 3
# 2 4 5 4 6 배열에 들어있는 수

# 출력 예시
# 46

# 일반적인 풀이
# 가장 큰 수를 연속으로 더하고 두번째로 큰 수를 한번 더하는 방식

n, m, k = map(int,input().split())
data = list(map(int,input().split()))
data.sort()

max1 = data[n-1]
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

# M의 크기가 100억 이상이면 시간 초과가 발생할 수 있음
# 반복되는 수열을 파악하여, 수열의 길이로 나눈 나머지만큼만 계산하면 됨

n,m,k = map(int,input().split())
data = list(map(int,input().split()))
data.sort()

max1 = data[n-1] 
max2 = data[n-2]

max1_count = int(m / (k+1)) * k
max1_count += m % (k+1)

max2_count = m - max1_count

answer = 0
answer += max1_count * max1
answer += max2_count * max2

print(answer)