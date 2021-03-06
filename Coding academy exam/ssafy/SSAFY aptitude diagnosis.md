# ssafy Aptitude diagnosis
## 싸피 적성 진단 유형 분석
### 유형 1. 수리/추리 논리 
* 총 15문제 / 30분
    1. 응용수리 5문항
    2. 자료분석 4문항
    3. 논리추리 6문항(도형2, 논리4)
* 합격 예상 문항수 11개 이상
### 유형 2. Computational Thinking
* 총 5 X 5문제 / 30분
    1. 동적계획법
    2. 그리디
    3. 이산수학
    4. 슬라이딩윈도우 등
* 합격 예상 문항수 3 X 5개 이상
---
## algorithm jobs
### 문제 1 
동적계획법(LCS)

    문제 1) 편집거리
        두 문자열 A, B를 같아지게 최소 몇 번의 연산을 해야하는가
            연산 1. 문자 하나 추가
            연산 2. 문자 하나 제거

    예시) 
        (back, bag)
        back에서 c, k를 지우고 g를 추가 ... 답은3

    보기)
        1. melon, watermelon
        2. apple, application
        3. isiteasy, itiseasy
        4. algorithmjobs, aldentespaghetti
        5. editdistanceproblem, dijkstraalgorithm
    
    내 답)
        5, 8, 3, 21, 20
    
    풀이법)         
        편집 거리를 구하기 위해서 최소의 삽입/삭제를 문자열 A에서 B를 만들어야 한다.
        **최대공통부분수열(LCS)**을 고려해야 한다(동적계획법)   
    
        즉 back과 bag에서 ba라는 공통부분을 뽑아내고 필요한 문자를 추가, 삭제한다.
    
        4(A문자개수) -> 2(LCS) -> 3(B문자개수)
        4-**2**=2 문자 2개 삭제
        2+**1**=3 문자 1개 추가
    
    풀이)
        1. melon, watermelon
            LCS : melon
            5-5+5=5
        2. apple, application
            LCS : appl
            5-4+7=8
        3. isiteasy, itiseasy
            LCS : iteasy
            8-6+2=4
        4. algorithmjobs(13), aldentespaghetti(16)
            LCS : al, t, h or al, g, i or al, t, s
            13-4+12=21
        5. editdistanceproblem(19), dijkstraalgorithm(17)
            LCS : di, st, a, l or o or r, m(7)
            19-7+10=22

### 문제 2
논리추리 - 인덱스, 사이클

    문제 2) 고양이 찾기
    고양이는 지금 위치 1번에 있고 한 시간에 한번 이동하고 예상대로 움직인다고 할 때 m시간 뒤에 고양이의 위치는?

    예시)
    고양이의 이동방법 : 2 4 1 5 3
    1번위치에서 2번으로
    2번위치에서 4번으로
    3번위치에서 1번으로
    4번위치에서 5번으로
    5번위치에서 3번으로
    (인덱스의 개념이 도입됨.)

    즉 1 > 2 > 4 > 5 > 3 이라는 사이클로 고양이는 이동한다.
    즉 m을 5로 나눈 나머지가 0,1,2,3,4이면 각각 고양이의 m시간뒤의 위치는 1,2,3,4,가 된다.

    문제)
    1번 - 2 4 5 4 3, 12
    2번 - 5 4 2 2 4, 60
    3번 - 3 1 4 2 4, 120
    4번 - 6 5 9 5 3 4 8 5 1, 600
    5번 - 2 4 6 8 10 1 3 5 7 9, 1150

    풀이)
    보기별 이동경로 인덱스 화 > 사이클 및 사이클 개수(c) 확인 > m을 c로 나눈 나머지(인덱스)가 답.
    index   0   1   2   3   4   5   6   7   8   9   10
    1번     1   2   4   5   4   3
    2번     1   5   4   2   2   4
    3번     1   3   1   4   2   4
    4번     1   6   5   9   5   3   4   8   5   1
    5번     1   2   4   6   8   10  1   3   5   7   9

    사이클)
    1번 1 2 4 4 4 ...       = 3번째 부터 4만 반복 
    2번 1 5 4 2 4 2 ...     = 3번째부터 4, 2 반복 (홀수 4, 짝수 2)
    3번 1 3 4 2 1 ...       = 1 3 4 2 반복
    4번 1 6 4 5 3 9 1 ...   = 1 6 4 5 3 9 반복
    5번 1 2 4 8 3 6 1 ...   = 1 2 4 8 3 6 반복

    답)
    1번 12 > 3 따라서 4
    2번 60은 짝수 따라서 2
    3번 120 % 3 = 몫...0 나머지가 0 따라서 1
    4번 600 % 6 = 몫...0 나머지가 0 따라서 1
    5번 1150% 6 = 몫...4 나머지가 4 따라서 3

### 문제 3
    문제3) 2진수, XOR(배타적 논리합) - XOR
    a와 b를 2진수로 나타낸다
    a와 b의 각 비트 중 같은 위치의 값이 서로 다른 부분은 1, 같은 부분은 0으로 만든다.

    예를들어 3 ^ 9 라면 각각을 2진수로 바꾸면 00000011 ^ 00001001 = 00001010 = 10 이 된다.

    a ^ b = n 식에서 a와 n이 주어질 때 b를 구하라(a와 b가 주어질 때 n을 구하는 문제가 아니라는 점에 주의)

    예시)
    4와 11이 주어지면
    4 ^ x = 11 이 되는 x를 구해야 한다.
    00000100 ^ x = 00001011이 되는 x는 00001111이므로 15가 정답이다

    문제)
    1번 : 4 9
    2번 : 8 11
    3번 : 3 32
    4번 : 9 81
    5번 : 25 625

    풀이)
    XOR 배타적 논리합: 2개 명제 중 1개만 참일 경우..
    a ^ b = n 일 때 a ^ n = b이다
    1번 : 00000100 ^ 00001001 = 00001101
    2번 : 00001000 ^ 00001011 = 00000011
    3번 : 00000011 ^ 00100000 = 00100011
    4번 : 00001001 ^ 01010001 = 01011000
    5번 : 0000011001 ^ 1001110001 = 1001101000
          
### 문제 4
    문제 4) 진법 변환 - 삼 거듭제곱 계산기
    숫자 n을 3의 거듭제곱 숫자들을 중복 없이 더해서 만들 수 있는지 구하여라.
    (1도 3^0 으로 3의 거듭제곱으로 본다.)

    예시) 
    109는 3^0 + 3^3 + 3^4로 나타낼 수 있다.
    7은 3^0 + 3^1 + 3^1으로 나타낼 수 있지만
    3^1을 두 번 사용했으므로 이 식은 사용할 수 없다.
    7은 무슨 수를 써도 중복 없이 3의 거듭제곱을 더해서 만들 수 없다.

    문제)
    1번 : 36
    2번 : 120
    3번 : 278
    4번 : 19424
    5번 : 10492831

    풀이)
    3진법으로 변환.
    나머지에 2가 없는 경우(중복 사용이 아닌 경우) 만들 수 있다.

    1번 : 1000 따라서 답은 o
    2번 : 10110 따라서 답은 o
    3번 : ...2 따라서 답은 x
    4번 : ...2 따라서 답은 x
    5번 : ...2110101 따라서 답은 x

---
## HELLOSSAFY 
### Computational Thinking (CT)
### 문제 1
    문제 1) 등차수열, 그리드 - 드론
     한 개의 드론이 바둑판 형태의 타일 위에 놓여져 있다.
     드론은 동, 서, 남, 북 방향으로 1초에 한 칸씩 이동할 수 있다. 
     즉, (0,0)에서 1초 후에는 (1,0),(0,1),(-1,0),(0,-1)로 이동을 할 수 있다.
     드론은 제자리에 머무르는 경우는 없으며 1초마다 반드시 한 칸을 이동해야 한다.
     드론이 (0,0)에서 출발하여 정확히 N초 후에 위치할 수 있는 서로 다른 좌표의 개수를 구하여라.
    
    풀이) 등차가 4인 등차수열 4,8,12...
    N초 후면 4 X N개

### 문제 2
    문제 2) 경우의 수, 인덱스 - 패킷
     한 개의 문자열을 여러 번 반복하여 하나의 패킷을 만들어서 전송하였다.
     전송 과정에서 패킷의 앞/뒤 일부분이 손상되었다.
     전송 받은 패킷을 바탕으로 원본이 될 수 있는 문자열의 최소 길이를 구하라.
     문자열의 반복 횟수 및 손상된 패킷의 정보는 알 수 없다.

     예시 및 풀이)
      abcda라는 문자열만 남았을 때    
      뒤에 bcd를 붙이면
      abcdabcd가 되어 abcd가 반복된 것
      앞에 bcd를 붙이면 
      bcdabcda가 되어 bcda가 반복된 것
      앞에 cd, 뒤에 b를 붙이면
      cdabcdab가 되어 cdab가 반복된 것
      앞에 d, 뒤에 bc를 붙이면
      dabcdabc가 되어 dabc가 반복된 것
      
      따라서 원본이 될 수 있는 문자열의 최소 길이는 4다. 
      4가지 경우의 패킷이 2번 반복 된 것.
