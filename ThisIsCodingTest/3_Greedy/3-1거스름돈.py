n=1260
coin_type = [500,100,50,10]
answer = 0
for coin in coin_type:
    answer += n//coin
    n%=coin
print(answer)