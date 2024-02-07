def recursive_function(i):
    if i == 100:
        return
    print(f'{i}번째 재귀 함수를 호출합니다')
    recursive_function(i+1)

recursive_function(1)