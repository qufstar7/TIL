based on [생활코딩](https://opentutorials.org/course/1) 

# Java
        Java complier는 자바 언어로 작성된 프로그램을 바이트코드라는 특수한 바이너리 형태로 변환한다.
        바이트 코드를 실행하기 위해서는 JVM이 필요하다.
### complier
    컴파일러 : 프로그래밍 언어 번역 프로그램
* 소스코드(원시코드) to 목적코드(다른 프로그래밍 언어 또는 사람이 읽을 수 있는 자연어) 과정 : 컴파일
* 고수준 언어 > 저수준 언어
* cf) 인터프리터 : 소스 프로그램을 읽어서 즉시 결과를 출력
### JVM (Java Virtual Machine)
    자바 가상 머신
* 자바 바이트코드를 실행할 수 있는 주체
* 스택 기반
* 단일 상속 형태의 객체 지향 프로그래밍 구현
### Java bytecode
    바이트코드
* 자바 명령어
* 주로 1바이트로 구성
* 256개의 명령코드
### JDK (Java Development Kit)
    자바 개발 도구
* 자바 개발 키트 자바 SE, 자바 EE, 자바 ME 플랫폼 중 하나를 구현한 것
### JRE (Java Runtime Environment)
    자바 런타임 환경
* 자바 바이트코드(자바 고유 코드)를 실행
  

# 버전
* Java SE/JDK/JRE의 버전
  
* 현재 대표적인 버전 : Java SE 8, Java SE 11(추천)

* 최신 버전 : Java SE 16
  * (버전 16으로 사용하다 Swing 과의 호환 과정에서 문제가 있어 16을 지우고 11을 설치하여 사용 중)

## Java SE (Java Standard Edition)
자바 표준 에디션
* 표준적인 컴퓨팅 환경을 지원하기 위한 자바 가상 머신 규격 및 API집합

## Java Swing
* 스윙은 자바에서 GUI(Graphic User Interface)를 구현하기 위해 JDK에서 기본적으로 제공하는 개발 툴킷 (자바 기반 클래스의 일부)
* cf) AWT, SWT

## IDE(Integrated Development Environment)
* 통합 개발 환경이란 공통된 개발자 툴을 하나의 그래픽 사용자 인터페이스(GUI)로 결합하는 애플리케이션을 구축하기 위한 소프트웨어
* eclipse, intelliJ IDEA, NetBeans, etc.


# 부동소수점이란?

부동소수점 또는 떠돌이 소수점 방식은 실수를 컴퓨터상에서 근사하여 표현할 때 소수점의 위치를 고정하지 않고 그 위치를 나타내는 수를 따로 적는 것

## 자바의 부동소수점
자바에서 `float`이나 `double`형은 부동소수점방식이다.

## 부동소수점의 오류

다음 코드를 보자

```java
public class Main { // 터렛

	public static void main(String[] args) {

		double a = 0.1;
		double b = 0.2;
		double c = 0.3;

		if (a + b == c) {
			System.out.println("참");
		} else {
			System.out.println("거짓");
		}

	}

}
Console값
거짓
```

실행 결과 놀랍게도 거짓이 나온다.

모든 실수를 8byte, 혹은 12~16byte의 변수에 모두 담을 수 없기 때문이다.

실수 변수는 절대 정확한 값을 가지고 있지 않다.

## 결론
부동소수점의 오류를 피하기 위해선

1. 평등연산자 ==을 사용하는 대신 관계연산자에 의존하거나
2. BigDecimal 을 사용한다.

### 참고링크

>[https://ko.wikipedia.org/wiki/부동소수점](https://ko.wikipedia.org/wiki/%EB%B6%80%EB%8F%99%EC%86%8C%EC%88%98%EC%A0%90)

>[https://www.acmicpc.net/blog/view/37](https://www.acmicpc.net/blog/view/37)

[https://st-lab.tistory.com/90](https://st-lab.tistory.com/90)

# Switch statement

* switch문은 여러 개의 가능한 실행 경로를 가질 수 있다.

* switch는 byte, short, char, int 기본데이터타입과 작동한다.

* switch는 열거형 타입, String class, 몇몇개의 특별한 class들과 작동한다.

### 코드 예시 : 

```java
				int month = 8;
        String monthString;
        switch (month) {
            case 1:  monthString = "January";
                     break;
            case 2:  monthString = "February";
                     break;
            case 3:  monthString = "March";
                     break;
            case 4:  monthString = "April";
                     break;
            case 5:  monthString = "May";
                     break;
            case 6:  monthString = "June";
                     break;
            case 7:  monthString = "July";
                     break;
            case 8:  monthString = "August";
                     break;
            case 9:  monthString = "September";
                     break;
            case 10: monthString = "October";
                     break;
            case 11: monthString = "November";
                     break;
            case 12: monthString = "December";
                     break;
            default: monthString = "Invalid month";
                     break;
        }
        System.out.println(monthString);
```

* 위 코드는 switch문을 사용하여 month 값을 기준으로 monthString 을 표시한다.

* month = 8 이기 때문에 case 8이 적용되고 monthString 은 August가 된다.


# 생성자
- 생성자는 'new'연산자와 같이 사용된다.
- 생성자는 클래스로부터 객체를 생성할 때 호출되어 객체의 초기화를 담당한다.
- 객체 초기화란 필드를 초기화하거나, 메소드를 호출해서 객체를 사용할 준비를 하는 것이다.
- 생성자를 실행시키지 않으면 클래스로부터 객체를 만들 수 없다.
- 클래스에는 최소 한개의 생성자가 있고 선언을 생략하면 {}안에 default생성자가 자동 추가된 것.

---

### 기본 생성자 호출해서 객체를 생성

```java
class myclass = new class();
```

class()가 기본생성자

()안에는 파라미터를 선언한다 

(값, 값, 값..)

---

### 생성자를 명시적으로 선언

```java
클래스 (파라미터 선언, ..) {

//객체의 초기화 코드

}
```

생성자는 메소드와 비슷한 모양. but 리턴 타입이 없고 클래스 이름과 동일하다. 매개변수 선언은 생략가능, 여러 개 가능

클래스에 생성자가 명시적으로 선언되어 있을 경우에는 반드시 선언된 생성자를 호출해서 객체를 생성해야 한다.(파라미터 인자를 입력해서 선언된 생성자를 호출 하는 것.) 

클래스로부터 객체가 생성될 때 필드는 기본 초기값으로 자동 설정

다른 값으로 초기화 방법 2가지

1. 필드를 선언할 때 초기값을 준다.
2. 생성자에게 초기값을 준다.

***

## 생성자 사용 이유

객체 생성시점에서 제공되는 다양한 값들로 초기화가 되어야 한다면 생성자에서 초기화해야 한다. 

```java
Public class Korean{
	//field
	String country = "Republic of Korea";
	String name;
	String idnumber; 
	//counstructor
public AsiaCountries(String S, String I) {
	name = n;
	idnumber = l;	
}
```

name과  location 은 다양한 값을 가질 수 있기 때문에 생성자의 파라미터 값을 받아 초기화

각각의 파라미터 값들은 각각의 필드의 초기값으로 활용된다.

그런데 파라미터의 이름을 n과 l로 하면 우아하지 않기 때문에 초기화시킬 필드(클래스 멤버 변수)의 이름과 동일한 이름을 쓰자. 그런데 이 때 필드와 매개변수의 이름이 동일하기 때문에 생성자 내부에서 해당 필드에 접근이 안된다. 동일한 이름의 파라미터가 우선순위가 높기 때문이다. 이때 this를 쓴다

****************

## this

this는 객체 자신을 일컫는 용어로 필드 앞에 this.를 붙이는 방식으로 사용한다

```java
public Korean(String name, String idnumber) {
	this.name = name; 
	this.idnumber = idnumber;	
}
```

쉽게 설명하자면 'this.name'은 직역해서 '이것의 이름'을 지칭하는 느낌이다.

***********

## 생성자 오버로딩

다양한 정보를 이용해서 객체를 초기화 하려면(인자로 활용하려면) 생성자도 많아야 된다.

생성자 오버로딩이란 이름은 같지만 파라미터가 다른 생성자를 선언하는 것이다.

오버로딩 예시

```java
public class A {
	A() { ... }
	A(String model) { ... }
	A(String model, String color) { ... }
	A(String model, String color, int maxSpeed) { ... }
	A(String model, int maxSpeed, String color) { ... } //오버로딩 X
}
```

오버로딩 시 매개 변수의 타입과 개수 선언된 순서가 똑같은 경우 오버로딩이 아니다.

이렇게 다양한 A의 다양한 생성자를 호출할 때 파라미터에 따라서 일치하는 생성자를 호출한다.

*********

## this()

- 생성자 오버로딩이 많아지면 생성자 간 중복 코드가 발생할 수 있다.
- 파라미터의 수만 다르고 필드 초기화 내용이 비슷한 생성자에서 이런 문제가 생긴다.
- 이 떄 this()를 사용한다.
- this()를 사용해서 초기화 내용을 가지고 있는 생성자를 호출해 중복된, 비슷한 생성자를 줄인다.
- 필드 초기화의 내용을 한 생성자에 작성하고 나머지 생성자는 this()로  초기화 생성자를 호출한다.
- this()는 반드시 생성자의 첫줄에서만 허용된다.

```java
public class CarThis {
	String company = "현대차";
	String model;
	String color;
	int maxSpeed;

	//생성자
	CarThis() {		
	}

	CarThis(String model) {
		this("avante", "은색", 200);
	}

	CarThis(String model, String color) {
		this("sonata", "흰색", 300);
	}

	CarThis(String model, String color, int maxSpeed) {
		this.model = model;
		this.color = color;
		this.maxSpeed = maxSpeed;
	}

}
```

this()를 사용해서 공통 사용 코드를 호출하도록 수정해 중복 코드를 최소화 했다.