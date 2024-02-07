a =input()
column=ord(a[0])-ord('a')
row=int(a[1])
moves=[(-2,-1),(-2,1),(2,-1),(2,1),(-1,2),(1,2),(-1,-2),(1,-2)]
count = 0

for move in moves:
    next_row=row+move[0]
    next_column=column+move[1]
    if next_row<1 or next_row>8 or next_column<1 or next_column>8:
        continue
    else:
        count+=1

print(count) 
