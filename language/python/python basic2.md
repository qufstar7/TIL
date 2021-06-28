>> programmers 파이썬 입문 강의를 학습, 정리한 내용입니다 (https://programmers.co.kr/learn/courses/2)

# Phthon basic2

- [Phthon basic2](#phthon-basic2)
- [변수 사용하기](#변수-사용하기)
  - [변수란](#변수란)
  - [변수 선언](#변수-선언)
    - [syntax](#syntax)
  - [실습1 `variable.py`](#실습1-variablepy)
    - [결과값](#결과값)
  - [실습2 `variable.py`](#실습2-variablepy)
    - [결과값](#결과값-1)
  - [실습3 `variable.py`](#실습3-variablepy)
    - [결과값](#결과값-2)
  - [실습4 `variable.py`](#실습4-variablepy)
    - [결과값](#결과값-3)
- [주석](#주석)
  - [실습 `comment.py`](#실습-commentpy)
  - [주석 요약정리](#주석-요약정리)
- [숫자와 문자열](#숫자와-문자열)
  - [숫자](#숫자)
  - [문자열](#문자열)
  - [실습 `number.py`](#실습-numberpy)
- [REPL](#repl)
  - [실습 - powershell](#실습---powershell)
- [Shell 사용법](#shell-사용법)
  - [Shell 이란?](#shell-이란)
  - [Shell의 필수 기능 5가지(명령어)](#shell의-필수-기능-5가지명령어)
  - [Shell 요약정리](#shell-요약정리)
    - [Shell 명령어](#shell-명령어)
    - [파일이름 자동완성](#파일이름-자동완성)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>



# 변수 사용하기

## 변수란
* 어떤 값을 다음에 참조하기 쉽도록 이름을 붙여주는 것
## 변수 선언
### syntax
* '변수이름' = '변수에 넣을 내용'
* 등호의 의미 : **왼쪽의 이름이 오른쪽의 값을 표시한다**
* 변수를 사용하면 같은 코드로 비슷한 결과값을 여러 개 만들기 쉽다.
## 실습1 `variable.py`
```py
# 실습1
print('안녕! 나는 지구인이야. 나는 다리가 4개 있어.')
```
### 결과값
```
안녕! 나는 지구인이야. 나는 다리가 4개 있어.
```
## 실습2 `variable.py`
* 중요한 의미를 갖는 부분들을 따로 출력
```py
# 실습2
print('안녕! 나는', '지구인', '이야. 나는 다리가', 4, '개 있어.')
```
* print 함수는 쉼표로 여러 값을 분리해 넣으면 하나씩 출력해준다.
* 숫자는 사람과 컴퓨터가 모두 이해할 수 있는 값이기 때문에 따옴표를 쓰지 않아도 괜찮다.
### 결과값
```
안녕! 나는 지구인 이야. 나는 다리가 4 개 있어.
```
## 실습3 `variable.py`
```py
# 실습3
identity = '지구인'
number_of_legs = 4
print('안녕! 나는', identity, '이야. 나는 다리가', number_of_legs, '개 있어.')
```
* identity, number_of_legs는 변수를 의미
### 결과값
```
안녕! 나는 지구인 이야. 나는 다리가 4 개 있어.
```
## 실습4 `variable.py`
```py
# 실습4
identity = '지구인'
number_of_legs = 4
print('안녕! 나는', identity, '이야. 나는 다리가', number_of_legs, '개 있어.')
identity = '한국인'
number_of_legs = 2
print('안녕! 나는', identity, '이야. 나는 다리가', number_of_legs, '개 있어.')
```
* 같은 코드로도 내가 원하는 비슷한 인사를 여러 개 만들 수 있다.
* 프로그래밍언어에서(특히 파이썬에서) 등호(=)는 '항상 같다'는 뜻이 아니라 '**왼쪽의 이름이 오른쪽의 값을 표시한다**'는 뜻
### 결과값
```
안녕! 나는 지구인 이야. 나는 다리가 4 개 있어.
안녕! 나는 한국인 이야. 나는 다리가 2 개 있어.
```

# 주석
코드는 가끔 사람이 이해할 수 있는 말에 가깝기도 하지만, 대부분은 컴퓨터를 위한 말이다.  
잘 모르는 코드 옆에는 메모를 남겨두면 공부하는데 도움이 되고,  
어려운 코드 옆에는 설명을 적어두면 나중에 그 코드를 다시 보는데 도움이 된다.

대부분의 프로그래밍 언어에서는 그런 역할로 사람이 쓸 수 있는 말을 적을 수 있는 방법이 있다.  
파이썬에서는 샾(`#`) 문자를 쓰면 된다.  
샾을 쓰면 프로그래밍 언어가 무시하는 문자가 된다.  

주석은 코드를 임시로 작동하지 않도록 꺼두는 역할도 한다  
코드를 짜다 보면 임시로 다른 코드를 써보거나  
테스트하던  코드를 잠시 빼놓고 싶을 때가 있다.  
이럴때 코드는 코드를 지울 필요 없이 코드를 꺼둘 수 있다.

여러 줄을 한번에 주석화 할 때는 따옴표 3개(`"""`)로 둘러 싼다
## 실습 `comment.py`
```py
# 코드는 가끔 사람이 이해할 수 있는 말에 가깝기도 하지만, 대부분은 컴퓨터를 위한 말
# 잘 모르는 코드 옆에는 메모를 남겨두면  공부하는데 도움이 되고,
# 어려운 코드 옆에는 설명을 적어두면 나중에 그 코드를 다시 보는데 도움이 된다.

identity = '지구인' # 정체 1
number_of_legs = 4 # 다리의 수
#                    이렇게    여러  개를           쉽표로         입력한다!
print('안녕! 나는', identity, '이야. 나는 다리가', number_of_legs, '개 있어.')

#identity = '한국인'
#number_of_legs = 2
#print('안녕! 나는', identity, '이야. 나는 다리가', number_of_legs, '개 있어.')
```
## 주석 요약정리
* 코드를 설명하기 위해 코드에 적어 놓은 프로그래밍 언어가 무시하는 문자
* 코드를 임시로 작동하도록 꺼 두기 위해서도 사용
* #을 쓰고 그 오른쪽에 주석을 입력
* 여러줄을 주석으로 처리하고 싶을 때는 따옴표 """로 그 내용을 둘러싼다.


# 숫자와 문자열
## 숫자
* 변수에 숫자를 넣는 예
  * `my_age = 25`
* 숫자는 계산이 가능(사칙연산, 제곱연산)
  * 더하기 `+`
    * `my_next_age = my_age + 1`
  * 곱하기 `*`
    * `multiply = 9 * 9`
  * 나누기 `/`
    * `divide = 30 / 5`
  * 거듭제곱 `**` 
    * 예. 2의 10승
    * `power = 2 ** 10`
  * 나머지 `%`
    * `remainder = 15 % 4`
    * 15를 4로 나눈 다음의 나머지 = 3
## 문자열
* 따옴표(`''`)로 감싸진 글
* 변수에 문자열을 넣는 예
  * `my_name = 'Python'`
* 텍스트 두개를 더하면 문자열이 이어붙여짐
  * `text = '2015' + '1991'`하고 나면 text에는 '20151991'이라는 값이 저장
* 텍스트는 더하기만 가능하고, 빼기(`-`)등 다른 계산은 불가능

## 실습 `number.py`
```py
my_name = 'Python' # 문자열 (사람을 위한 텍스트를 프로그래머가 부르는 방법)
my_age = 25 # 숫자
print(my_name, '은 이제', my_age, '살')

#my_next_age = 26
my_next_age = my_age + 1
print('내년에는', my_next_age, '살')

#사칙연산
multiply = 9 * 9 # = 81
divide = 30 / 5 # = 6.0
power = 2 ** 10 # = 1024
reminder = 15 % 4 # = 3

print(multiply, divide, power, reminder)

# 문자열과 숫자의 더하기 비교
text = '2015' + '1991'
number = 2015 + 1991

print(text)
print(number)

# 문자열은 빼기가 안된다.
#text_minus = text - '1991' # ??
```

# REPL
* Powershell, cmd, bash와 같은 Terminal에서 파일 이름 없이 `py`이라고만 입력하면 나오는 창
* 파이썬 코드를 한 줄씩 입력해 가면서 테스트 해 볼 수 있는 입력창(간단한 숫자계산)
* REPL창을 종료하려면 exit()라고 입력

## 실습 - powershell
```powershell
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\Junha> py
Python 3.9.5 (tags/v3.9.5:0a7dcbd, May  3 2021, 17:27:52) [MSC v.1928 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> a = 10
>>> print(a)
10
>>>
>>> 10 + 20
30
>>> 'a' + 'b'
'ab'
>>> 'a' - 'b'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for -: 'str' and 'str'
>>> 'a' * 'b'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can't multiply sequence by non-int of type 'str'
>>> 'a' * 10
'aaaaaaaaaa'
>>> 33000 / 4
8250.0
>>>
>>> exit
Use exit() or Ctrl-Z plus Return to exit
>>> exit()
```

# Shell 사용법
## Shell 이란?
* 윈도우, 리눅스, 맥과 같은 운영체제가 우리와 같은 사용자와 소통하는 방법
* 흔히 마우스로 폴더를 열고 파일을 더블클릭해서 여는 화면이 바로 눈에 그림으로 보이고 마우스로 조작할 수 있는 그래픽 쉘(Graphic Shell)
* 한편 파이썬 실행에 쓰는 까만 화면에 텍스트가 나오는 화면은 명령줄 쉘 또는 Command Line Shell이라고 한다.
* 그래픽 쉘과 명령줄 쉘은 할 수 있는 기능은 거의 똑같은데 어떤 일을 얼마나 더 편리하게 할 수 있냐에 따라서 조금 차이가 있다.
  * 파이썬을 쓸 때는 명령줄 쉘이 더 편하다
## Shell의 필수 기능 5가지(명령어)
1. `pwd`
   * Print Working Directory
   * 현재 폴더 경로 출력 (명령줄 쉘에서는 폴더를 항상 디렉토리라고 한다.) 
2. `ls`
   * List Segments
   * 현재 폴더안의 파일과 폴더 출력
3. `cd`
   * Change Directory
   * 다른 폴더로 이동(그래픽 쉘에서 더블클릭과 똑같다)
   * `cd ..` 바로 위의 폴더로 이동
4. `cp`
   * CoPy
   * 파일을 다른 이름으로 복사
   * `cp .\test.py .\test2.py`
5. `rm`
   * ReMove
   * 파일 삭제
   * `re .\test2.py`  
   * 주의! '휴지통으로 가지 않고 바로 지워진다.'
* tip) 탭키
  * 파일이름 첫 두 글자만 쓰고 `tab키`를 누르면 자동완성 기능을 사용할 수 있다.
## Shell 요약정리
### Shell 명령어
* pwd: 현재 폴더 경로 출력
* ls: 현재 폴더 내용물 출력
* cd <폴더명>: 다른 폴더로 이동
  * cd .. : 상위 폴더로 이동
* cp: 파일을 다른 이름으로 복사
* rm: 파일을 삭제
### 파일이름 자동완성
* 파일 이름을 입력할때는 앞 1~2글자만 입력하고 tab키를 누르면 자동 완성되는 기능