> 부스트코스 - 웹 프로그래밍(풀스택)강의를 학습, 정리한 내용입니다.(https://www.boostcourse.org/web316/joinLectures/12943)

# **4. 개발환경 설정 - BE**

- [**4. 개발환경 설정 - BE**](#4-개발환경-설정---be)
- [1) JDK 다운받기 및 설치하기](#1-jdk-다운받기-및-설치하기)
  - [**핵심 개념**](#핵심-개념)
  - [JRE와 JDK](#jre와-jdk)
  - [**JDK 다운로드 및 설치**](#jdk-다운로드-및-설치)
    - [**1. window용 설치**](#1-window용-설치)
    - [**2. mac os용 설치**](#2-mac-os용-설치)
  - [**생각해보기**](#생각해보기)
  - [**참고 자료**](#참고-자료)
- [2) 환경설정하기](#2-환경설정하기)
  - [**핵심 개념**](#핵심-개념-1)
  - [콘솔환경 실행을 위한 환경설정](#콘솔환경-실행을-위한-환경설정)
    - [**JAVA 환경설정**](#java-환경설정)
    - [**1. MS Windows 10에서의 환경설정**](#1-ms-windows-10에서의-환경설정)
    - [**2. Mac OS에서의 환경설정**](#2-mac-os에서의-환경설정)
  - [**간단한 JAVA 프로그램 컴파일 및 실행**](#간단한-java-프로그램-컴파일-및-실행)
  - [**생각해보기**](#생각해보기-1)
    - [답.](#답)
- [3) 이클립스 다운받기 및 설치하고 인코딩 설정하기](#3-이클립스-다운받기-및-설치하고-인코딩-설정하기)
  - [**핵심 개념**](#핵심-개념-2)
  - [**이클립스란?**](#이클립스란)
  - [**이클립스 다운로드및 설치**](#이클립스-다운로드및-설치)
  - [**이클립스 설치 후 인코딩 설정하기**](#이클립스-설치-후-인코딩-설정하기)
  - [**생각해보기**](#생각해보기-2)
  - [**참고 자료**](#참고-자료-1)
- [4) HelloWorld 컴파일하고 실행하기](#4-helloworld-컴파일하고-실행하기)
  - [**핵심 개념**](#핵심-개념-3)
  - [**Java Code Conventions (프로그래머들끼리의 약속)**](#java-code-conventions-프로그래머들끼리의약속)
  - [**실습코드**](#실습코드)
  - [**생각해보기**](#생각해보기-3)
  - [2. 이클립스와 비슷한 통합개발환경은 어떤 것이 있을까?](#2-이클립스와-비슷한-통합개발환경은-어떤-것이-있을까)
    - [답](#답-1)
  - [**참고 자료**](#참고-자료-2)
- [5) Tomcat 다운받기 및 설치하기](#5-tomcat-다운받기-및-설치하기)
  - [**핵심 개념**](#핵심-개념-4)
  - [**Apache Tomcat이란?**](#apache-tomcat이란)
  - [**Apache Tomcat 다운로드 및 설치**](#apache-tomcat-다운로드-및-설치)
    - [**Apach Tomcat 실행**](#apach-tomcat-실행)
    - [**MAC OS 사용자의 경우**](#mac-os-사용자의-경우)
  - [**생각해보기**](#생각해보기-4)
    - [답](#답-2)
  - [**참고 자료**](#참고-자료-3)
    - [기술 스택 예 :](#기술-스택-예-)
- [6) HelloWorld 서블릿 컴파일 및 실행하기](#6-helloworld-서블릿-컴파일-및-실행하기)
  - [**핵심 개념**](#핵심-개념-5)
  - [**URL 주소**](#url-주소)
  - [**생각해보기**](#생각해보기-5)
    - [답](#답-3)
  - [추가학습](#추가학습)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# 1) JDK 다운받기 및 설치하기
JAVA언어로 개발하려면 JDK가 필요하다.

JDK를 운영체제별로 설치
## **핵심 개념**
- JDK
- JRE
## JRE와 JDK
JAVA언어를 작성된 프로그램을 실행하기 위해선 JRE(Java SE Runtime Environment)가 필요

개발자가 아니라 JAVA언어로 만들어진 프로그램을 실행하는 사용자라면 JRE만 컴퓨터에 설치

JAVA언어를 사용하는 개발자는 JAVA언어로 작성된 소스(Source)를 컴파일하고 관리할 필요가 있다.

이때 사용되는 도구를 JDK(Java SE Development Kit)라고 말한다.

JDK안에는 JRE도 포함되어 있다.

컴파일한 결과를 실행하기 위해서는 JRE가 필요하기 때문

## **JDK 다운로드 및 설치**
JDK는 Oracle사이트에서 무료로 다운로드하여 설치

### **1. window용 설치**
브라우저로 다음의 URL을 입력하여 이동.

[http://www.oracle.com/technetwork/java/index.html](http://www.oracle.com/technetwork/java/index.html)

![https://cphinf.pstatic.net/mooc/20180101_52/1514804992562oUaWq_PNG/01.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_52/1514804992562oUaWq_PNG/01.png?type=w760)

위의 그림과 같이 화면이 보여지면, "Java SE"를 클릭.

![https://cphinf.pstatic.net/mooc/20180101_258/15148050252486e6q4_PNG/02.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_258/15148050252486e6q4_PNG/02.png?type=w760)

JDK 최신버전은 16까지 현재 나와있다.

그런데, 현재 가장 많이 사용되는 버전은  8 과 11이다

JDK 8과 11일 사용 

![https://cphinf.pstatic.net/mooc/20180101_191/1514805044190jSJL4_PNG/03.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_191/1514805044190jSJL4_PNG/03.png?type=w760)

JDK를 다운로드 받으려면 먼저 라이센스(License)에 동의
.

"Accept License Agreement" 앞에 있는 레디오 버튼을 클릭.

![https://cphinf.pstatic.net/mooc/20180101_260/15148051000720MymJ_PNG/05.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_260/15148051000720MymJ_PNG/05.png?type=w760)

본인이 사용하는 운영체제에 맞는 JDK를 다운로드 해야합니다.

맥운영체제를 사용한다면 MacOS에 해당하는 "jdk-8u151-macosx-x64.dmg"를 클릭하고,

MS윈도우 32비트 운영체제를 사용한다면 "jdk-8u151-windows-i586.exe"를 클릭하여 다운로드.

참고로 MS윈도우 64비트 운영체제의 경우에는 "jdk-8u151-windows-x64.exe"를 다운로드.

![https://cphinf.pstatic.net/mooc/20180101_42/15148052782178YzIE_PNG/06.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_42/15148052782178YzIE_PNG/06.png?type=w760)

다운받은 MS Widnows 64bit용 JDK "jdk-8u151-windows-x64.exe"파일을 더블클릭하여 실행하면 위의 그림과 같은 환영 메시지가 보인다. Next버튼을 클릭.

![https://cphinf.pstatic.net/mooc/20180101_1/1514805294836my2eE_PNG/07.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_1/1514805294836my2eE_PNG/07.png?type=w760)

JDK가 설치될 경로(Path)를 지정.

JDK가 설치되는 경로를 JAVA_HOME경로라고도 말한다.

해당 경로를 꼭 기억.

환경설정을 할 때 알아야 한다.

Next버튼을 클릭.

![https://cphinf.pstatic.net/mooc/20180101_219/1514805317380twpFW_PNG/08.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_219/1514805317380twpFW_PNG/08.png?type=w760)

JDK설치가 끝나면 JRE가 설치될 경로를 설정.

Next버튼을 클릭.

![https://cphinf.pstatic.net/mooc/20180101_182/1514805341522Tomra_PNG/09.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_182/1514805341522Tomra_PNG/09.png?type=w760)


![https://cphinf.pstatic.net/mooc/20180101_281/1514805369294xcvyi_PNG/10.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_281/1514805369294xcvyi_PNG/10.png?type=w760)

설치 완료.

### **2. mac os용 설치**

브라우저에서 다음의 URL로 이동.

[http://www.oracle.com/technetwork/java/javase/downloads/index.htm](http://%20http//www.oracle.com/technetwork/java/javase/downloads/index.htm)

![https://cphinf.pstatic.net/mooc/20180129_139/1517191038996dYwQx_PNG/1.png?type=w760](https://cphinf.pstatic.net/mooc/20180129_139/1517191038996dYwQx_PNG/1.png?type=w760)

JDK Download 링크를 클릭.

![https://cphinf.pstatic.net/mooc/20180129_58/1517191086215tMvSp_PNG/2.png?type=w760](https://cphinf.pstatic.net/mooc/20180129_58/1517191086215tMvSp_PNG/2.png?type=w760)

jdk-8u121-macosx-x64.dmg 를 다운로드 .

![https://cphinf.pstatic.net/mooc/20180129_126/151719114408120bUI_PNG/3.png?type=w760](https://cphinf.pstatic.net/mooc/20180129_126/151719114408120bUI_PNG/3.png?type=w760)

다운로드 받은 파일을 더블 클릭.

![https://cphinf.pstatic.net/mooc/20180129_287/1517191173558Dt3E6_PNG/4.png?type=w760](https://cphinf.pstatic.net/mooc/20180129_287/1517191173558Dt3E6_PNG/4.png?type=w760)

위와 같이 JDK설치 마법사가 실행.

![https://cphinf.pstatic.net/mooc/20180129_168/1517191176988E7krk_PNG/5.png?type=w760](https://cphinf.pstatic.net/mooc/20180129_168/1517191176988E7krk_PNG/5.png?type=w760)

맥의 관리자 ID와 암호를 입력하라는 창이 보인다.

본인의 맥 아이디와 암호를 입력.

![https://cphinf.pstatic.net/mooc/20180129_289/1517191213599ogCsk_PNG/6.png?type=w760](https://cphinf.pstatic.net/mooc/20180129_289/1517191213599ogCsk_PNG/6.png?type=w760)

설치 완료.

---

## **생각해보기**
1. JDK가 운영체제별로 설치파일을 제공하는 이유는 무엇입니까?

## **참고 자료**

**[[참고링크] windows용 설치링크**
http://www.oracle.com](http://www.oracle.com/technetwork/java/index.html)

**[[참고링크] mac os용 설치링크**
http://www.oracle.com](http://www.oracle.com/technetwork/java/javase/downloads/index.htm)

# 2) 환경설정하기
1. JDK 환경설정 후 
2. 간단한 자바 프로그램을 작성하고 실행해 
3. JDK 설치와 환경설정이 제대로 되어 있는지 확인.

## **핵심 개념**
- 시스템 환경설정

## 콘솔환경 실행을 위한 환경설정

JDK를 설치한 후 JDK를 콘솔(console) 환경에서 잘 실행될 수 있도록 시스템 환경 설정을 해야 한다.

시스템 환경 설정을 하는 방법은 운영체제에 따라서 다르다.

### **JAVA 환경설정**
JDK설치 후, JDK에 대한 시스템 환경 설정

운영체제 마다 시스템 환경설정하는 방법은 다르지만, 설정해야 할 환경변수의 이름은 같다.

설정해야 할 환경변수는 다음과 같은 3가지.

- JAVA_HOME : JAVA가 설치된 경로를 지정
- CLASSPATH : JAVA 클래스가 있는 경로들을 지정
- PATH : JAVA 실행파일이 있는 경로를 추가

JAVA_HOME, CLASSPATH는 시스템 환경변수에 새롭게 추가될 환경 변수이고,

PATH는 기존에 존재하는 환경 변수.

### **1. MS Windows 10에서의 환경설정**

MS Windows 10에서 JDK 관련된 환경변수를 설정.

![https://cphinf.pstatic.net/mooc/20180101_169/1514805699516y4yHN_PNG/11.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_169/1514805699516y4yHN_PNG/11.png?type=w760)

찾기 버튼을 누른 다음에 "시스템 환" 까지 입력.

그러면 검색 결과에 "시스템 환경 변수 편집"이라는 결과가 보여질 것.

"시스템 환경 변수 편집"을 선택.

![https://cphinf.pstatic.net/mooc/20180101_276/1514805730311qdclh_PNG/12.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_276/1514805730311qdclh_PNG/12.png?type=w760)

위와 같은 창이 열리면 "환경변수" 버튼을 클릭.

![https://cphinf.pstatic.net/mooc/20180101_169/1514805754462o65af_PNG/13.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_169/1514805754462o65af_PNG/13.png?type=w760)

시스템 변수 영역의 "새로 만들기"버튼을 클릭.

![https://cphinf.pstatic.net/mooc/20180101_89/1514805778880KxQDl_PNG/14.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_89/1514805778880KxQDl_PNG/14.png?type=w760)

위의 그림과 같이 변수이름엔 "JAVA_HOME"을 변수 값엔 JDK가 설치된 경로를 입력.

(파일 탐색기에서 해당 경로로 이동한 후 복사하여 붙이기를 추천.)

![https://cphinf.pstatic.net/mooc/20180101_73/1514805807373SXCUN_PNG/15.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_73/1514805807373SXCUN_PNG/15.png?type=w760)

위의 그림과 같이 "JAVA_HOME" 환경변수가 시스템 변수 영역에 추가된 것을 확인할 수 있다.

![https://cphinf.pstatic.net/mooc/20180101_289/1514805831833nLJqN_PNG/16.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_289/1514805831833nLJqN_PNG/16.png?type=w760)

같은 방법으로 "CLASSPATH" 환경변수를 추가.

값은 `.;%JAVA_HOME%\lib\tools.jar` 로 입력.

`%JAVA_HOME%`은 앞에서 설정한 JAVA_HOME 환경변수의 값으로 치환하라는 의미.

![https://cphinf.pstatic.net/mooc/20180101_151/15148058760354eeLv_PNG/17.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_151/15148058760354eeLv_PNG/17.png?type=w760)

시스템 변수 영역에서 PATH를 찾아서 선택한 후 "편집" 버튼을 클릭한 후 위의 그림과 같은 창이 열리면 우측의 "새로 만들기" 버튼을 클릭한 후 `%JAVA_HOME%\bin`을 입력.

![https://cphinf.pstatic.net/mooc/20180101_59/1514805924761w9fvv_PNG/18.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_59/1514805924761w9fvv_PNG/18.png?type=w760)

"윈도키 + R"을 입력하여 실행창이 열리도록 한 후, "cmd"라고 입력하고 엔터를 입력.

이 때 cmd 콘솔(console)창이 열리게 된다.

해당 콘솔창에서 다음과 같이 내용을 입력.

```
java -version
javac -version
```

java 명령은 JAVA로 작성된 프로그램을 실행할 때 사용하는 명령이고, javac 명령은 java로 작성된 프로그램을 컴파일할 때 사용하는 명령.

만약 java는 잘 실행되는데 javac가 제대로 실행되지 않는다면, 시스템 환경 변수 설정이 잘못 설정되었거나 JDK가 아닌 JRE만 설치되었을 때.

환경변수가 수정되었다면 cmd 콘솔창을 닫고 다시 cmd 콘솔창을 열어서 명령을 실행해야 한다.

### **2. Mac OS에서의 환경설정**

설치가 완료된 이후에, 터미널을 연 후 아래와 같이 명령어 입력

```
cd /Library/Java/JavaVirtualMachines
ls -la
```

위에서 사용한 명령은 맥 터미널 명령. ( 리눅스도 같은 명령을 사용할 수 있다. )

2가지 버전의 jdk가 설치되어 있기 때문에 2가지가 보인다.

처음 설치했다면 경로가 하나만 보일 것.

![https://cphinf.pstatic.net/mooc/20180129_193/1517191799982CxokD_PNG/1.png?type=w760](https://cphinf.pstatic.net/mooc/20180129_193/1517191799982CxokD_PNG/1.png?type=w760)

```
cd /Library/Java/JavaVirtualMachines/jdk1.8.0_121.jdk/Contents/Home
```

위와 같은 명령으로 경로를 이동 가능.

중간에 있는 jdk1.8.0_121.jdk는 본인이 설치한 jdk와 같은 경로여야 한다.

해당 경로를 JAVA_HOME 경로라고 한다.

해당 경로에서 ls -la 명령을 내려보면 윈도우에서 설치한 JDK와 같은 내용이 보이는 것을 알 수 있을 것.

이제 맥에서 JDK를 사용하기 위해서 환경설정을 해야 한다.

먼저 다음과 같은 명령을 실행.

```
sudo su -
```

위의 명령은 터미널에서 관리자로 권한을 바꾸겠다는 것을 의미.

```
vi /etc/paths
```

위의 명령은 vi라는 에디터로 /etc/paths 라는 파일을 편집하겠다는 것을 의미.

vi 에디터는 처음 사용하면 굉장히 어렵다.

인터넷에서 vi 에디터에 대한 사용법을 미리 공부한 후 사용해야 한다.

에디터로 /etc/paths라는 파일을 열었다면 맨 아랫줄에 다음의 경로를 추가.

```
/Library/Java/JavaVirtualMachines/jdk1.8.0_121.jdk/Contents/Home/bin
```

그리고 파일을 저장.

이렇게 저장을 한 후, 다시 터미널을 열면 어디서든 java명령을 실행할 수 있다.

이번엔 다음과 같은 명령으로 JAVA_HOME 과 CLASSPATH 환경변수를 지정.

```
vi /etc/profile
```

위의 명령을 실행한 후 맨 아랫줄에 다음의 내용을 추가.

```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_121.jdk/Contents/Home
export CLASSPATH=.:$JAVA_HOME/lib/tools.jar
```

CLASSPATH=다음에 있는 문자열은 점(.) 과 콜론(:).

점은 현재 경로를 말하고 콜론은 구분자.

CLASSPATH로 현재 경로와 `$JAVA_HOME/lib/tools.jar`를 지정하라는 것을 의미.

자 위와 같이 설정하였다면 터미널을 종료 후 다시 실행.

그리고 아래와 같이 명령문 입력.

```
java -version
```

아래의 그림과 같이 결과가 출력된다면 설치가 잘 된 것.

![https://cphinf.pstatic.net/mooc/20180129_247/1517191900716vQ2KX_PNG/2.png?type=w760](https://cphinf.pstatic.net/mooc/20180129_247/1517191900716vQ2KX_PNG/2.png?type=w760)

## **간단한 JAVA 프로그램 컴파일 및 실행**

메모장을 열어 "Hello.java"라는 파일로 다음의 내용을 저장.

```java
public class Hello{
     public static void main(String args[]){
       System.out.println("hello world");
     }
}
```

어떤 디렉토리에 저장해도 상관은 없다.

(c:\temp 폴더에 저장.)

cmd 콘솔창을 연 후 다음과 같이 입력.

c:\temp 가 아닌 다른 디렉토리에 저장하였을 경우에는 본인이 저장한 디렉토리를 입력하면 된다.

```
cd c:\temp
```

```
javac Hello.java
```

위의 명령은 Hello.java소스파일을 컴파일하라는 명령.

컴파일 되면 Hello.class파일이 생성된다.

Hello.class파일이 생성되었다면, 다음의 명령으로 실행.

```
java Hello
```

"hello world"가 잘 출력되었다면, JDK설치부터 환경변수설정까지 잘 되었다는 것을 알 수 있다.
## **생각해보기**
1. 자바로 작성된 프로그램을 실행하려면 JRE만 설치하면 됩니다. 이때는 환경변수를 설정할 필요가 없습니다.
2. 그런데, JDK를 설치할 때는 환경변수를 설정해야 합니다. 환경변수를 설정하는 이유가 무엇일까요?
3. 현재 설치된 JDK보다 높은 버전의 JDK를 설치했습니다. 이때 수정해야 할 환경변수는 무엇일까요?
### 답.
1. jre는 애플릿 및 응용 프로그램을 실행하기 위한 라이브러리, java virtual machine 등을 제공, jdk는 jre의 상위 집합으로 jre에 있는 모든 항목과 컴파일러 및 디버거와 같은 도구 포함. jre는 자바 프로그램 실행만 할 때, jdk는 프로그래밍까지 가능.
2. 환경변수를 설정하는 이유는 자바 프로그램을 컴파일하거나 실행할 때마다 javac(컴파일러)의 전체경로를 제공해야 하기 때문. 또 java파일을 bin디렉토리에 저장해야하는 종속성을 제거(시스템 어디에서나 실행가능)
3. 다른 버전의 jdk를 다운받으면 디렉토리가 다르기 때문에 환경변수 설정을 해줘야 한다.


# 3) 이클립스 다운받기 및 설치하고 인코딩 설정하기
JDK 외에도 JAVA 프로그램을 개발할 때 사용하면 좋은 도구들이 많다.

이클립스(Eclipse) 설치 및 인코딩 설정
## **핵심 개념**
- eclipse
- IDE
- perspective
- view
- edit 영역
## **이클립스란?**

IBM에서 웹 스피어 스튜디오 애플리케이션 디벨로퍼(WebSpheare Studio Application Developer)란 이름으로 JAVA언어를 이용하여 개발되었던 것인데, 핵심 부분을 오픈 소스로 공개하여 지금의 이클립스로 발전하게 되었다.

이클립스는 윈도우, 맥, 리눅스 등 다양한 운영체제에서 동작하며, JAVA를 비롯한 다양한 프로그래밍 언어를 개발할 수 있는 통합 개발 환경( Integrated Development Environment, IDE)이라고 말할 수 있다.

통합 개발 환경이란 코딩, 디버그, 컴파일, 배포 등 프로그램 개발에 관련된 모든 작업을 하나의 프로그램 안에서 처리할 수 있도록 환경을 제공하는 소프트웨어.

이클립스는 플러그인 구조로 쉽게 기능을 추가할 수 있는 구조로 되어 있다.

이런 구조 때문에 이클립스 기반으로 만들어진 다양한 도구들이 존재.

또한 이클립스는 윈도우, 맥, 리눅스 운영체제를 지원하기 때문에 대부분의 환경에서 사용할 수 있다는 장점이 있다.

2001년 세상에 첫선을 보인 이래로 지속적으로 발전하여 최고의 개발 도구 중의 하나로 사랑받고 있다.

## **이클립스 다운로드및 설치**

웹 브라우저로 이클립스 사이트에 접속.

하단에 있는 Packages 링크를 클릭.

![https://cphinf.pstatic.net/mooc/20180101_154/15148075260725H0Qn_PNG/1.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_154/15148075260725H0Qn_PNG/1.png?type=w760)

**이클립스 사이트**

이클립스를 이용하여 자바 웹 어플리케이션을 개발할 때 사용하려면 "Eclipse IDE for Java EE Developers"를 다운로드 받아야 한다.

본인의 운영체제에 맞는 버전을 다운로드.

목록을 살펴보면 알겠지만, 다양한 이클립스 버전이 있는 것을 알 수 있다.

Windows사용자는 자동으로 윈도우와 관련된 다운로드 링크가 보인다.

![https://cphinf.pstatic.net/mooc/20180101_199/151480757112536YGx_PNG/2.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_199/151480757112536YGx_PNG/2.png?type=w760)

다운로드 링크를 클릭하여 다운로드.

약 340메가 정도의 파일이 다운로드.

![https://cphinf.pstatic.net/mooc/20180101_87/1514807593705ve7pr_PNG/3.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_87/1514807593705ve7pr_PNG/3.png?type=w760)

이클립스는 압축만 해제하면 간단히 설치할 수 있습니다.

삭제할 때도 압축을 해제한 폴더만 삭제하면 됩니다.

다운로드 받은 파일인 "eclipse-jee-oxygen-2-win32-x86_64.zip"의 압축을 해제.

압축을 해제하면 eclipse란 폴더가 있고, 그 안에는 아래 그림과 같은 파일들이 있는 것을 확인할 수 있다.

![https://cphinf.pstatic.net/mooc/20180101_134/1514807619293AqLCU_PNG/4.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_134/1514807619293AqLCU_PNG/4.png?type=w760)

**이클립스 실행과 이클립스의 구성요소**

파일 중에서 eclipse.exe파일을 더블클릭하여 실행.실행하면 다음과 같이 workspace경로를 물어보는 창이 열린다.

workspace란 이클립스로 관리하는 프로젝트가 저장되는 경로를 의미.

앞으로 이클립스로 개발하는 모든 내용이 저장되는 폴더.

![https://cphinf.pstatic.net/mooc/20180101_65/1514807663112M16qR_PNG/5.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_65/1514807663112M16qR_PNG/5.png?type=w760)

폴더를 지정한 후 "Lanuch"버튼을 클릭하면 버전에 따라서 모양이 약간 다르지만, 로그화면이 보여지면서 실행되게 된다.

![https://cphinf.pstatic.net/mooc/20180101_98/1514807682463cGd3J_PNG/6.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_98/1514807682463cGd3J_PNG/6.png?type=w760)

처음 실행되면 이클립스 "Welcome"탭이 보여진다.

![https://cphinf.pstatic.net/mooc/20180101_210/1514807705577ezgxm_PNG/7.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_210/1514807705577ezgxm_PNG/7.png?type=w760)

내용을 살펴보았다면, "Welcome" 탭의 X버튼을 클릭하여 해당 창을 닫는다.

![https://cphinf.pstatic.net/mooc/20180101_254/151480772584775Cf4_PNG/8.png?type=w760](https://cphinf.pstatic.net/mooc/20180101_254/151480772584775Cf4_PNG/8.png?type=w760)

이클립스를 다운로드 받을 때 보면, 다양한 종류의 이클립스가 있던 것을 볼 수 있었다.

이클립스는 플러그인(Plugin)이란 구조로 만들어져 있다.

이클립스에 다양한 플러그인을 설치함으로써 다양한 방식으로 사용할 수 있다.

이클립스에 아무 플러그인도 설치하지 않았다면, 빈 윈도우 화면이 보여질 것.

"Eclipse IDE for Java EE Developers" 는 자바와 자바 웹 개발을 위한 플러그인들이 설치된 버전이라고 생각하면 된다.

* (1)번 영역은 퍼스팩티브(Perspective).
  * 퍼스팩티브는 여러개의 뷰(View)와 에디터 영역, 메뉴 등으로 구성되어 있다.
  * 우리는 자바 개발과 자바웹 개발을 위한 퍼스팩티브를 사용할 것.

* (2)번 영역은 뷰(View).
  * 이클립스는 다양한 뷰를 제공.
  * 파일 탐색기와 유사항 뷰부터 시작해서 서버실행화면을 보여주는 뷰 등 다양한 뷰를 제공.

* (3)번 영역은 에디터(Editor) 영역.
  * 보통 에디터가 위치하기 때문입니다. 에디터 영역에서 앞으로 JAVA코드를 작성할 것입니다.

## **이클립스 설치 후 인코딩 설정하기**

프로젝트 내에서 JAVA, HTML, xml등의 다양한 종류의 파일이 사용되는데 파일마다 인코딩하는 방법이 다르면 글자가 깨지는 현상이 발생.

이런 문제가 발생하지 않도록 인코딩을 설정해 두는 것이 좋다.

이 과정에서는 UTF-8로 설정.

아래와 같이 인코딩을 설정.

![https://cphinf.pstatic.net/mooc/20180323_17/15217882748593uV2N_PNG/1.png?type=w760](https://cphinf.pstatic.net/mooc/20180323_17/15217882748593uV2N_PNG/1.png?type=w760)

Window -> Preferences 메뉴를 클릭.

![https://cphinf.pstatic.net/mooc/20180323_78/15217883128940HNQo_PNG/2.png?type=w760](https://cphinf.pstatic.net/mooc/20180323_78/15217883128940HNQo_PNG/2.png?type=w760)

Preferences 다이얼로그가 열리면, General -> Workspace 메뉴를 활성화하고,

하단의 Text file encoding 메뉴에서 Other 라디오버튼을 클릭하고 UTF-8 로 선택하고 Apply 버튼을 클릭.

이렇게 설정하면 주로 자바 파일들에 대한 기본 인코딩이 UTF-8 로 설정된다.

![https://cphinf.pstatic.net/mooc/20180323_214/1521788370668vYJpU_PNG/3.png?type=w760](https://cphinf.pstatic.net/mooc/20180323_214/1521788370668vYJpU_PNG/3.png?type=w760)

**CSS Files**좌측 메뉴에서 Web을 활성화해주고 CSS Files 메뉴를 클릭하면 우측 메뉴가 바뀌는데 

우측의 Encoding 항목에서 UTF-8을 선택하고 Apply 버튼을 눌러준다.

같은 방법으로 HTML Files, JSP Files 의 인코딩 설정도 바꿔준다.

![https://cphinf.pstatic.net/mooc/20180323_25/1521788419807jsXky_PNG/4.png?type=w760](https://cphinf.pstatic.net/mooc/20180323_25/1521788419807jsXky_PNG/4.png?type=w760)

**HTML Files**

![https://cphinf.pstatic.net/mooc/20180323_35/1521788423515NtLYa_PNG/5.png?type=w760](https://cphinf.pstatic.net/mooc/20180323_35/1521788423515NtLYa_PNG/5.png?type=w760)

**JSP Files**

---

## **생각해보기**
1. 이클립스는 자바로 만들어진 프로그램입니다. 이클립스가 실행되기 위해서 설치되어 있어야 할 프로그램은 무엇일까?
2. 이클립스에 모든 플러그인을 제거하면 빈 윈도우만 남는다고 하였습니다. 플러그인을 제작할 수 있다면, 이 빈 윈도우에 플러그인을 채워 넣을 수 있을 것입니다. 이런 방식으로 개발하는 것을 이클립스 RCP(Rich Client Platform)이라고 말합니다. 이클립스 RCP를 이용하여 만들어진 소프트웨어에는 어떤 것들이 있을까?


## **참고 자료**

> [**[참고링크] Eclipse Oxygen**
https://www.eclipse.org](https://www.eclipse.org/)

> [**[참고링크] 위키피디아 Eclipse (software)**
https://en.wikipedia.org](https://en.wikipedia.org/wiki/Eclipse_(software))


> [참고링크] 이클립스 (소프트웨어)
https://ko.wikipedia.org

> 위의 [참고링크] 위키피디아 Eclipse (software)의 번역본
(https://ko.wikipedia.org/wiki/%EC%9D%B4%ED%81%B4%EB%A6%BD%EC%8A%A4_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4))


# 4) HelloWorld 컴파일하고 실행하기
이클립스 안에서 JAVA프로젝트를 만들고 간단한 프로그램을 만들고 실행

이클립스를 사용하는 방법을 간단하게 알아보자.
## **핵심 개념**
- 이클립스 프로젝트
## **Java Code Conventions (프로그래머들끼리의 약속)**

- 클래스명 : 첫글자를 대문자로
- 프로젝트명, 패키지명 : 소문자

더 많은 Java Code Conventions은 참고 링크에.

## **실습코드**
```java
package first;
public class Hello {

	public static void main(String[] args) {
		System.out.println("Hello world");
	}

}
```
## **생각해보기**
1. 이클립스와 같은 통합개발환경(IDE) 가 없다면 어떻게 개발할까?
2. 이클립스와 비슷한 통합개발환경은 어떤 것이 있을까?
---
### 답
1. 명령프롬프트와 같은 API환경에서 개발하지 않을까
2. IntelliJ IDEA
## **참고 자료**

> **[[참고링크] 구글 Java 코딩 컨벤션**
https://google.github.io](https://google.github.io/styleguide/javaguide.html)

> **[[참고링크] 자바 코딩 규칙(Java Code Conventions)**
http://myeonguni.tistory.com](http://myeonguni.tistory.com/1596)

> **[[참고링크] Code Conventions for the Java Programming Language: Contents**
http://www.oracle.comSUN Java 코딩 컨벤션](http://www.oracle.com/technetwork/java/javase/documentation/codeconvtoc-136057.html)



# 5) Tomcat 다운받기 및 설치하기
word 파일을 열어서 내용을 확인하기 위해서는 ms office의 word 프로그램이나 viewer가 필요.

웹 어플리케이션을 실행하기 위해서도 필요한 것이 있다.

그것이 WAS이고, 이번 학습에서 설치할 Apache Tomcat은 WAS 중 하나.

웹 어플리케이션을 실행하기 위해서 필요하므로 설치해야 한다.

## **핵심 개념**
- Apache Tomcat
- WAS(Web application server)

## **Apache Tomcat이란?**
아파치 톰캣(Apache Tomcat)은 아파치 소프트웨어 재단(Apache Software Foundation, ASF)에서 개발한 세계에서 가장 많이 사용되는 WAS(Web Application Server).

컴퓨터에 운영체제를 설치해야만 컴퓨터를 사용할 수 있는 것처럼, 자바를 이용하여 작성된 웹 어플리케이션은 WAS가 있어야만 실행할 수 있다.

이때 가장 많이 사용되는 WAS가 아파치 톰캣이라고 말할 수 있다.

아파치 톰캣은 오픈소스 소프트웨어로써 누구나 무료로 사용할 수 있다.

## **Apache Tomcat 다운로드 및 설치**

아파치 톰캣은 [http://tomcat.apache.org](http://tomcat.apache.org/) 에서 다운로드 받을 수 있다.

[http://tomcat.apache.org](http://tomcat.apache.org/) 로 이동한 후 최신버전의 tomcat을 선택.

* 참고 버전별 지원사항
  * Tomcat 8버전은 JDK 7이상에서 동작하며 Servlet Spec 3.1을 지원.
  * Tomcat 9버전은 JDK 8이상에서 동작하며 Servlet Spec 4.0을 지원.

좌측 "Download"메뉴 아래에 있는 "Tomcat 8"링크를 클릭.

![https://cphinf.pstatic.net/mooc/20180102_6/1514869616931TOWgu_PNG/01.png?type=w760](https://cphinf.pstatic.net/mooc/20180102_6/1514869616931TOWgu_PNG/01.png?type=w760)

zip파일을 다운로드.

(MAC OS 사용자는 tar.gz 파일을 다운로드 .)
다운로드 받은 파일을 압축 해제.

![https://cphinf.pstatic.net/mooc/20180102_161/1514871248961Qrk1O_PNG/02.png?type=w760](https://cphinf.pstatic.net/mooc/20180102_161/1514871248961Qrk1O_PNG/02.png?type=w760)

압축을 해제하면 다음과 같은 파일과 폴더들이 있는 것을 확인할 수 있다.

![https://cphinf.pstatic.net/mooc/20180102_41/1514871276093pDAkd_PNG/03.png?type=w760](https://cphinf.pstatic.net/mooc/20180102_41/1514871276093pDAkd_PNG/03.png?type=w760)

### **Apach Tomcat 실행**

아파치 톰캣 설치 폴더 아래에 있는 bin폴더를 보면 확장자가 bat인 윈도우용 배치파일과 확장자가 sh인 쉘스크립트(shell script)파일이 있는 것을 확인할 수 있다.

쉘스크립트 파일은 linux나 맥 운영체제에서 실행 가능한 파일.

윈도우 사용자라면 startup.bat파일을 더블 클릭하여 실행하고, 맥 운영체제나 linux를 사용하는 사용자는 startup.sh을 더블 클릭하여 실행.

### **MAC OS 사용자의 경우**

1. 다운로드 받은  tar.gz  확장자의 톰캣파일의 압축을 해제.

관리의 편의를 위해 압축해제 한 폴더를 ~/ 경로의 apps 폴더로 옮긴다.

```
mkdir ~/apps
cd ~/apps
mv ~/Downloads/apache-tomcat-8.5.24 ~/apps/
```

2. 쉘확장자를 가진 파일의 실행권한을 준다.

```
chmod +x ./bin/*.sh
```

3. 제대로 실행 권한이 생성 되었는지 확인해 보기 위해 **ls -al** 로 해당 폴더의 파일 목록을 확인. 해당 파일명 앞에 **-rwxr-xr-x@** 와 같이 권한 마지막 부분에 **x**가 보인다면 **실행권한이 부여 된 것**.

```
ls -al

-rw-r-----@  1 username  staff   34894 Mar  5 22:11 bootstrap.jar
-rw-r-----@  1 username  staff    1664 Mar  5 22:13 catalina-tasks.xml
-rw-r-----@  1 username  staff   15815 Mar  5 22:11 catalina.bat
-rwxr-x--x@  1 username  staff   23387 Mar  5 22:11 catalina.sh
-rw-r-----@  1 username  staff  207125 Mar  5 22:11 commons-daemon-native.tar.gz
-rw-r-----@  1 username  staff   25145 Mar  5 22:11 commons-daemon.jar
-rw-r-----@  1 username  staff    2040 Mar  5 22:11 configtest.bat
-rwxr-x---@  1 username  staff    1922 Mar  5 22:11 configtest.sh
-rwxr-x---@  1 username  staff    8509 Mar  5 22:11 daemon.sh
-rw-r-----@  1 username  staff    2091 Mar  5 22:11 digest.bat
-rwxr-x---@  1 username  staff    1965 Mar  5 22:11 digest.sh
-rw-r-----@  1 username  staff    3574 Mar  5 22:11 setclasspath.bat
-rwxr-x---@  1 username  staff    3680 Mar  5 22:11 setclasspath.sh
-rw-r-----@  1 username  staff    2020 Mar  5 22:11 shutdown.bat
-rwxr-x---@  1 username  staff    1902 Mar  5 22:11 shutdown.sh
-rw-r-----@  1 username  staff    2022 Mar  5 22:11 startup.bat
-rwxr-x---@  1 username  staff    1904 Mar  5 22:11 startup.sh
-rw-r-----@  1 username  staff   49335 Mar  5 22:11 tomcat-juli.jar
-rw-r-----@  1 username  staff  405109 Mar  5 22:11 tomcat-native.tar.gz
-rw-r-----@  1 username  staff    4574 Mar  5 22:11 tool-wrapper.bat
-rwxr-x---@  1 username  staff    5483 Mar  5 22:11 tool-wrapper.sh
-rw-r-----@  1 username  staff    2026 Mar  5 22:11 version.bat
-rwxr-x---@  1 username  staff    1908 Mar  5 22:11 version.sh
```

4. 터미널에서 다음과 같이 명령어를 실행.

```
./bin/startup.sh
```

5. 이 때 아래와 같은 오류가 나오면, 다음의 명령어 **chmod +x bin/catalina.sh** 를 실행.

```
Cannot find bin/catalina.sh
The file is absent or does not have execute permission
This file is needed to run this program
```

다음과 같이 해당 파일을 생성하고 실행권한도 생성.

```
chmod +x bin/catalina.sh
```

6. 그리고 다시 다음의 명령어로 톰캣을 실행.

```
./bin/startup.sh
```

7. 톰캣이 시작되었다는 메시지는 출력되지만 8080포트로 접근이 되지 않을 때는 root 권한으로 서버를 시작.

```
sudo ./bin/startup.sh
```

- 쉘 파일의 실행 권한을 주고 서버를 실행 했음에도 http://localhost:8080/ 로 접근이 되지 않을 때 sudo 명령어를 통해 서버를 시작해야 한다.

![https://cphinf.pstatic.net/mooc/20180102_47/1514871330137W2g5g_PNG/04.png?type=w760](https://cphinf.pstatic.net/mooc/20180102_47/1514871330137W2g5g_PNG/04.png?type=w760)

콘솔창이 열리면서 다음과 같이 실행되는 것을 알 수 있다.

tomcat은 기본적으로 8080포트로 실행된다.

실행된 화면을 보면 "http-nio-8080"이라는 문자열을 볼 수 있는데 8080으로 실행되는 것을 표현하고 있는 것.

tomcat설정파일을 수정함으로써 실행되는 포트를 바꿀 수 있다.

앞에서도 설명했지만, 컴퓨터를 구분하기 위해서 사용되는 것이 도메인이나 ip이고, 컴퓨터에 설치되어 있는 여러개의 소프트웨어 서버를 구분하기 위해 사용되는 값이 포트(port).

![https://cphinf.pstatic.net/mooc/20180102_203/1514871373747Ex3ul_PNG/05.png?type=w760](https://cphinf.pstatic.net/mooc/20180102_203/1514871373747Ex3ul_PNG/05.png?type=w760)

웹 브라우저를 실행한 후 주소창에 http://localhost:8080 나 http://127.0.0.1:8080 으로 입력 테스트.

localhost는 현재 사용중인 컴퓨터를 나타내는 도메인(domain)주소이고 127.0.0.1은 현재 사용 중인 컴퓨터를 나타내는 ip주소.

웹 브라우저로 현재 컴퓨터에서 8080포트로 동작하는 서버에 접속하라는 의미.

Tomcat이 기본으로 제공하는 웹 사이트가 보여지는 것을 확인할 수 있다.

![https://cphinf.pstatic.net/mooc/20180102_291/1514871398606UtlJi_PNG/06.png?type=w760](https://cphinf.pstatic.net/mooc/20180102_291/1514871398606UtlJi_PNG/06.png?type=w760)

아파치 톰켓 설치 폴더 아래의 bin폴더에 있는 shutdown.bat파일이나 shutdown.sh파일을 더블클릭하여 실행하면 아파치 톰캣이 종료된다.

혹은, 실행 중인 창을 닫아도 아파치 톰캣은 종료된다.

아파치 톰켓이 종료 된 후 http://localhost:8080으로 다시 접속해보면, 아래의 그림과 같이 오류 화면이 보여지는 것을 확인할 수 있다.

![https://cphinf.pstatic.net/mooc/20180102_180/1514871426129RQdY4_PNG/07.png?type=w760](https://cphinf.pstatic.net/mooc/20180102_180/1514871426129RQdY4_PNG/07.png?type=w760)

## **생각해보기**
1. Apache Tomcat 외에 WAS는 어떤 것 들이 있을까요?
2. WAS가 없으면 웹 어플리케이션은 왜 실행할 수 없을까요?

### 답
1. 레진 , 제이런, 닷넷 애플리케이션 서버, 윈스톤 서블렛 콘테이너, 제티
2. WAS는 웹 응용서버, AS등으로 불리며 웹 애플리케이션과 서버 환경을 만들어 동작시킨다. WAS가 없으면 프로그램 실행환경기능, 데이터베이스 접속 기능, 트랜잭션 관리 기능, 업무 처리 비즈니스 로직 수행등에 문제가 있을 것이다.

## **참고 자료**
> [[참고링크] Apache Tomcat
http://tomcat.apache.org](http://tomcat.apache.org/)

* 아파치톰캣과 아파치웹서버는 다른 제품이다.
* 웹서버와 웹 어플리케이션 서버(was)는 다른 것
* 대표적인 웹서버는 apache, nginx등이 있다.
* 대표적인 웹 어플리케이션 서버(was)는 apche-tomcat등이 있습니다.
* (tomcat의 풀네임은 apache tomcat.)
* apche웹서버와 apache-tomcat은 같은 아파치 재단에서 관리하기에 apache가 앞에 붙기도 하고 백엔드 기술 스택을 apche와 apache tomcat을 함께 사용하는 곳이 많아서 헷갈릴수도 있는데 역할과 제품이 다른 것.

### 기술 스택 예 :
1. nginx와 apache tomcat을 사용한다.
2. apache와 apache tomcat을 사용한다.
3. apache와 다른 was 제품을 사용한다.
4. nginx와 다른 was 제품을 사용한다.


# 6) HelloWorld 서블릿 컴파일 및 실행하기
"Hello World" 출력

자바 웹 어플리케이션을 작성할 수 있는지 간단한 실습.
## **핵심 개념**
- 자바 웹 어플리케이션
- HttpServlet
- Dynamic Web Project
## **URL 주소**

`http://localhost:8080/{프로젝트이름}/{URL Mapping값}`

`http://localhost:8080/firstweb/HelloServlet
`
```java
package examples;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HelloServlet
 */
@WebServlet("/HelloServlet")
public class HelloServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public HelloServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.println("<h1>Hello World</h1>");
	}

}

```

## **생각해보기**
1. 어떤 과정을 거쳐서 브라우져에 'Hello World' 가 출력될까?
### 답
1.  클라이언트가 서버와 http방식으로 연결
2.  서버에 url을 요청
3.  서버는 Servlet을 이용해 결과를 반환

브라우저에서 실행시 브라우저엔진과 렌더링 엔진을 거쳐 화면에 출력된다. 

(파싱→DOM tree, css tree → 렌더링 → painting)
## 추가학습

* 서블렛 servlet이란? 
  * 자바 웹 프로그래밍 기술.
  * 클라이언트 요청에 대한 일을 처리하고 결과를 서블렛이 전송해준다.
  * 예를 들어 클라이언트가 링크를 클릭하면 링크 페이지를 확인하고 링크페이지에 데이타를 요청 후 받아와 클라이언트에게 전송한다.
  * 자바 CGI*라고도 부른다
    * CGI (공용 게이트웨이 인터페이스) : 웹 서버상에서 사용자 프로그램을 동작시키기 위한 조합. 자바 서블렛, 펄 등
