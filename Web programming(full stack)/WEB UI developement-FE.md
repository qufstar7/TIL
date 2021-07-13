> 부스트코스 - 웹 프로그래밍(풀스택)강의를 학습, 정리한 내용입니다.(https://www.boostcourse.org/web316/joinLectures/12943)

# Web UI 개발 - FrontEnd
- [Web UI 개발 - FrontEnd](#web-ui-개발---frontend)
- [1) window 객체(setTimeout)](#1-window-객체settimeout)
  - [window 객체](#window-객체)
  - [`setTimeout`](#settimeout)
    - [`setTimeout` 코드 예시](#settimeout-코드-예시)
  - [참고 1 : 타임아웃](#참고-1--타임아웃)
    - [`setTimeout` 활용](#settimeout-활용)
    - [`setTimeout` 실행 순서](#settimeout-실행-순서)
  - [참고 2 : 콜백함수](#참고-2--콜백함수)
  - [참고 3 : 비동기](#참고-3--비동기)
    - [사례 - jquery의 ajax](#사례---jquery의-ajax)
  - [`setInterval`](#setinterval)
    - [Syntax](#syntax)
    - [팁](#팁)
- [2) DOM](#2-dom)
  - [DOM Tree](#dom-tree)
  - [DOM API](#dom-api)
  - [`getElementById()`](#getelementbyid)
  - [`Element.querySelector()`](#elementqueryselector)
    - [`querySelectorAll`](#queryselectorall)
  - [css selector](#css-selector)
- [3) Browser Event, Event object, Event handler](#3-browser-event-event-object-event-handler)
  - [`Event listener`](#event-listener)
    - [이벤트 등록](#이벤트-등록)
    - [이벤트핸들러(Event Handler) 또는 이벤트리스너(Event Listener)](#이벤트핸들러event-handler-또는-이벤트리스너event-listener)
  - [Event 객체](#event-객체)
    - [`event.target`](#eventtarget)
- [4) Ajax통신의 이해](#4-ajax통신의-이해)
  - [Ajax (XMLHTTPRequest 통신)](#ajax-xmlhttprequest-통신)
  - [JSON](#json)
    - [JSON 기본자료형](#json-기본자료형)
    - [JSON 예제](#json-예제)
  - [AJAX 실행코드](#ajax-실행코드)
    - [`XMLHTTPReqeust`객체 사용 표준방법](#xmlhttpreqeust객체-사용-표준방법)
  - [Ajax로 데이터 받기](#ajax로-데이터-받기)
    - [기본형식](#기본형식)
    - [Ajax GET 방식 데이터 전송](#ajax-get-방식-데이터-전송)
    - [Ajax POST 방식 데이터 전송](#ajax-post-방식-데이터-전송)
    - [정리](#정리)
  - [CORS](#cors)
    - [CORS 관련 HTTP 헤더](#cors-관련-http-헤더)
- [5) Javascript debugging](#5-javascript-debugging)
  - [디버깅 컨트롤](#디버깅-컨트롤)
- [참고 자료](#참고-자료)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# 1) window 객체(setTimeout)
## window 객체
브라우저 개발 - window라는 객체

window에는 많은 함수 존재하며, 아래처럼 사용

window는 디폴트의 개념이므로 생략 가능
```js
window.setTimeout()
setTimeout() //window는 전역객체라서 생략 가능
```

## `setTimeout`
Web API의 한 종류  
코드를 바로 실행 x  
지정한 시간만큼 기다리고 로직 실행  
### `setTimeout` 코드 예시
```js
// #1
console.log('Hello');
// #2
setTimeout(function() {
	console.log('Bye');
}, 3000);
// #3
console.log('Hello Again');
```
## 참고 1 : 타임아웃
timeout : 타임 아웃, 중간 휴식

전기 통신과 관련 공학(컴퓨터 네트워크, 프로그래밍) 분야에서, 타임아웃(timeout, time-out)이라는 용어는 여러 의미를 내포

* 강제된 사건과 관련한 네트워크 파라미터.
* 특정 이벤트가 발생하기 전 시스템의 지연을 허용할 특정한 시간. 
* 다른 특정 이벤트의 발생이 시작한, 미리 정해둔 시간의 끝에 발생되는 이벤트.
>[타임아웃](https://ko.wikipedia.org/wiki/%ED%83%80%EC%9E%84%EC%95%84%EC%9B%83_(%EC%BB%B4%ED%93%A8%ED%8C%85))

### `setTimeout` 활용
`setTimeout`은 낯설게 동작

자바스크립트는 함수를 인자로 받을 수 있는 특징이 있다.

참고로 함수를 반환가능.

```js
function run() {
    setTimeout(function() {
        var msg = "hello codesquad";
        console.log(msg);  //이 메시지는 즉시 실행되지 않습니다.
    }, 1000);
}

run();
```

`setTimeout`의 특성을 잘 이해하고, 지연실행이 필요한 경우에 활용

### `setTimeout` 실행 순서

`setTimeout`의 실행은 비동기(asynchronous)로 실행되어 동기적인 다른 실행이 끝나야 실행

```js
function run() {
    console.log("start");
    setTimeout(function() {
        var msg = "hello codesquad";
        console.log(msg);  //이 메시지는 즉시 실행되지 않습니다.
    }, 1000);
    console.log("end");
}

run();
```

즉 `setTimeout` 안의 함수(콜백함수)는 `run`함수의 실행이 끝나고 나서 실행(정확히는 stack에 쌓여있는 함수의 실행이 끝나고 나서 실행됨)

디버거를 통해서 이를 스스로 직접 확인

## 참고 2 : 콜백함수
인자로 함수를 받고 있으며, 보통 나중에 실행되는 함수

Callback 함수

보통은 즉시 실행되지 않고, 나중에 필요한 시점에 실행되거나, 실행이 안 될 수도 있다.

callback의 의미를 단어에서 좀 더 유추해보면 호출한 (call) 대상에서 되부름 (call back)되기 때문에 callback이라고 한다.

실제로 callback 함수를 전달받은 쪽의 필요에 따라 즉시 실행될 수도 있다. ( ex> array.map(callback) )

로직의 순서가 원하는 순서대로 나오지 않을 경우 콜백 함수(setTimeout 과 같은)를 사용하여 해결할 수 있다.(특정 로직이 끝났을 때 원하는 동작을 실행)


## 참고 3 : 비동기
자바스크립트의 비동기 처리란  
특정 코드의 연산이 끝날 때까지  
코드의 실행을 멈추지 않고  
다음 코드를 먼저 실행하는  
자바스크립트의 특성
### 사례 - jquery의 ajax
이미지나 데이터를 서버에서 불러올 때 ajax통신을 이용
* ajax 코드 예시
    ```js
    function getData() {
        var tableData;
        $.get('https://domain.com/products/1', function(response) {
            tableData = response;
        });
        return tableData;
    }

    console.log(getData()); // undefined
    ```
    *  $.get()이 ajax 통신을 하는 부분
    * `https://domain.com` 에다가 HTTP GET 요청을 날려 1번 상품(product) 정보를 요청하는 코드
    * 지정된 URL에 ‘데이터를 하나 보내주세요’ 라는 요청을 날리는 것과 같다.

## `setInterval`
`setInterval()` 메소드는...  
1. 특정한 간격(밀리 초)에 따라 함수를 호출하거나 표현식을 평가
2. `clearInterval()` 이 호출되거나 창이 닫힐 때까지 함수를 계속 호출
### Syntax
```js
setInterval(function, milliseconds, param1, param2, ...)
```
### 팁
1. 1000 ms = 1 second.
2. 함수를 한 번만 실행하려면 지정된 밀리 초 후에 setTimeout () 메서드를 사용
3. 파라미터 `milliseconds`를 10보다 작게 설정하면 10이 사용됨.
> [Window setInterval() Method](https://www.w3schools.com/jsref/met_win_setinterval.asp)


# 2) DOM
## DOM Tree
브라우저에서는 HTML코드를 DOM(Document Object Model)이라는 객체형태의 모델로 저장  
그렇게 저장된 정보를 **DOM Tree**라고 합니다.  
결국 HTML element는 Tree 형태로 저장됨.  
![DOM_tree](image/DOM_tree.png)

## DOM API
복잡한 DOM Tree를 탐색하기 위해 JavaScript로 탐색알고리즘을 구현하는 것은 힘들다.  
그래서 브라우저에서는 DOM(document object model)이라는 개념을 통해서, 다양한 DOM API를 제공  
브라우저는 DOM Tree찾고 조작하는 걸 쉽게 도와주는 여러 가지 메서드를(DOM API)를 제공
## `getElementById()`

ID 정보를 통해서 요소 찾기 가능  
주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환  
ID는 문서 내에서 유일해야 하기 때문에 특정 요소를 빠르게 찾을 때 유용  
ID가 없는 요소에 접근하려면 `Document.querySelector()`를 사용
> MDN 실습  
> (https://developer.mozilla.org/ko/docs/Web/API/Document/getElementById)

## `Element.querySelector()` 
DOM을 찾는데 특히 유용한 `querySelector` 메서드  
CSS 스타일을 결정할 때 사용하던, Selector 문법을 활용해 DOM에 접근 가능  
DOM을 찾을 때 `querySelector`만 써도 충분  
### `querySelectorAll`
지정된 셀렉터 그룹에 일치하는 문서의 요소 목록을 나타내는 정적(살아 있지 않은) NodeList 를 반환  

1. 다큐먼트에서 모든 `<p>` 엘리먼트의 NodeList 를 얻으려면:
    ```js
    var matches = document.querySelectorAll("p");
    ```
2. 다큐먼트 내의 클래스가 "note" 또는 "alert" 인 모든 <div> 엘리먼트의 목록을 반환
    ```js
    var matches = document.querySelectorAll("div.note, div.alert");
    ```
3.  ID 가 "test" 인 컨테이너안에 위치하고 부모 엘리먼트가 div 엘리먼트이며 클래스가 "highlighted" 인 <p> 엘리먼트의 리스트
    ```js
    var container = document.querySelector("#test");
    var matches = container.querySelectorAll("div.highlighted > p");
    ```
4.  속성 셀렉터를 사용해 다큐먼트에서 "data-src" 속성을 포함하는 iframe 엘리먼트의 리스트를 반환
    ```js
    var matches = document.querySelectorAll("iframe[data-src]");
    ```
5.  ID 가 "userlist" 인 리스트 내에서 "data-active" 속성 값이 "1" 인 리스트 항목의 목록을 반환하는데 속성 셀렉터가 사용
    ```js
    var container = document.querySelector("#userlist");
    var matches = container.querySelectorAll("li[data-active='1']");
    ```
## css selector
selector문법은 querySelector와 querySelectorAll메서드에서 사용할 수 있으며, css 스타일을 부여했을 때 익혔던 selector문법과 동일하다고 생각하고 사용 가능  
다양한 css selector문법을 사용해서 원하는 엘리먼트를 찾을 수 있다.
>[CSS_Selectors](..\web\css\CSS_Selectors.md)

# 3) Browser Event, Event object, Event handler
어떤 영역을 마우스 클릭하거나, 화면을 스크롤 하거나 하는 작업에 따라서 브라우저는 반응한다.

이런 것들은 모두 브라우저가 Event기반으로 동작되게 만들어졌기 때문
## `Event listener`
브라우저에는 많은 이벤트가 발생

* 브라우저 화면의 크기를 마우스로 조절할 때도,  
* 스크롤을 할 때도,  
* 마우스로 이동하거나
* 무언가를 선택할 때도  
이벤트가 발생

이벤트를 브라우저가 발생시켜주니, 
그 때 어떤 일을 하라고 할 수 있다.

즉, HTML엘리먼트별로 어떤 이벤트(주로 키보드나 마우스 관련)가 발생했을 때 특정 행위를(어떤 일) 하고 싶다면, 대상 엘리먼트를 찾고 어떤 일을 등록 하면 된다.

### 이벤트 등록

이벤트 등록 표준방법

`addEventListener` 함수를 사용 가능

```js
var el = document.querySelector(".outside");
el.addEventListener("click", function(){
//do something..
}, false);
```
`addEventListene`r 함수의 두 번째 인자는 함수

### 이벤트핸들러(Event Handler) 또는 이벤트리스너(Event Listener)
나중에 이벤트가 발생할 때 실행되는 함수

콜백함수는 이벤트가 발생할 때 실행됨.

## Event 객체
브라우저는 이벤트 리스너를 호출할 때, 사용자로부터 어떤 이벤트가 발생했는지에 대한 정보를 담은 이벤트 객체를 생성해서 리스너 함수에 전달

따라서 이벤트리스너 안에서는 이벤트객체를 활용해서 추가적인 작업이 가능해짐.

```js
var el = document.getElementById("outside");
el.addEventListener("click", function(evt){
 console.log(evt.target);
 console.log(evt.target.nodeName);
}, false);
```
### `event.target`

`event.target`은 이벤트가 발생한 element를 가리킴.

element도 객체이므로 안에 nodeName이나 classname과 같이 element가 가진 속성을 사용 가능

# 4) Ajax통신의 이해
## Ajax (XMLHTTPRequest 통신)
이 기술은 웹에 데이터를 갱신할 때, 브라우저 새로고침 없이 서버로부터 데이터를 받는 것이 좋겠다는 생각에서 출발

ajax를 사용하면..
* 페이지를 다시 로드하지 않고 웹 페이지 업데이트
* 서버에서 데이터 요청 - 페이지가 로드 된 후
* 서버에서 데이터 수신 - 페이지가 로드 된 후
* 서버로 데이터 보내기 - 백그라운드에서

동적으로 필요한 시점에 컨텐츠를 불러오는 기술로 더 효율적으로 웹페이지를 이용할 수 있다.

## JSON
Ajax 통신으로는 XML, Plain Text, JSON 등 다양한 포맷의 데이터를 주고받을 수 있지만, 일반적으로 사용이 편리한 JSON포맷으로 데이터를 주고 받는다.

JSON : JavaScript Object Notation

비동기 브라우저/서버 통신 (AJAX)을 위해, 넓게는 XML(AJAX가 사용)을 대체하는 주요 데이터 포맷

자바스크립트의 구문 형식을 따른다.
자바스크립트에서 eval 명령으로 곧바로 사용할 수 있다.

언어 독립형 데이터 포맷으로 C, C++, java, javascript, python 등 다양한 프로그래밍 언어에서 쉽게 이용 가능

### JSON 기본자료형
* 수(Number)
    * 표현법 예시
        * 정수
            ```json
            74
            1974
            750
            -114
            -273
            ```
        * 실수(고정 소수점)
            ```json
            3.14
            -2.718
            ```
        * 실수(부동 소수점)
            ```json
            1e4
            2.5e12
            3.4e+4
            4.56e-8
            5.67E+10
            6.78E-5
            ```

* 문자열(String)  
    0개 이상의 유니코드 문자들의 연속.  
    문자열은 큰 따옴표(")로 구분  
    역슬래시 이스케이프 문법을 지원
    * 역슬래시 제어문자
        * `\b` 백스페이스
        * `\f` 폼 피드
        * `\n` 개행
        * `\r` 캐리지 리턴
        * `\t` 탭
        * `\"` 따옴표
        * `\/` 슬래시
        * `\\` 역슬래시
        * `\uHHHH` 16진수 네자리로되어 있는 유니코드 문자 
   
* 참/거짓(Boolean)  
    true 또는 false 값

* 배열(Array)  
    0 이상의 임의의 종류의 값으로 이루어진 순서가 있는 리스트.  
    대괄호로 나타내며 요소는 쉼표로 구분
    * 예시
        ```json
        [10, {"v": 20}, [30, "마흔"]]
        ```  
* 객체(Object)  
    순서가 없는 이름/값 쌍의 집합  
    이름(키)이 문자열
    * 예시
        ```json
         {"name2": 50, "name3": "값3", "name1": true}
         ```

* null  
    빈 값으로 null을 사용

### JSON 예제
키-값 쌍(이름:값)의 패턴으로 표현
```json
{
    "이름": "홍길동",
    "나이": 25,
    "성별": "여",
    "주소": "서울특별시 양천구 목동",
    "특기": ["농구", "도술"],
    "가족관계": {"#": 2, "아버지": "홍판서", "어머니": "춘섬"},
    "회사": "경기 수원시 팔달구 우만동"
 }
```

## AJAX 실행코드
### `XMLHTTPReqeust`객체 사용 표준방법
```js
function ajax(data) {
 var oReq = new XMLHttpRequest();
 oReq.addEventListener("load", function() {
   console.log(this.responseText);
 });    
 oReq.open("GET", "http://www.example.org/getData?data=data");//parameter를 붙여서 보낼수있음. 
 oReq.send();
}
```
## Ajax로 데이터 받기
### 기본형식
```js
$(document).ready(function(){
	$.ajax({
		type: //데이터 전송 타입,
		url : //데이터를 주고받을 파일 주소 입력,
		data: //보내는 데이터,
		dataType://문자형식으로 받기 , 
		success: function(result){
			//작업이 성공적으로 발생했을 경우
		},
		error:function(){  
            //에러가 났을 경우 실행시킬 코드
		}
	})
});
```
### Ajax GET 방식 데이터 전송
```js
$(document).ready(function(){
	$.ajax({
		type: 'get',   //get방식으로 명시
		url : 'jQueryAjax01_data.jsp',  //이동할 jsp 파일 주소
		dataType:'text',   //문자형식으로 받기
		success: function(data){   //데이터 주고받기 성공했을 경우 실행할 결과
            //function(data)를 쓰게 되면 전달받은 데이터가 data안에 담아서 들어오게 된다. 
			alert(data);   
		},
		error:function(){   //데이터 주고받기가 실패했을 경우 실행할 결과
			alert('실패');
		}
	})
});
```
* 데이터를 주고받는 파일.jsp
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
내용 여기 입력
```

### Ajax POST 방식 데이터 전송
(HTML형식으로)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form>
<label>이름을 입력하세요</label>
<input type="text" name="username" class="user">   //이름을 입력하는 text 상자
<input type="button" id="submit" value="입력">   //버튼을 누르면 스크립트 실행
</form>
<br><br>
<div id="message"></div>
</body>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
$(document).ready(function(){
	$('#submit').click(function(){   //submit 버튼을 클릭하였을 때
		let sendData = "username="+$('input[name=username]').val();   //폼의 이름 값을 변수 안에 담아줌
		$.ajax({
			type:'post',   //post 방식으로 전송
			url:'jQueryAjax02_data.jsp',   //데이터를 주고받을 파일 주소
			data:sendData,   //위의 변수에 담긴 데이터를 전송해준다.
			dataType:'html',   //html 파일 형식으로 값을 담아온다.
			success : function(data){   //파일 주고받기가 성공했을 경우. data 변수 안에 값을 담아온다.
				$('#message').html(data);  //현재 화면 위 id="message" 영역 안에 data안에 담긴 html 코드를 넣어준다. 
			}
		});
	});
});
</script>
</html>
```
>> 이름을 입력하고 submit 버튼을 클릭하면 이름이 jsp파일로 전송
* .jsp 파일  
html 코드를 입력
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
나의 이름은 <strong>${param.username }</strong> 입니다. 
```
### 정리
* ajax를 통해 데이터를 한번에 필요할 때 동적으로 불러와서 웹페이지 화면을 구성할 수 있다.
* JSON 형식으로 데이터들이 들어있는 파일로부터 데이터를 받아 ajax할 수 있다
* GET 방식 POST 방식으로 데이터를 전송할 수 있다.
* Ajax 안에 Ajax를 이중으로 사용할 수 있다.
> 정리자료 참고 [Ajax basic.md](../web/ajax%20basic.md)

## CORS
교차 출처 리소스 공유 (Cross-origin resource sharing)  

교차 출처 자원 공유는 웹 페이지 상의 제한된 리소스를 최초 자원이 서비스된 도메인 밖의 다른 도메인으로부터 요청할 수 있게 허용하는 구조

웹페이지는 교차 출처 이미지, 스타일시트, 스크립트, iframe, 동영상을 자유로이 임베드할 수 있다.

### CORS 관련 HTTP 헤더
* 요청 헤더
  * Origin
  * Access-Control-Request-Method
  * Access-Control-Request-Headers
* 응답 헤더
  * Access-Control-Allow-Origin
  * Access-Control-Allow-Credentials
  * Access-Control-Expose-Headers
  * Access-Control-Max-Age
  * Access-Control-Allow-Methods
  * Access-Control-Allow-Headers


# 5) Javascript debugging
debugging : 프로그래밍에서 디버깅은 버그를 잡아버리는 것.

크롬개발자 도구를 이용해서 디버깅을 하는 습관을 들이자.

소스코드를 건드리지 않고 여러 가지 수정을 해보거나 테스트해볼 수 있다.

## 디버깅 컨트롤
* Pause, Continue : 첫 번째 버튼은 평소에는 Pause 버튼 상태인데 브렉포인트가 잡힌 상태에선 Continue 버튼이 됩니다. 다른 브레이크포인트가 잡힐 때까지 코드를 진행합니다.
* Step over next function call : 스텝 오버는 코드 라인을 한 스탭 진행하는데 현재 실행 라인에 함수 실행 코드가 있다면 함수는 실행하는데 이때 함수 안의 코드로는 진입하지 않습니다. 즉 라인의 함수를 실행만 하게 됩니다.
* Step into next function call : 스텝 인투는 스텝 오버와 다르게 현재 실행 라인의 코드에 함수가 있다면 함수 안의 첫 번째 코드로 진입해 들어가 다시 하나씩 라인별로 코드를 실행할 수 있습니다.
* Step out of current function : 스텝 인투로 들어온 함수를 끝까지 실행하고 밖으로 빠져나와 해당 함수를 실행한 함수로 돌아갑니다.
* Active/Deactive breakpoint : 브레이크포인트를 끄거나 켤 수 있습니다.
* Pause on exception : 자바스크립트 예외가 발생하면 해당 위치에 브레이크포인트를 잡아줍니다.

# 참고 자료
* > [자바스크립트 비동기 처리와 콜백 함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
* > [MDN - WindowOrWorkerGlobalScope.setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
* > [wikipedia - JSON](https://ko.wikipedia.org/wiki/JSON)
* > [MDN - Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
* > [[AJax] 데이터 전송하기(GET,POST,JSON)|작성자 Ohsanrim](https://blog.naver.com/PostView.nhn?blogId=ka28&logNo=222038499551)
* > [wikipedia - CORS](https://ko.wikipedia.org/wiki/%EA%B5%90%EC%B0%A8_%EC%B6%9C%EC%B2%98_%EB%A6%AC%EC%86%8C%EC%8A%A4_%EA%B3%B5%EC%9C%A0)