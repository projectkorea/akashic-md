s=list(input())
num_array=['1','2','3','4','5','6','7','8','9']

num=[i for i in s if i in num_array]
string=[i for i in s if i not in num_array]

num=sum(list(map(int,num)))
string.sort()
print(''.join(string),num,sep='')

#배열의 모든 요소를 합쳐 하나의 문자열을 반환합니다.
# print(''.join(list))
# 새로운리스트를 만들어서 출력했구나 과거의 나...