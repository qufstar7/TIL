# 파트 1 웹 프로그래밍 기초 내용 정리

## 1. 웹 프론트 엔드

### 1) 프론트와 백엔드의 역할과 관계

- 프론트엔드 (보여지는 부분, 클라이언트의 입장에서 개발-클라이언트 사이드)
    - 사용자에게 웹을 통해 다양한 콘텐츠(문서, 동영상, 사진 등)를 제공
    - 사용자의 요청에 반응해서 동작

- 프론트 엔드의 역할
    - 웹콘텐츠를 잘 보여주기 위해 구조를 만듦(신문, 책 등과 같이)
    - 적절한 배치와 일관된 디자인 등을 제공해야함
    - 사용자의 요청을 잘 반영해야(소통하듯이)

- 백엔드 (보이지 않는 부분, 서버입장에서 개발-서버사이드)
    - 백엔드 개발자는 클라이언트의 요청을 받아서 일을 처리한 후에 그 결과를 넘겨주는 부분을 개발한다.(클라이언트가 제시한 문제를 해결)

        ex)인터넷게시판- 클라이언트가 첫 번째 페이지의 게시물 목록을 주세요라고 요청하면 그 결과를 만들어서 클라이언트에게 전송한다.

    - 정보를 처리하고 저장하며, 요청에 따라 정보를 내려주는 역할

        ex)쇼핑몰 - 상품정보를 가지고 있고 ,주문을 받아서 저장하고, 사용자가 관심있어 하는 상품을 골라주는 역할을 백엔드가 한다.

- 백엔드 개발자가 알아야 할 것들.
    - 프로그래밍 언어(java, python, php, javascript 등)중 하나를 잘 알아야 한다.
    - 뿐만 아니라 컴퓨터 전반적인 부분들도 잘 알아야 한다.

        ex) ****웹의 동작 원리, 알고리즘, 자료구조, 운영체제(리눅스), 네트워크, 프레임워크(반제품), DBMS****

- 프론트엔드와 백엔드의 관계 + 웹퍼블리셔
    - 둘을 합쳐서 풀스택 개발자라 한다. 웹 개발의 위주로 볼 때 백엔드는 DB와 API 서버 개발을 주로 맡고 프론트엔드 개발자는 백엔드 API에서 가져온 데이터의 출력, 입력을 통한 비즈니스 로직 구성과 UI 부분을 작업한다.
    - 웹 퍼블리셔(UI개발자)는 프론트엔드와 비슷한 직종으로 웹 표준 반응형 웹과 UI를 만드는 디자인 쪽에 가깝고 데이터 처리, 비즈니스 로직을 개발하진 않는다. 요즘은 마크업 개발자라고 부른다.

### 2) HTML로 웹페이지 구조설계

- HTML은 어떤 요구 사항이 있을 때 기획서라고 볼 수 있다.
- 그 화면에 있는 내용들을 분석해서 어떻게 계층적으로 HTML태그를 통해서 표현할수 있는가 하는 연습이 필요하다.

### 3) CSS 레이아웃에 필요한 속성과 활용방법

- 모든 css 속성들을 외울 필요는 없지만
- 원하는 부분에 원하는 크기로 어떻게 배치할 수 있는가
- 하는 원리 단계에서 이해하는 것이 중요하다
    - position, float 속성들을 통한 배치

## 2. 웹 백엔드

### 1) 웹 개발에 대한 이해

- 웹 브라우저와 서버 간의 통신방법 - HTTP를 통해 알아봤다
- 프론트-백 엔드의 차이

### 2) 개발 환경 설정

- 자바언어를 이용해 웹 애플리케이션을 개발하기 위한 환경 설정 - JDK, IDE(eclipse), 서버(톰캣) 설치, 환경변수설정
- 실습 - HelloJavaWorld 출력

### 3) 서블릿(Servlet)

- 자바에서는 동적인 웹페이지를 만들 때 사용되는 가장 기본적인 방법이 서블릿을 작성하는 것
- 서블릿은 HTTP 서블릿을 상속을 받아서 개발
- 사용자가 어떤 방식으로 요청을 했느냐에 따라서  doGet(), doPost()그리고 service() 이런 메서드들을 오버라이딩해서 개발
- 또한, 서블릿 라이프 사이클을 배울 때
    - 서블릿이 첫 번째 호출될 때만 동작하는 init() 메서드.
    - 서블릿이 갱신됐을 때 호출되는 destroy() 메서드.
- 마지막으로 또 굉장히 중요한 요청과 응답에 대한 학습들도 진행을 했어요.