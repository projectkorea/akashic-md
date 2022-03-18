def solution(id_list, report, k):
    answer =[0 for _ in range(len(id_list))]
    
    # 유저별로 신고한 유저들이 저장된다.
    reported_name = {name:[] for name in id_list}
    # 유저별로 몇번 신고된지 저장된다.
    reported_count ={name:0 for name in id_list}
    
    # set함수를 이용해 동일 신고 무시
    for item in set(report):
        user, reported_user = item.split(" ")[0], item.split(" ")[1]
        reported_count[reported_user] += 1
        reported_name[reported_user].append(user)
    
    # key: 신고당한 유저, values: 신고한 유저
    for key, values in reported_name.items():
        if reported_count[key] >= k: 
            for value in values:
                answer[id_list.index(value)] +=1
    return answer
