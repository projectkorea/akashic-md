def solution(citations):
    citations.sort(reverse=True)
    for idx , citation in enumerate(citations):
        if idx >= citation:
            return idx
    return len(citations)

# h번 이상 인용된 논문이 h개 이상, 나머지 논문이 h개 이하
# 가장 많이 인용된 = h가 최대인 값 부터 차례대로 검색
# idx = 논문의 수, citation은 논문인용횟수
# 논문의 수가 논문인용횟수보다 크거나 같을 경우, 즉 문제에서 나머지 논문이 h개 이하일 때는 고려하지 않아도 된다.