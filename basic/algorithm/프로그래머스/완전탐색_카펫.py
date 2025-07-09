def solution(brown, yellow):
    # w>= h
    # brown = 2w + 2h - 4
    # yellow = w*h-brown
    # w*h = brown+yellow
    # w+h = brown/2 + 2
    
    for w in range(3,brown//2-2+1):
        for h in range(3,w+1):
            if w*h == brown+yellow and w+h ==brown//2 + 2 :
                return w,h
    return []