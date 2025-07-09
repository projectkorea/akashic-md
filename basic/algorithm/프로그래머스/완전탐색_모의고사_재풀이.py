def solution(answers):
    answer = []
    
    # 패턴 입력
    no1 = [1,2,3,4,5]
    no2 = [2,1,2,3,2,4,2,5]
    no3 = [3,3,1,1,2,2,4,4,5,5]
    count = [0,0,0]
    # 인덱스가 없어서 list index out of range뜸

    # i%배열의크기를 이용한 인덱스 주기 활용
    for idx,val in enumerate(answers):
        if answers[idx] == no1[idx%len(no1)]:
            count[0] +=1
        if answers[idx] == no2[idx%len(no2)]:
            count[1] +=1
        if answers[idx] == no3[idx%len(no3)]:
            count[2] +=1
    
    # max값을 활용하여 answer에 답 추가
    max_val = max(count)
    answer =[]
    for i in range(1,4):
        if count[i-1] == max_val:
            answer.append(i)

    return answer 