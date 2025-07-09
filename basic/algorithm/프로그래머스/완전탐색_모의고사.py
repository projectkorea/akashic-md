def solution(answers):
    # 문제 개수
    num = len(answers)
    
    # 찍는 패턴
    # 문제 수 만큼 리스트 추가하기
    no1 = [1,2,3,4,5] * (num // 5 + 5)
    no2 = [2,1,2,3,2,4,2,5] * (num // 8 + 8)
    no3 = [3,3,1,1,2,2,4,4,5,5] * (num // 10 + 10)
    count1 = 0
    count2 = 0
    count3 = 0
    
    # answers순서대로 답이 맞는지 카운트 하기
    for i in range(num):
        if answers[i] == no1[i]:
            count1 +=1
        if answers[i] == no2[i]:
            count2 +=1
        if answers[i] == no3[i]:
            count3 +=1
    
    # max 카운트 출력하기
    max_val = max(count1,count2,count3)
    
    # 가장 큰 수의 수포자 찾기
    answer = []
    if count1 == max_val:
        answer.append(1)
    if count2 == max_val:
        answer.append(2)
    if count3 == max_val:
        answer.append(3)
    
    return answer
    