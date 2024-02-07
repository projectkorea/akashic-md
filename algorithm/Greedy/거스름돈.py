# 문제
# N: 거슬러줘야할 돈 
# answer: 거슬러줘야할 동전의 최소 개수


n = 1260
coin_type = [500, 100, 50, 10]

answer = 0

for coin in coin_type:
    count = n//coin
    answer += count
    n = n % coin

print(answer)


# 시간 복잡도 O(K)
# K는 동전의 종류

# 문제가 풀리는 이유
# 가지고 있는 동전 중에서 큰 단위가 항상 작은 단위의 배수이므로
# 작은 단위의 동전들을 종합해 다른 해가 나올 수 없다.

# 예를 들어 800원을 거슬러 줘야 할 때 500원 1개와 100원 3개를 사용해야 한다고 하지만
# 화폐 단위가 500원, 400원, 100원일경우 400원 2개를 사용하는 것이 더 적은 수의 동전을 사용하는 것이다.
# 화폐 단위가 배수 형태가 아니라면 그리디 알고리즘으로 해결할 수 없다.