- [The secret life of programming](#the-secret-life-of-programming)
  - [**1. 언어란 무엇인가**](#1-언어란-무엇인가)
  - [**2. 문자 언어**](#2-문자-언어)
  - [**3. 비트**](#3-비트)
  - [**4. 논리 연산**](#4-논리-연산)
  - [4-1. 불리언 대수](#4-1-불리언-대수)
  - [4-2. 진리표(truth table)](#4-2-진리표truth-table)
  - [4-3. 드모르간의 법칙](#4-3-드모르간의-법칙)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# The secret life of programming 
 **Chapter 1. Language system inside the computer (2)**
- What language does the computer use
***
***
## **1. 언어란 무엇인가**

언어는 개념을 전달하는 의사소통 도구이다. 모든 언어의 뜻은 기호의 집합으로 인코딩된다. 언어를 사용함에 혼동이 없으려면 모두 같은 문맥을 공유해서 같은 기호에 같은 뜻을 부여할 수 있어야 한다. 언제나 문맥을 명확히 식별할 수 없기 때문에 문제가 발생한다.

***
## **2. 문자 언어**

문자 언어는 기호를 나열한 것이다.  
문자 언어의 틀

- 기호가 들어갈 상자
- 상자에 들어갈 기호
- 상자의 순서

***
## **3. 비트**

상자는 무엇을 의미할까

자연어 - 문자

컴퓨터 - 비트

비트는 적은 비용으로 편리하게 기호를 담을 수 있다. 비트는 2진법을 사용한다.

비트에 의미를 부여하는 일반적인 방법은 무엇인가 - '척하기'

***
## **4. 논리 연산**

비트 사용법 중 하나는 예/아니요 질문에 대한 답을 표현하는 것.

논리연산은 다른 비트들이 표현하는 내용으로부터 새로운 비트를 만들어내는 동작

## 4-1. 불리언 대수

대수가 수에 대한 연산규칙의 집합인 것처럼 불리언 대수도 비트에 대해 사용할 수 있는 연산 규칙의 집합. 결합, 교환, 분배 법칙 적용가능하다.

기본적인 불리언 연산자 : NOT, AND, OR + XOR

- NOT : 논리적 반대. 거짓→참, 참→거짓 NOT연산의 결과는 반대
- AND : 둘 이상의 비트에 작용. 2개 또는 모든 비트가 참이면 AND연산의 결과는 참
- OR : 둘 또는 모든 비트중 어느 한 비트라도 참이면 OR연산의 결과는 참
- XOR : 배타적 OR연산. 첫 번쨰 비트와 두 번째 비트가 다른 값인 경우에만 연산의 결과는 참

## 4-2. 진리표(truth table)

입력은 박스의 밖, 출력은 박스의 안

a XOR b연산은 (a OR b) AND (a AND b)와 같다.

![image/truthtable.png](image/truthtable.png)

## 4-3. 드모르간의 법칙

드모르간의 법칙은 수리 논리학이나 집합론에서 논리곱, 논리합, 부정 연산간의 관계를 기술하여 정리한 것이다. 논리회로에서 응용되기도 한다.
불리언 대수에 적용할 수 있는 법칙

"a AND b 은 NOT(NOT a OR NOT b)와 같다." (이중부정 = AND)

드모르간의 법칙 진리표

![image/De%20Morgan%20truthtable.png](image/De%20Morgan%20truthtable.png)

NOT을 이용해 AND연산과 OR연산은 서로를 대신할 수 있다.

드모르간의 법칙을 이용해 여러가지 경로로 연산을 수행할 수 있다.
