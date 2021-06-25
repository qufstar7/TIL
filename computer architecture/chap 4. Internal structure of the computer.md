- [The secret life of programming](#the-secret-life-of-programming)
  * [**1. Memory**](#--1-memory--)
  * [**2. Input and output**](#--2-input-and-output--)
  * [**3. Central Processing Unit**](#--3-central-processing-unit--)
    + [**3-1. Arithmetic logic device**](#--3-1-arithmetic-logic-device--)
    + [**3-2. Shift**](#--3-2-shift--)
    + [**3-3. Execution unit**](#--3-3-execution-unit--)
  * [**4. Instruction set**](#--4-instruction-set--)
    + [**4-1. Instruction**](#--4-1-instruction--)
    + [**4-2. Addressing mode**](#--4-2-addressing-mode--)
    + [**4-3. Conditional code Instruction**](#--4-3-conditional-code-instruction--)
    + [**4-4. Branch Instruction**](#--4-4-branch-instruction--)
    + [**4-5. Final Instruction set configuration**](#--4-5-final-instruction-set-configuration--)
  * [**5. Final Design**](#--5-final-design--)
    + [**5-1. Instruction register**](#--5-1-instruction-register--)
    + [**5-2. Data path and control signals**](#--5-2-data-path-and-control-signals--)
    + [**5-3. Data flow control**](#--5-3-data-flow-control--)
  * [**6. RISC and CISC Instruction Set**](#--6-risc-and-cisc-instruction-set--)
  * [**7. GPU**](#--7-gpu--)
  * [**chapter 4 정리**](#--chapter-4-----)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# The secret life of programming 
 **Chapter 4. Internal structure of the computer**

- How computer hardward is structured
    - How to organize a computer using logic and memory
    - Different implementation methodologies
- modern computer's 3 parts
  1. memory
  2. I/O
  3. CPU


*** 
***
## **1. Memory**
    컴퓨터가 메모리를 어떻게 사용할까
        - 메모리는 집이 빈틈없이 늘어선 거리와 같다.
        - 모든 집은 크기가 똑같고 모든 집에는 정해진 개수만큼 비트를 저장할 수 있는 방이 있다.
        - 각 집에는 **주소(adress)**가 부여된다.

* 메모리 위치 : 구체적인 주소에 있는 메모리를 가리킬 때
* 메모리 구성
  * 32비트 컴퓨터 - 4 바이트 덩어리 (4차선)
  * 64비트 컴퓨터 - 8 바이트 덩어리 (8차선)
* 긴 워드의 주소 지정 방법
  * 포플렉스, 듀플렉스
  * 긴 워드 주소 > 워드 주소 > 바이트 주소
* 메모리 도로 (고속도로, 거리) (예시 - 32비트 컴퓨터)
  * 바이트마다 각기 다른 차선
  * 긴 워드는 도로 전체를 사용 
  * 좌석이 4개인 버스, 버스 좌석은 차선마다 하나씩
  * 오직 한 건물에만 정차해 비트를 태워서 도심으로 돌아온다
* **정렬이 맞지 않는 접근 방식(nonaligned access)** : 한 번에 두 건물에 걸쳐 있는 데이터를 읽는 경우
* 다양한 메모리의 **가성비**
  * 가격/성능 비율(price/performance ratio)
  * SRAM - 고속도로 : 빠르고 비싸다
  * 디스크 - 비포장도로 : 느리고 싸다
* **엔디안(endian)**
  * 도심을 오가는 버스의 각 자리에 누가 앉을까(0123? or 3210?)
  * 사용하는 프로세서에 따라 다르다 (리틀 엔디안[3, 2, 1, 0], 빅엔디안[0, 1, 2, 3])
  * 인텔 - 0번 바이트가 가장 오른쪽 VS 모토로라 - 0번 바이트가 가장 왼쪽 


***
## **2. Input and output**
    컴퓨터에 정보를 전달(**입력input**), 컴퓨터에서 정보를 가져옴(**출력output**) - I/O

* **I/O 장치** : I/O에 연결되는 장치, 컴퓨터 주변부에 위치 (**주변장치(peripheral)**)
* I/O 도로
  * I/O 처리를 위한 별도의 도로 (메모리 도로와 비슷)
  * 과거에는 I/O 도로와 메모리 도로를 분리
  * 요즘에는 메모리 거리 중 일부를 I/O 장치에 할당 (빈 주소가 많아져서)
* **슬롯(slot)**
  * 설계상 표준 I/O 슬롯이 있어서 일관된 방식으로 I/O 장치를 연결할 수 있다.
  * 과거 서부시대 땅 분배 방법 - 아무도 사용하지 않는 영역을 몇몇 사용 허가된 지역으로 나누고 각 슬롯을 차지한 장치는 자신에게 할당된 주소를 모두 사용 가능. (인구 조사용 특별 주소 : 도심에서 각 슬롯에 어떤 장치가 연결됐는지 파악)


***
## **3. Central Processing Unit**
    중앙 처리 장치(CPU)는 실제 계산을 처리하는 컴퓨터 부품 - 도심
    다른 모든 요소는 CPU를 지원하는 역할 

### **3-1. Arithmetic logic device**
ALU 산술 논리 장치는 CPU의 핵심 부품
산술 계산, 불리언 대수 및 기타 연산을 수행하는 방법을 알고 있는 장치

- ALU 다이어 그램
  - 피연산자 : 수를 표현하는 비트
  - 연산코드 (명령코드) : 피연산자에 대해 ALU가 어떤 연산자를 적용할지 지정
  - 결과 : 피연산자에 연산자를 적용한 결과
  - 조건 코드 : 결과에 대한 추가 정보
- 조건 코드 레지스터 : 조건 코드가 저장되는 레지스터 (메모리 도로가 아닌 다른 곳에 존재하는 메모리)
  - N 비트 - 마지막으로 수행한 연산 결과가 음수인 경우 1로 설정
  - Z 비트 - 마지막 연산 결과가 0인 경우 1로 설정
  - O 비트 - 마지막 연산에서 오버플로나 언더플로가 생긴 경우 1로 설정
- ALU 명령코드 예제
  - 명령코드 종류 0000~1111
    - 0110, 0111, 1111 은 미사용
    - 명령코드|니모닉(mnemonic)|설명
    - 0000|clr            | (clear) : 모두 0으로

명령코드|니모닉|설명
---------|----------|-----------
0000|clr|clear 모든 비트 0으로
0001|set|set 모든 비트 1로
0010|shl|A를 B의 하위 4비트값만큼 왼쪽으로 shift
0011|not|B는 무시, A비트 중 0은 1로 1은 0으로
0100|neg|B는 무시, A의 2의 보수인 -A가 결과
0101|shr|A를 B의 하위 4비트값만큼 오른쪽으로 shift
0110||미사용
0111||미사용
1000|load|피연산자 B가 결과
1001|and|A AND B
1010|or|A OR B
1011|xor|A XOR B
1100|add|A + B
1101|sub|A - B
1110|cmp|B - A를 계산해서 조건 코드를 설정
1111||미사용

    * ALU는 셀렉터와 논리 게이트를 연결한 것 뿐
    * 일반적인 ALU 설계(간략화)
    ![image/ALU%20design.png](image/ALU%20design.png)
     **<ALU의 내부(일부분)>**
     
### **3-2. Shift**
* 왼쪽 시프트 
  * 어떤 숫자의 모든 비트를 왼쪽으로 1비트씩 옮기고, 맨 왼쪽 비트는 버리고 비게 되는 가장 오른쪽 비트에 0을 넣는다.
  * 그 수에 2를 곱한 것과 같다.
* 오른쪽 시프트 
  * 어떤 숫자의 모든 비트를 오른쪽으로 1비트씩 옮기고, 맨 오른쪽 비트는 버리고 비게 되는 가장 왼쪽 비트에 0을 넣는다. 
  * 그 수를 2로 나누고 나머지를 버리는 것과 같다.
* MSB(가장왼쪽비트), LSB(가장오른쪽비트)값, 조건 레지스터에 저장
* CPU에서 O비트에 저장한다고 가정

* ALU의 모든 기능은 조합논리로 구현가능(shift제외)
* **시프트레지스터**
  * 클록에 따라 플립플롭을 사용해 만들 수 있다.
* **배럴시프터**
  * 셀렉터, 조합논리 사용(기본빌딩블록)
* 조합 논리 곱셈기
  * 배럴 시프터와 가산기를 조합
* 시프터는 부동 소수점 연산을 구현할 때도 핵심 부품 

### **3-3. Execution unit**
실행장치(execution unit) = 제어장치(control unit) 
* **실행장치**
  * ALU에게 할 일을 알려준다.
  * 결과를 메모리에 돌려준다.
* **프로그램 저장 방식 컴퓨터**
  * 메모리에서 명령어를 찾아 실행되는 컴퓨터
* **명령어**(instruction)
  * 컴퓨터에게 어떤 일을 할지 알려주는 비트 패턴
  * CPU마다 다르다 (공통표준x)
* **프로그램 카운터**(PC)
  * 실행 장치가 메모리에서 명령어를 가져와야 하는 위치를 알려 주는 도구
  * 일종의 큰 화살표, 우편배달부
  * 레지트서에 카운터 기능이 추가된 것
  * 메모리 주소가 들어 있어 메모리 위치를 가리킴.(**참조reference**)
  * CPU마다 초기 PC값이 있고 CPU전원이 들어오면 PC는 이 값으로 설정됨
* 마치 보물 찾기 처럼 컴퓨터는 메모리의 정해진 위치에서 쪽지를 찾고 쪽지에는 어떤 일을 해야 하는지 적혀 있다. 컴퓨터는 다른 장소로 이동해 다음 쪽지를 찾는다. 이런 과정을 반복하면서 프로그램을 실행한다.



***
## **4. Instruction set**
    **명령어** : CPU가 인식해서 기능을 이해하고 실행할 수 있는 기계어 명령어, CPU마다 다르다. 
      - 어셈블리어 : 기계어와 일대일로 문자화 한 것.
     
    3주소 명령어 > 레지스터 추가 > 누산기 >  저장 명령어 추가 > 3주소 명령어 > 
    ... > 간접 주소 지정을 추가 > 즉시 주소 지정 모드 추가 > acc 명령어 추가 > 
* 명령어의 종류
* 명령어에 어떤 비트 패턴 선택

### **4-1. Instruction**
* 주소확장 레지스터 
  * 인텔 - PAE (물리 주소 확장)
* 누산기

### **4-2. Addressing mode**
주소 지정 모드
* **직접 주소 지정 모드**
  * 명령어에 직접 사용할 주소가 들어가 있음.(사용 가능한 주소가 충분하지 않다.)
  * 메모리에 두 번 접근(명령어, 메모리 데이터). 느리다
* **간접 주소 지정 모드**
  * CPU는 명령어에 들어 있는 값을 피연산자 주소로 해석하지 않고, 피연산자 주소를 얻을 수 있는 메모리 위치를 가리키는 주소로 활용
  * 더 많은 메모리를 사용
  * 메모리에 세 번 접근(명령어, 메모리 주소, 메모리 데이터). 더 느리다.
* **즉시 주소 지정 모드**
  * 상수를 지정해야 할 때 (10까지 숫자를 세려명 10이라는 상수를 누산기에 넣을 방법이 필요)
  * 주소에 해당하는 비트를 그냥 값으로 간주. 빠르다.
  * 주소는 지정하지는 않는다
  * '주소 지정 모드' 중에서 주소를 지정하지 않고 직접 값을 지정하는 일종의 '즉시 모드'

### **4-3. Conditional code Instruction**
조건 코드 명령어
  - 덧셈 뺄셈 비교 연산에서 조건 코드가 설정된다.
  - 조건 코드를 원하는 값으로 설정하거나, 조건 코드의 값을 살펴볼 수 있는 방법이 필요
  1. cca명령어 : 조건 코드 레지스터의 값을 누산기로 복사
  2. acc명령어 : 누산기의 값을 조건 코드 레지스터에 복사
   
### **4-4. Branch Instruction**
분기 명령어
* 프로그램 카운터의 값을 변경할 수 있는 명령어
* 조건 코드를 살펴보고 조건을 만족할 때만 분기하는 명령어도 있다.
* 조건을 저장하기 위한 비트가 필요
  * 분기 명령어 조건
    코드|니모닉|설명
    ----|-----|----
    000|bra|항상 분기
    001|bov|O(오버플로) 조건 비트가 1일 때 분기
    010|beq|Z(영) 조건 비트가 1일 때 분기
    011|bne|Z(영) 조건 비트가 0일 때 분기
    100|bit|N(음수) 조건 비트가 1이고 Z(영) 비트가 0일 때 분기
    101|ble|N(음수)과 Z(영) 비트 모두 1일 때 분기
    110|bgt|N(음수)과 Z(영) 비트 모두 0일 때 분기
    111|bge|N(음수) 비트가 0이고 Z(영) 비트가 1일 때 분기

* pca 명령어 : 프로그램 카운터의 값을 누산기에 복사
* apc 명령어 : 누산기의 값을 프로그램 카운터에 복사

### **4-5. Final Instruction set configuration**
최종 명령어 집합 구성
* 주소 지정 모드 선택을 위해 2비트가 필요(주소 지정 모드 세 가지, 네 번째는 메모리와 관계없는 연산을 표현)
* 프로그램
  * 어떤 목표를 달성하는 일련의 명령어
  * 프로그램의 순서도 > 명령어 필드 구분 > 기계어 프로그램
  * 주소값(10진수), 주소와 명령어(2진수)
  * 예시) 200보다 작은 모든 피보나치수를 계산하는 프로그램


***
## **5. Final Design**
    마지막 설계
    * 실제 컴퓨터로 만드는 단계 - 여러 부분이 함께 작동하기 위한 일종의 '접착제' 필요

### **5-1. Instruction register**
**명령어 레지스터**
* 명령어 실행 단계 (페치-실행 사이클 : 일종의 상태 기계)
  1. fetch 페치 : 메모리에서 명령어를 가져온다.
  2. 명령어 실행(메모리에 접근 - 다른 목적으로 메모리를 사용할 때 페치한 명령어에 편하게 접근 할 수 있도록 저장할 다른 위치가 필요)
  * 저장할 다른위치 : 명령어 레지스터 - CPU에 명령어 레지스터를 추가해 현재 실행 중인 명령어 저장

### **5-2. Data path and control signals**
데이터 경로와 제어 신호
* 프로그램 카운터의 값을 메모리 주소 버스에 넣을 방법, 메모리에 있는 데이터를 명령어 레지스터로 넣을 방법 필요
  * 레지스터, 셀렉터, ALU, 트라이스테이트 버퍼를 연결한 개념도
    * 주소 셀렉터 : 3방향 교차로
    * 데이터 셀렉터 : 4방향 교차로
    * 데이터 버스나 주소버스 한쪽에 I/O장치 연결
    * 간접 주소 레지스터 : 간접 주소 지정 사용 시 메모리에서 읽어온 주소를 저장

### **5-3. Data flow control**
데이터 흐름 제어 : 교통을 제어하는 장치 
  * **fetch(페치)** : 명령어를 처리
    * 필요한 신호(3)
      * address source는 프로그램 카운터를 선택
      * 메모리를 실행, 읽기로 설정
      * 명령어 레지스터 실행 
    * 간접 주소 지정 페치
  * 랜덤 논리로 이뤄진 교통 제어 회로  
  * 메모리를 사용한 교통 제어 - 마이크로코드(메모리 내의 내용) 사용
    * 마이크로명령어
  * 마이크로 코드 메모리 - ROM
  * 쓰기가능한 제어 저장소 - RAM


***
## **6. RISC and CISC Instruction Set**
    명령어 집합 컴퓨터의 종류 : RISC, CISC
* **RISC(reduced instruction set computer)** : 자주 쓰는 명령어만을 포함, 복잡한 명령어를 단순한 명령어를 조합해 처리
  * 적재-저장 구조(load-store structure) : 메모리와 레지스터를 오가는 명령어들과 레지스터 간 명령어로만 이뤄진 구조 - 명령어 나누어 단순화, 따라서 설계 간단, 실행속도 빨라짐.
* **CISC(complicated instruction set computer)** : 기존 설계방식(복잡한 컴퓨터 제어 회로, 복잡한 명령어)
  * DEC(digital equipment corporation)사의 PDP-11
    * 범용 레지스터 8개(ALU 역할)
    * 자동증가, 자동감소 주소 지정 모드 지원 - 몇 가지 프로그램에 아주 효율적
    * C 언어가 처음 만들어진 곳 - 포인터(간접 주소 지정 추상화) >>> c++, java, javascript에 영향
* 복잡한 RISC - 최근의 RISC, 새로운 명령어를 RISC 기계에 추가. 오래전의 CISC기계보다 복잡. 


***
## **7. GPU**
    그래픽 처리 장치 (graphics processing unit) 
    컴퓨터를 사용한 그래픽은 메모리에 매초 수억 번이상 접근해야 한다.
  * GPU 특징 (2)
    1. GPU에는 간단한 처리 장치가 아주 많이 들어있다.
    2. GPU는 CPU보다 메모리 버스의 폭이 더 넓다. - 메모리에 더 빠르게 접근

GPU의 활용 
  * 공학 계산 , 인공 지능
  * 비트 코인 채굴


***
## **chapter 4 정리**
여러 요소들을 활용해 실제 컴퓨터를 만들 수 있다.
설계한 기계는 실제로 IC나 게이트를 활용해 만들 수 있고 프로그래밍이 가능하다.
1. Memory
2. I/O
3. CPU
   1. ALU
   2. Shift
   3. Execution unit
4. Instruction set
   1. Instruction
   2. Addressing mode
   3. Conditional code Instruction
   4. Branch Instruction
   5. Final Instruction set configuration
5. Final design
   1. Instruction register
   2. Data flow and Control signal
   3. Data flow control
6. RISC and CISC instruction set
7. GPU