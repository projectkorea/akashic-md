# 완전탐색 문제? 8 < n,m < 50

# 체스판에 맞춰서 다시 칠하기

n,m = map(int,input().split())
li=[(list(input())) for _ in range(n)]

# 최대한 블랙/화이트 연속이 많은 쪽으로 자르기
# 여기서 컴퓨팅적 사고를 입히면..... ! 유레카 -> 컴퓨팅적 사고란 최대한 많은 횟수를 진행해보고 판단하는 것
# 8칸*8칸씩 끊어서 체스판에 맞게 출력하기 위한 횟수 중 최소값을 리턴하면 되겠네

wb = ['W','B','W','B','W','B','W','B']
bw = ['B','W','B','W','B','W','B','W']

poss1 = [wb,bw,wb,bw,wb,bw,wb,bw]
poss2 = [bw,wb,bw,wb,bw,wb,bw,wb]
count_li = []

# 시간복잡도 계산, (42 * 42 * 8 * 8) * 2 160,000 
# 하나씩 대입하지 않고, 슬라이싱으로 하는 법도 있구나!

for i in range(0, n-8+1):
    for j in range(0, m-8+1):
        # for p in range(8):
        #     for q in range(8):
        new_li = li[i:i+8][j:j+8]
        count1 = 0
        count2 = 0
        for p in range(8):
            for q in range(8):
                print(new_li)
                if poss1[p][q] == new_li[p][q]:
                    pass
                else:   
                    count1+=1
                if poss2[p][q] == new_li[p][q]:
                    pass
                else:
                    count2+=1
        count_li.append(count1)
        count_li.append(count2)

print(min(count_li))
        


# li[0:1]은 리스트 형이기 때문입니다.
# 빈 리스트에 0:1의 원소를 하나씩 추가합니다.
# 0:1이니까 인덱스 0의 원소만 추가하죠. 
# li[0:1][0:2] 해도 열의 슬라이싱은 무시하고 li[0]의 원소 그대로 가져온다






