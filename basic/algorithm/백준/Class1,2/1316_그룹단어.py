"""
1) 문자열 그대로 인덱스를 활용하는 법을 활용
2) 리스트에 따로 추가하는 방식이 아닌, 이미 있는 문자열 활용
3) 반복문이 끝나는 것, break를 통해 나오는 것이 같은 연산이 될 수 있으므로, break문에서 연산을 해줌
"""

n = int(input())
count = 0
for i in range(n):
    word = input()
    for j in range(len(word)-1):
        if word[j] == word[j+1]:
            pass
        elif word[j] in word[j+1:]:
            count +=1
            break
# 그룹단어 출력, 총 개수 - 카운트
print(n-count)