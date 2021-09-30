# 입력
n = int(input())

# 방법1(30점) - 약수의 개수
# 소수를 담을 리스트 선언
plist = []
# 약수의 개수를 구해 소수리스트 구하기
for i in range(1, n + 1):
    cnt = 0
    for j in range(2, i+1):
        if i % j == 0:
            cnt += 1
    if cnt == 1:
        plist.append(i)
# 출력
print(len(plist))

# 방법2(70점) - 에라토스테네스의 체
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

# 소수 개수 구하기
cnt = 0
for i in range(1, n):
    if plist[i] == True:
        cnt += 1
# 출력
print(cnt)