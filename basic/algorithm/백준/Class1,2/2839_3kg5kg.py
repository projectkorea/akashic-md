n = int(input())
answer = 0

while n>0:
    if n < 3:
        answer = -1
        break
    else:
        if n%5==0 and n>=5:
            answer += 1
            n -= 5
        else:
            answer+=1
            n -=3
print(answer)


# 다른 풀이
# 배수가 계산에 획기적이다.     
sugar = int(input())

bag = 0
while sugar >= 0 :
    if sugar % 5 == 0 :  # 5의 배수이면
        bag += (sugar // 5)  # 5로 나눈 몫을 구해야 정수가 됨
        print(bag)
        break
    sugar -= 3  
    bag += 1  # 5의 배수가 될 때까지 설탕-3, 봉지+1
else :
    print(-1)