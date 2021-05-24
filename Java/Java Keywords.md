based on [생활코딩](https://opentutorials.org/course/1) 

## Java
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
### 버전
    Java SE/JDK/JRE의 버전
현재 대표적인 버전 : Java SE 8, Java SE 11(추천)
최신 버전 : Java SE 16
(버전 16으로 사용하다 Swing 과의 호환 과정에서 문제가 있어 16을 지우고 11을 설치하여 사용 중)
### Java SE (Java Standard Edition)
자바 표준 에디션
* 표준적인 컴퓨팅 환경을 지원하기 위한 자바 가상 머신 규격 및 API집합

### Java Swing
* 스윙은 자바에서 GUI(Graphic User Interface)를 구현하기 위해 JDK에서 기본적으로 제공하는 개발 툴킷 (자바 기반 클래스의 일부)
* cf) AWT, SWT

### IDE(Integrated Development Environment)
* 통합 개발 환경이란 공통된 개발자 툴을 하나의 그래픽 사용자 인터페이스(GUI)로 결합하는 애플리케이션을 구축하기 위한 소프트웨어
* eclipse, intelliJ IDEA, NetBeans, etc.