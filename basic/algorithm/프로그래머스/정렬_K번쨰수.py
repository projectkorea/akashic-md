def solution(array, commands):
    answer = []
    for i in range(len(commands)):
        li = sorted(array[commands[i][0]-1:commands[i][1]])
        answer.append(li[commands[i][2]-1])
    return answer

'''
    새로 알게 된 사실
        1. list[i][i] = []
        2. 문제에서 흔히 I번째에서 J번째까지라고 함은 list[i-1][j]이다
        3. k번째 수는 인덱스로 k-1이다
'''
