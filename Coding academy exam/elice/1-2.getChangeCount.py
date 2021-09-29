# 거스름돈의 개수 구하기 
# 입력
change = int(input("거스름돈을 입력하세요: "))
# 거스름돈의 종류 리스트
coin = [500, 100, 50, 10]
# 거스름돈 개수 세서 출력
cnt = 0
for c in coin:
    while change >= c:
        change = change - c
        cnt += 1
        
print(cnt)