answer = 0

def DFS(numbers, target, result):
    global answer
    if numbers ==[]: 
        if target == result:
            answer +=1
        return
    
    DFS(numbers[1:], target, result+numbers[0])
    DFS(numbers[1:], target, result-numbers[0])

def solution(numbers, target):
    global answer
    DFS(numbers, target, 0)
    return answer