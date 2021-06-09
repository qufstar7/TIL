>> 생활코딩 JAVA-제어문의 학습, 정리한 내용입니다. (https://opentutorials.org/course/3975)
# Java flow control
  **자바 제어문**

- 흐름 제어
    - Boolean 
    - 비교연산자
    - 조건문
    - 논리연산자
    - 반복문
    - 배열

# 목차
* chapter 1 ~ chapter n
    1. Boolean
    2. 비교 연산자
    3. 조건문 형식
    4. 조건문 응용
    5. == vs equals
    6. 논리 연산자
    7. 반복문
    8. 배열
    9. 반복문+배열
    10. 종합응용 1
    11. 종합응용 2


# 수업소개

2021년 4월 10일 토요일
오후 11:55

## 프로그래밍과 흐름 제어
* 프로그래밍은 시간에 흐름에 따라서 프로그램이 동작하도록 하는 것.
* 하지만 사람의 동작에 따라서 프로그램의 작동이 달라져야 하는 상황(id, password 등 상호작용)일 때 조건문, 반복문을 사용
### 자바 프로그래밍 중력 제어
* 프로그래밍이 물이 흐르도록 하는 중력이라면 조건문, 반복문은 댐, 수문
* 이 댐을 동작시키기 위해 알아야 할 것들 : boolean, 비교연산자 
* 더 좋은 것과 더 나쁜 것을 판단하는 것 : 비교.
* 논리학의 위대한 성취인 boolean.
* boolean datatype을 만들어내는 유일한 연산자인 비교 연산자
* 교차로와 같은 조건문
* 순환도로라고 할 수 있는 반복문
* 위의 요소들을 사용해 변화 무쌍한 모습의 똑똑한 애플리케이션을 만들 수 있다.


# Boolean Datatype

2021년 4월 10일 토요일
오후 11:59

## true와 false
* 자바에서 true 와 false 는 boolean 타입에 속하는 단 2가지 데이터
* true 와 false 는 변수의 이름으로 사용할 수 없다.(reserved word : 이미 어떠한 쓰임이 있거나 앞으로 쓰일 가능성이 있는 문자)

### 실습
```java
public class BooleanApp {

	public static void main(String[] args) {
		System.out.println("One"); //string
		System.out.println(1); //integer
		
		System.out.println(true); //boolean
		System.out.println(false); //boolean

		String foo = "Hello world";
		// String true = "Hello world";   reserved word
		
		System.out.println(foo.contains("world"));
		System.out.println(foo.contains("egoing"));
	}
}
```
### 결과
```
One
1
true
false
true
false
```


# 비교연산자

2021년 4월 10일 토요일
오후 11:59

### 숫자를 계산하는 산술연산자
### 문자열을 더하는 결합연산자
### 양쪽을 비교하는 비교연산자
* 왼쪽 오른쪽을 비교해서 결과가 참이면 true, 거짓이면 false를 만들어내는 연산자

```java
System.out.println(1 > 1); //false
System.out.println(1 == 1); //true
System.out.println(1 < 1); //false
System.out.println(1 >= 1); //true	
```

### 연산자 요약
* 단순 할당 연산자(Simple Assignment Operator) 
  * `=` 단순 할당 연산자
* 산술 연산자(Arithmetic Operators)
  * `+` 더하기(문자열 연결로도 사용)
  * `-` 빼기
  * `*` 곱셈
  * `/` 몫
  * `%` 나머지
* 단항 연산자(Unary Operators)
  * `+` 단항 더하기
  * `-` 단항 나누기 
  * `++` 증가
  * `--` 감소
  * `!` 논리 보완 연산자 (블리언 반대로)
* 평등 및 관계 연산자(Equality and Relational Operators)
  * `==` 같다
  * `!=` 같지 않다
  * `>` 크다
  * `>=` 크거나 같다
  * `<` 작다
  * `<=` 작거나 같다
* 조건부 연산자(Conditional Operators)
  * `&&` AND 그리고
  * `||` OR 또한
  * `?:` 삼항연산자 if-then-else문 요약
* 유형 비교 연산자(Type Comparison Operator)
  *	`instanceof` 개체를 지정된 유형과 비교합니다.
* 비트 및 비트 시프트 연산자 (Bitwise and Bit Shift Operators)
  * `~` 단항 비트 보완
  * `<<` 서명된 왼쪽 시프트
  * `>>` 서명된 오른쪽 시프트
  * `>>>` 부호없는 오른쪽 시프트
  * `&` 비트 AND
  * `^` 비트간 배타적 논리합 (XOR)
  * `|` 비트 포함 OR

>[Operators - Oracle Docs](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/opsummary.html)






조건문 형식

2021년 4월 10일 토요일
오후 11:59

Conditional Statement 참이면 {코드}실행 거짓이면 {코드}실행x

if(조건) {
	(참일 때 실행할 코드)
}

if(조건1) {
	(조건1이 참일 때 실행할 코드)
} else if (조건2) {
	(조건1이 거짓이고 조건2가 참일 때 실행할 코드)
} else {
	(조건1, 2가 거짓일 때 실행할 코드)
}

조건문 응용

2021년 4월 11일 일요일
오전 12:00

Auth 인증
로그인 같은 행동 후에 인증하는 과정
egoing > hi
else > who are u

run confuguration > argument [0] egoing

		System.out.println(args[0]);
		String id = "egoing";
		String inputId = args[0];
		
		System.out.println("hi");
		

	if (inputId.equals(id) && inputPass.equals(pass)) {
		System.out.println("Master!");
	} else {
		System.out.println("WHO ARE U?");
	}




== vs equals

2021년 4월 11일 일요일
오전 12:00


primitive 원시 데이터 타입 - 블리언 정수 실수 숏 롱 플롯 캐릭터


결론 원시 데이터 타입이 아닐 떄는 ==대신  equals를 쓰자

논리 연산자

2021년 4월 11일 일요일
오전 12:00

		// AND
		System.out.println(true && true); // true
		System.out.println(true && false); // false
		System.out.println(false && true); // false
		System.out.println(false && false); // false

		// OR
		System.out.println(true || true); // true
		System.out.println(true || false); // true
		System.out.println(false || true); // true
		System.out.println(false || false); // false

		// not
		System.out.println(!true); // false
		System.out.println(!false); // true
		
		
				String id = "egoing";
				String inputId = args[0];
		
				String pass = "1111";
				String pass2 = "2222";
				String inputPass = args[1];
		
				System.out.println("hi");
				
				boolean isRightPass = (inputPass.equals(pass) || inputPass.equals(pass2)) ;
				if (inputId.equals(id) && isRightPass) {
					System.out.println("Master!");
				} else {
					System.out.println("WHO ARE U?");
				}
		

반복문

2021년 4월 11일 일요일
오전 12:00

배열

2021년 4월 11일 일요일
오전 12:00

반복문+배열

2021년 4월 11일 일요일
오전 12:00

종합응용 1

2021년 4월 11일 일요일
오전 12:00

종합응용 2

2021년 4월 11일 일요일
오전 12:00
