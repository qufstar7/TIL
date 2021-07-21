> 부스트코스 - 웹 프로그래밍(풀스택)강의를 학습, 정리한 내용입니다.(https://www.boostcourse.org/web316/joinLectures/12943)

- [browser의 동작](#browser의-동작)
  - [핵심 개념](#핵심-개념)
  - [브라우저의 동작](#브라우저의-동작)
  - [크로미움](#크로미움)
  - [**생각해보기**](#생각해보기)
- [browser에서의 웹 개발](#browser에서의-웹-개발)
  - [**핵심 개념**](#핵심-개념-1)
  - [**HTML 문서구조**](#html-문서구조)
  - [**알게 된 몇 가지 특징**](#알게-된-몇-가지-특징)
  - [**실습코드**](#실습코드)
  - [참고 자료](#참고-자료)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# browser의 동작
웹을 통해서 전달되는 데이터는 어딘가에서 해석돼야 한다.

서버에서 전송한 데이터(HTML과 같은)가 클라이언트에 도착해야 할 곳은 'Browser'.

Browser에는 데이터를 해석해주는 파서와 데이터를 화면에 표현해주는 렌더링엔진이 포함되어 있다.

이런 작업의 대부분은 브라우저 내부에서 이뤄지기 때문에 반드시 알아야 하는 것은 아니다. 하지만 브라우저의 내부를 이해하면 웹 개발을 하면서 맞닥뜨리는 난해한 문제를 해결할 수 있고, 보다 최적화된 웹개발을 할 수 있다.
## 핵심 개념
* Web Browser Rendering
## 브라우저의 동작
인터넷에서 특정 정보로 이동할 수 있는 주소 입력창이 있고 서버와 HTTP로 정보를 주고 받을 수 있는 네트워크 모듈도 포함하고 있다.

그리고 서버에서 받은 문서(HTML, CSS, Javascript)를 해석하고 실행하여 화면에 표현하기 위한 해석기(Parser)들을 가지고 있다.

브라우저마다 서로 다른 엔진을 포함하고 있다.

아래 그림이 대표적인 내용.

![webkitRenderingEngine](image/webkitRenderingEngine.png)
> 출처 https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/

HTML을 해석해서 DOM Tree를 만들고, CSS를 해석해서 역시 CSS Tree(CSS Object Model)을 만든다. 

이 과정에서 Parsing 과정이 필요

토큰 단위로 해석되는 방식은 일반적인 소스코드의 컴파일 과정

DOM Tree와 CSS Tree, 이 두 개는 연관되어 있으므로 Render Tree로 다시 조합

이렇게 조합된 결과는 화면에 어떻게 배치할지 크기와 위치 정보를 담고 있다.

이후에 이렇게 구성된 Render Tree정보를 통해서 화면에 어떤 부분에 어떻게 색칠을 할지 Painting과정을 거치게 된다.
## 크로미움
크로미움은 V8 + Blink을 포함한 구글 브라우저 오픈소스 애플리케이션

또한 크롬은 바로 이 크로미움을 기반으로 만들어진다

크로미움은 여전히 렌더링 엔진으로 Blink를(webkit에서 fork된) 사용

Blink 라는 용어보다도 보통  크롬의 크로미움을 주로 이야기하지만, Blink가 크로미움으로 바뀐 것이 아님

브라우저는 월드와이드웹(WWW)에서 정보를 검색, 표현하고 탐색하기 위한 소프트웨어
## **생각해보기**
1. 우리가 흔히 브라우저 탐색을 할 때 스크롤을 하거나, 어떤 것을 클릭하면서 화면의 위치를 바꿀 때, 브라우저는 어떻게 다시 화면을 그릴까?
2. 위에서 표현된 그림처럼 다시 렌더링 되지 않을까?

* 화면의 내용과 스타일요소가 바뀌지 않았으므로 랜더링을 할 필요는 없을 것이고 재배치하고 그림을 그리고 보여준다. 

# browser에서의 웹 개발
HTML, CSS, JavaScript의 소스코드를 통한 웹페이지 소스의 구성
## **핵심 개념**
- Browser 안에서 동작할 수 있는 HTML, CSS, JavaScript의 코드구현 방법
## **HTML 문서구조**
1. 먼저 크롬브라우저가 없다면 설치하기
2. 크롬 브라우저를 열고 크롬 개발자도구 열기
3. 윈도우 (Ctrl + Shift + I) / 맥(Option + Command + i)
4. 접속 : [http://www.amazon.com](http://www.amazon.com/)

## **알게 된 몇 가지 특징**
- HTML문서는 html이라는 태그로 시작해서 html태그로 끝난다.
- head는 무엇?
- body는 무엇?
- HTML은 계층적.
- HTML은 tag를 사용해서 표현.
```html
<tag class="title">안녕하세요</tag>
```
- JavaScript와 CSS가 html 안에 여기저기 존재.
## **실습코드**
```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>저를소개해요</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/start.js"></script>
  </head>
  <body>
    <h1>안녕하세요</h1>
    <div>qufstar7 KJH라고 합니다</div>
    <script src="js/library.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```
HTML 문서 안에 HTML태그뿐 아니라 CSS, JavaScript코드가 존재.

JavaScript 코드는 body 태그 닫히기 전에 위치하는 것이 렌더링을 방해하지 않아도 좋고, css코드는 head 안에 위치해서 렌더링 처리 시에 브라우저가 더 빨리 참고할 수 있게 하는 것이 좋다.

## 참고 자료
> [참고링크] How Browsers Work: Behind the scenes of modern web browsers
https://www.html5rocks.com

> [참고링크] 브라우저는 어떻게 동작하는가?
http://d2.naver.com

> [참고링크] How Browsers Work: Behind the scenes of modern web browsers
(https://d2.naver.com/helloworld/59361)

> [참고링크] 웹에서 html, css, javascript를 쉽게 테스트 할 수 있는 웹사이트
http://www.jsbin.com