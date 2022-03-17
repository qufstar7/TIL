- [Object 클래스](#object-클래스)
  - [주요 메소드](#주요-메소드)
- [메소드 재정의](#메소드-재정의)
  - [메소드 재정의 목적](#메소드-재정의-목적)
    - [메소드 중복정의(Method overload)](#메소드-중복정의method-overload)
    - [메소드 재정의(Method override)](#메소드-재정의method-override)
  - [실습](#실습)
    - [PrinterApp](#printerapp)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Object 클래스
* 'new class' -> 'super class' 설정을 하지 않을 경우 Object클래스를 상속받는다.
* 자바의 최상위 클래스 (모든 자바의 클래스는 Object의 하위 클래스)
* java.lang.object
* 객체를 다루는데 사용되는 기초적인 기능들이 있다. 
  * toString, equals

### 주요 메소드
1. ***boolean equals(Object obj)***
2. *int hashCode()*
   * 이 객체의 고유한 해시코드값을 반환한다.
   * 해시코드값이 다르면 서로 다른 객체다.
   * 해시코드값이 같으면 같은 객체일 수도 있고, 다른 객체일 수도 있다.
3. ***String toString()***
   * 이 객체에 대한 간단한 정보를 문자열로 반환한다.
   * `패키지명.패키지명.클래스명@해시코드`
   * `System.out.println(참조변수);` 이 코드를 실행하면 실제로 실행되는 코드는 `System.out.println(참조변수.toString());`이 실행된다.
4. *Class<?> getClass()*
   * 이 객체에 대한설계도 정보를 Class객체로 반환한다.
     * Class객체 : 클래스를 표현하는 객체
5. *Object clone()*
   * 이 객체를 복제한 객체를 반환한다.
     * 복제된 객체는 이 객체와 같은 정보를 가지고 있다.
6. *void wait(), void notify()*
   * 다중 스레드와 관련된 기능이다.

## 메소드 재정의
* 상속관계에 있는 클래스에서 자식클래스가 부모 클래스의 메소드를 재정의하는 것이다.
* 부모 클래스로부터 상속받은 기능 중에서 자식 클래스에 맞게 해당 메소드의 구현내용만 재정의하는 것이다. 
  * 반환타입, 메소드이름, 매개변수가 부모 클래스의 메소드와 일치해야 한다.
  * 구현내용만 부모 클래스의 메소드와 다르게 정의하는 것이다.

### 메소드 재정의 목적
* 구현내용의 차이만 있는 기능은 부모클래스와 자식클래스들이 같은 메소드이름으로 구현하게 한다.
* 상속관계에 있는 모든 클래스들에서 재정의된 메소드들은 사용법이 동일해진다.

#### 메소드 중복정의(Method overload)
- 같은 클래스안에서 매개변수만 다르고, 구현내용이 비슷한 기능들을 같은 메소드이름으로 구현하는 것
    ```java
    System.out.println();
    System.out.println(10);
    System.out.println('A');
    System.out.println(true);
    System.out.println(3.14);
    System.out.println(10000000000000000L);
    System.out.println("홍길동");

    Account acc = new Account();
    System.out.println(acc);
    Score score = new Score();
    System.out.println(score);
    ```
* println()에는 매개변수를 다르게 받을 수 있는 다양한 println()들이 있다.

#### 메소드 재정의(Method override)
- 상속관계에 있는 클래스에서 자식 클래스들이 구현내용이 비슷한 기능을 같은 메소드 이름으로 재정의 하는 것
- 즉, 부모로부터 물려받은 메소드를 자신 클래스에 맞게 메소드명은 같지만 기능은 다르게 구현한 것.

### 실습
* Printer
* ColorPrinter extends Printer

#### PrinterApp
```java
package sample2;

public class PrintApp {

    public static void main(String[] args) {
        
        Printer p1 = new Printer();
        p1.on();
        p1.print();
        p1.off();
        
        ColorPrinter p2 = new ColorPrinter();
        p2.on();
        p2.print();
        p2.off();
    }
}
```
* 실행결과
    ```
    전원을 켠다.
    인쇄물을 흑백으로 출력한다.
    전원을 끈다.
    전원을 켠다.
    인쇄물을 흑백으로 출력한다.
    전원을 끈다.
    ```
  * Printer의 `print()`기능이 ColorPrint에 알맞지 않다. 
    * 해결방법 1 : 개별 클래스로 (extends X)
      * 출력기능의 이름이 달라져 비효율적이다. (`print()`, `printColor()`)
      * 클래스, 기능들이 많아질수록 사용하기 복잡하다.
        * PhotoPrinter extends ColorPrinter
            ```java
            package sample2;

            public class PhotoPrinter extends Printer {

                void printPhoto() {
                    System.out.println("인쇄물을 고화질로 출력한다.");
                    }
                }
            ```
            * PrintApp에서 실행
            ```java
            package sample2;

            public class PrintApp {

                public static void main(String[] args) {
                    
                    Printer p1 = new Printer();
                    p1.on();
                    p1.print();								// 출력기능의 이름이 print()
                    p1.off();
                    
                    ColorPrinter p2 = new ColorPrinter();
                    p2.on();
                    p2.printColor();						// 출력기능의 이름이 printColor()
                    p2.off();
                    
                    System.out.println();
                    PhotoPrinter p3 = new PhotoPrinter();	
                    p3.on();
                    p3.printPhoto();                        // 출력기능의 이름이 printPhoto()
                    p3.off();
                }
            }
            ```
            * 같은 출력기능인데 이름이 달라 사용하기 힘들것이다.
    * 해결방법 2 : ***메소드 재정의***
      * ColorPrint, PhotoPrint 재정의
        ```java
        package sample2;

        public class ColorPrinter extends Printer {

        //	void printColor() {
        //		System.out.println("인쇄물을 컬러로 출력한다.");
        //	}
            
            // Printer로부터 물려받은 void print()를 재정의한다.
            void print() {
                System.out.println("인쇄물을 컬러로 출력한다.");
            }
        }
        ```
        ```java
        package sample2;

        public class PhotoPrinter extends Printer {

        //	void printPhoto() {
        //		System.out.println("인쇄물을 고화질로 출력한다.");
        //	}
            
            // 메소드 재정의
            // ColorPrinter에서 물려받은 print() 재정의
            void print() {
                System.out.println("인쇄물을 고화질로 출력한다.");
            }
        }
        ```
      * PrintApp
        ```java
        package sample2;

        public class PrintApp {

            public static void main(String[] args) {
                
                Printer p1 = new Printer();
                p1.on();
                p1.print();								// 출력기능의 이름이 print()
                p1.off();
                
                System.out.println();
                ColorPrinter p2 = new ColorPrinter();
                p2.on();
        //		p2.printColor();						// 출력기능의 이름이 printColor()
                p2.print();								// 메소드 재정의
                p2.off();
                
                System.out.println();
                PhotoPrinter p3 = new PhotoPrinter();	
                p3.on();
        //		p3.printPhoto();						// 출력기능의 이름이 printColor()
                p3.print();								// 메소드 재정의
                p3.off();
            }
        }
        ```

![](image/2022-03-17-18-31-05.png)
