from prime import prime_list
# prime_list는 1부터 10000사이의 소수가 오름차순으로 저장된 리스트 입니다.

n = int(input())
ans = []
if n % 2 == 0 :
    n / 2 