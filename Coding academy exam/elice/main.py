# 입력
n = int(input("숫자를 입력하세요: "))

# 블리언 리스트 생성 및 True로 초기화
plist = [True] * n

# 0, 1은 소수가 아니므로 False
plist[0] = False
plist[1] = False

# n의 최대 약수가 루트 n 이하이므로 int(루트n)까지 검사
m = int(n**0.5)
for i in range(1, m+1):
    if plist[i] == True:
        for j in range(i+i, n, i):
            plist[j] = False;

# 소수 개수 구하고 출력
cnt = 0
for i in range(1, n):
    if plist[i] == True:
        cnt += 1
print(cnt)