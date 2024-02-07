# 코딩을 규격을 맞춰서 하려고 하니, 경직되게 짠다.
# 문제에 맞춰서 유동적으로 짜는 게 가장 중요하다.
# 상황에 맞춰서 상황에 맞는 코드를 작성하되, 규격의 코딩의 스킬을 이용하자.........


n=int(input())
num = 1 #벌집 번호
count = 1
while n>num:
    num += 6*count
    count +=1
print(count)