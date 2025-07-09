def solution(genres, plays):
    
    answer = []
    dic = {}
    li = []
    
    # genres와 plays 합치기
    for music in zip(genres,plays):
        li.append(music)

    # 딕셔너리에 넣기
    for idx,music in enumerate(li):
        if music[0] not in dic:
            dic[music[0]] =[]
        dic[music[0]].append([idx,music[1]])
    print(dic)

    # 장르내에서 정렬하기
    new_dic={}
    for genre in dic.items():
        music_list = sorted(genre[1],key=lambda x:x[1],reverse=True)
        new_dic[genre[0]] = music_list
    print(new_dic)
        
    print("-------------------")
    # 장르별 플레이 수 합치기
    plays_sum={}
    for genre, plays in dic.items():
        sum_play = 0
        for play in plays:
            sum_play += play[1]
        plays_sum[genre] = sum_play
     
    # 많이 플레이 된 장르문 정렬
    plays_list = sorted(plays_sum.items(),key=lambda x:x[1],reverse=True)
    
    # 많이 플레이 된 장르문에서 노래 찾기
    for genre in plays_list:
        print(new_dic)
        for i in range(2):
            answer.append(new_dic[genre[0]][i][0])
        
        # 만약 중복이 나오면 sort후 낮은 번호대로, idx리턴하기
        
    return answer


def solution(genres, plays):
    answer = []

    dic1 = {}
    dic2 = {}

    for i, (g, p) in enumerate(zip(genres, plays)):
        if g not in dic1:
            dic1[g] = [(i, p)]
        else:
            dic1[g].append((i, p))

        if g not in dic2:
            dic2[g] = p
        else:
            dic2[g] += p

    for (k, v) in sorted(dic2.items(), key=lambda x:x[1], reverse=True):
        for (i, p) in sorted(dic1[k], key=lambda x:x[1], reverse=True)[:2]:
            answer.append(i)

    return answer