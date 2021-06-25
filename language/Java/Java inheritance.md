>> TIL basic 양식 예시입니다. (https://opentutorials.org/course/4408)
# Java inheritance

- 상속
  - Overriding
  - Overloading
  - this
  - super
  - 생성자

# 목차

- [Java inheritance](#java-inheritance)
- [목차](#목차)
- [소개](#소개)
	- [상속](#상속)
- [기능의 개선과 발전](#기능의-개선과-발전)
	- [Overriding하면 상속받은 부모 클래스의 기능을 재정의(덮어쓰기)할 수 있다.](#overriding하면-상속받은-부모-클래스의-기능을-재정의덮어쓰기할-수-있다)
- [Overriding vs Overloading](#overriding-vs-overloading)
- [this & super](#this--super)
- [상속과 생성자](#상속과-생성자)
- [마무리](#마무리)
	- [추가학습주제](#추가학습주제)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# 소개

## 상속
* 자바에서 객체를 상속하는 방법

동일한 기능의 메소드를 가진 여러 클래스가 있다면

하나의 클래스에 기준이 되는 메소드를 저장하고

추가로 필요한 기능은 상속을 이용해서 해결하자.

상속은 클래스의 변수 메소드를 확장해서 다른 클래스가 갖도록 하는 것.

# 기능의 개선과 발전

## Overriding하면 상속받은 부모 클래스의 기능을 재정의(덮어쓰기)할 수 있다.
```java
class Cal {
	public int sum(int v1, int v2) {
		return v1 + v2;
	}
}

class Cal3 extends Cal {
	public int minus(int v1, int v2) {
		return v1 - v2;
	}	
	// Overriding
	public int sum(int v1, int v2) {
		System.out.println("Cal3!!");
		return v1 + v2;
	}
}

public class InheritanceApp {
	public static void main(String[] args) {
		Cal c = new Cal();
		System.out.println(c.sum(2, 1)); 

		Cal3 c3 = new Cal3();
		System.out.println(c3.sum(2, 1)); 
		System.out.println(c3.minus(2, 1)); 
		System.out.println(c3.sum(2, 1));
	}
}
```

Cal3 클래스 - minus 기능 추가, sum 오버라이딩(재정의)


# Overriding vs Overloading
* 메소드 오버라이딩, 은 객체 지향 프로그래밍에서 서브클래스 또는 자식 클래스가 자신의 슈퍼클래스들 또는 부모 클래스들 중 하나에 의해 이미 제공된 메소드를 특정한 형태로 구현하는 것을 제공하는 언어의 특징이다.  <재정의>

* 함수 오버로드는 다양한 에이다, C#, C++, 자바 등의 다양한 프로그래밍 언어에서 사용되는 함수의 특징으로, 같은 함수 이름을 가지고 있으나 매개변수, 리턴타입 등의 특징은 다른 여러개의 서브프로그램 생성을 가능하게 한다.

```java
class Cal {
	public int sum(int v1, int v2) {
		return v1 + v2;
	}
	// Overloading
	public int sum(int v1, int v2, int v3) {
		return v1 + v2 + v3;
	}
}

class Cal3 extends Cal {
	public int minus(int v1, int v2) {
		return v1 - v2;
	}	
	// Overriding
	public int sum(int v1, int v2) {
		System.out.println("Cal3!!");
		return v1 + v2;
	}
	
}

public class InheritanceApp {
	public static void main(String[] args) {
		Cal c = new Cal();
		System.out.println(c.sum(2, 1)); 

		Cal3 c3 = new Cal3();
		System.out.println(c3.sum(2, 1)); 
		System.out.println(c3.minus(2, 1)); 
		System.out.println(c3.sum(2, 1));
	}
}
```

# this & super

this 는 자기 자신

super 는 자신의 부모

***

```java
class Cal {
	public int sum(int v1, int v2) {
		return v1 + v2;
	}
	// Overloading
	public int sum(int v1, int v2, int v3) {
	//return v1 + v2 + v3;
		return this.sum(v1, v2) + v3;
	}
}

class Cal3 extends Cal {
	public int minus(int v1, int v2) {
		return v1 - v2;
	}	
	// Overriding
	public int sum(int v1, int v2) {
		System.out.println("Cal3!!");
	//return v1 + v2;
		return super.sum(v1,v2);
	}
	
}

public class InheritanceApp {
	public static void main(String[] args) {
		Cal c = new Cal();
		System.out.println(c.sum(2, 1)); 

		Cal3 c3 = new Cal3();
		System.out.println(c3.sum(2, 1)); 
		System.out.println(c3.minus(2, 1)); 
		System.out.println(c3.sum(2, 1));
	}
}
```


# 상속과 생성자

생성자가 있는 클래스를 상속받았다면 생성자를 만들어서 부모클래스를 반드시 호출해야 된다.

```java
class Cal {
	int v1, v2;
	Cal(int v1, int v2) {
		System.out.println("Cal init!!");
		this.v1 = v1;
		this.v2 = v2;
	}
	public int sum() { return this.v1 + v2;	}
}

class Cal3 extends Cal {
	Cal3(int v1, int v2) {
		super(v1, v2); // 부모클래스 Cal의 생성자를 실행시킨다.
		System.out.println("Cal3 init!");
	}
	public int minus() { return this.v1 - v2;	}
}

public class InheritanceApp {
	public static void main(String[] args) {
		Cal c = new Cal(2, 1);
		Cal3 c3 = new Cal3(2, 1);
		System.out.println(c3.sum()); // 3
		System.out.println(c3.minus()); // 1
	}
}
```

# 마무리

## 추가학습주제
이름|설명
---|---
Polymorphism 다형성|상속을 하면 기능이 급격하게 늘어나고 클래스들 간의 호환성이 떨어지게 된다. 클래스를 다른 클래스로 교체하는게 어려워진다. 이런 맥락에서 자식 클래스를 부모 클래스로써 동작하도록 규제하는 테크닉
Access Modifiers 접근제어자|사용자에게 접근 규제
Final|상속, 오버라이딩, 변수 수정x 
Abstract|특정한 메소드는 꼭 구현해라라고 강제