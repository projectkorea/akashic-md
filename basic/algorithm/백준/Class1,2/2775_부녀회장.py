    # 0 1 6 21
    # 0 1 5 15 35 70
    # 0 1 4 10 20 35  56
    # 0 1 3 6  10  15 21 28 36 45 55 66 78 
    # 0 1 2 3   4   5  6  7  8  9 10 11 12 13
    
t = int(input())
for i in range(t):
    k = int(input())
    n = int(input())
    now_li = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    # 층
    for p in range(k):
        next_li =[]
        for q in range(1,15):
            next_li.append(sum(now_li[0:q]))
        now_li = next_li
    answer = now_li[n-1]
    print(answer)

'''
다른 풀이(내 풀이와 차이점, 내 풀이는 인덱싱에 초점)
1) 최소 연산: 특정 호수를 알기 위해선, 특정호수까지만 계산하면 된다. 나는 전체 호수를 계산하고 그 전층의 결과를 리턴했따.
2) 유의미한 부분 코딩: 인덱스 교환 방식은 도중 오류나는 것을 직감하여 리스트를 교체하는 방법을 선택했다.
하지만 0번인덱스는 항상 1인 것을 생각해봤을 때, 1번부터 교환하면 문제가 되는 것이 아니였다.
3) f0 = [x for x in range(1,10)] 이런식의 리스트 초기화도 가능하다.
'''

t = int(input())

for _ in range(t):  
    floor = int(input())  # 층
    num = int(input())  # 호
    f0 = [x for x in range(1, num+1)]  # 0층 리스트 f0 = [x for x in range(i,num+1)]
    for k in range(floor):  # 층 수 만큼 반복
        for i in range(1, num):  # 1 ~ n-1까지 (인덱스로 사용)
            f0[i] += f0[i-1]  # 층별 각 호실의 사람 수를 변경 f0[i] +=f0[i-1]
    print(f0[-1])  # 가장 마지막 수 출력