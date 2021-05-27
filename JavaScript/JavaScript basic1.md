>> 생활코딩 WEB2 - JavaScript을 학습, 정리한 내용입니다. (https://opentutorials.org/course/3085)

# Java basic 2
* 1강~11강
    1. about JavaScript
    2. Script(html-js 만남)
    3. Event(html-js 만남)
    4. Console(html-js 만남)
    5. 변수와 대입연산자
    6. 웹브라우저 제어    
    7. css기초
    8. 제어할 태그 선택하기
    9. 프로그램, 프로그래밍, 프로그래머
    10. 비교연산자와 블리언
    11. 조건문
    12. 리팩토링 중복의 제거
    13. 배열
    14. 반복문
    15. 배열과 반복문
    16. 함수
    17. 객체
    18. 파일로 쪼개서 정리 정돈 하기
    19. 라이브러리와 프레임워크
    20. UI vs API
    21. 추가 공부할 주제

# 1. about JavaScript
## JavaScript는?
줄여서 JS라 하는데 웹 브라우저에서 주로 사용한다. node.js, adobe acrobat 등 브라우저가 아닌 환경에서도 사용된다. 

동적으로 컨텐츠를 바꾸고 멀티미디어를 다루고 움직이는 이미지 그 밖에 많은 복잡한 일들을 할 수 있느 스크립트 언어이다.

자바스크립트는 클라이언트 쪽에서 즉, 웹(브라우저)에서 실행되고 웹 페이지에서 이벤트가 발생시 어떻게 작동하는지 프로그래밍할 수 있다.

### 라이브러리
최근에는 순수한 자바스크립트를 이용해서 웹브라우저를 제어하는 방법은 잘 사용하지 않는다. 

대신 더 적은 코드로 더 강력한 각종 라이브러리를 사용한다. 대표적인 라이브러리는 jQuery다. 

라이브러리를 활용하는 방법을 익히고 스스로 스크립트를 짜는 방법 또한 익혀야 한다.

### 역사
넷스케이프 커뮤니케이션즈 코퍼레이션의 Brendan Eich가 Mocha 라는 이름으로 나중에는 LiveScript라는 이름으로 개발, 최종적으로 JavaScript가 되었다.

Java와 유사한 점도 있지만 두 언어 모두 C 언어의 기본 구문에 바탕을 뒀기 때문이고 Java와 JavaScript는 직접적인 관련성이 없다. 오히려 JavaScript는 셀프나 스킴과 유사성이 많다. 

### "Hello, World!" 프로그램
```html
<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
    <title>자바스크립트 페이지</title>
    <script type="text/javascript">
		document.write("<p>Hello World!</p>");
		</script>
	</head>
  <body>
		<noscript>
		  <p>브라우저가 자바스크립트 기능을 지원하지 않거나 자바스크립트 기능이 꺼져 있습니다.</p>
		</noscript>
	</body>
</html>
```

### 기본적인 문법
Java와 C++의 if, for, while, switch, try...catch 구문을 사용한다.

변수는 var, let, const 키워드를 사용한다.

```jsx
var v;
var v2 = undefined;
let v;
let v2 = undefined;
const c = "variable name"; // const는 명시적으로 할당되어야 한다.

let thing = 2;
thing = "phone";
// 변수 'thing'에 String 리터럴 'phone'을 할당한다.
// 자바스크립트는 동적타입의 언어로 가능하다
```

### 자바스크립트의 리터럴
자바스크립트는 리터럴 표기법을 이용해, 필요한 요소들을 열거하는 것 만으로 객체를 만들 수 있다. 

```jsx
var empty_object = {} //빈 객체
var stooge = {
    first_name : "Jerome",
    last_name : "Howard"
}
```


# 2. script
2021년 3월 16일 화요일
오후 1:05

```javascript
<script>
</script>
```

* 웹브라우저는 script태그 안의 코드는 자바스크립트로 해석한다.

* ```document.write(1+1);```
을 실행시키면 웹 브라우저는 자바스크립트로 해석해 2를 출력한다.

* 자바스크립트로 웹브라우저에서 문자를 출력할때는 document.write를 쓴다.


# 3. event

2021년 3월 16일 화요일
오후 1:06

1. ```<Input type="button" value="hi">```
<Input type="button" value="hi">

* 검색) javascript alert

2. ```<Input type="button" value="hi" onclick="alert"('hi')">```
<Input type="button" value="hi" onclick="alert('hi')">

* Onclick 속성값은 반드시 js코드가 와야 된다.

## 이벤트란?

* 웹브라우저는 onclick 속성을 만나면 사용자가 클릭하면 자바스크립트를 실행한다.

* 웹브라우저 위에서 일어나는 일들을 이벤트라고 한다.

* 이벤트 // 버튼 눌렀을때 자바스크립트가 실행되는 것.

* Ex) 
  * onclick 
  * onchange
  * onkeydown

3. ```<input type="text" onchange="alert('changed')">```
<input type="text" onchange="alert('changed')">

* 검색) javascript keydown event attribute - 
Onkeydown event attribute

4. ```<input type="text" onkeydown="alert('key down!')">```
<input type="text" onkeydown="alert('key down!')">

html event attribute 이벤트 속성
> 출처 : https://www.w3schools.com/tags/ref_eventattributes.asp


# 4. console

2021년 3월 16일 화요일
오후 1:22

* Website > 우클릭 > 검사 > console

* Js 코드 연습가능

## ----연습내용-----
```
문단~~~.length > 문자갯수
alert(1);
Undefined  > 화면상에 출력
alert(1+1);
undefined  > 화면상에 출력
1+1
2
2-1
1
2*4
8
6/2
3
"hello world"
"hello world"
'hello world'
"hello world"
'hello world'.length
11
'hello world'.toUpperCase()
"HELLO WORLD"
'hello world'.indexOf('0')
-1  >> 없는 값이다.
'hello world'.indexOf('o')
4
'hello world'.indexOf('world')
6
'             hello          '
"            hello          "
'             hello          '.trim()
"hello"
```


# 5. 변수와 상수, 연산자

2021년 3월 16일 화요일
오후 2:31

### Variable vs constant

* X,y>> 값이 변할 수 있다.

* 1,2>>값 변x 상수.

* '=' : 대입연산자

* Var name = "leechze"


# 6. 웹브라우저 제어

2021년 3월 16일 화요일
오후 2:42

* Js는 html이 하지 못하는 동적인 화면의 변화를 실행시킬수 있다.

* Js를 이용하면 웹브라우저를 제어할 수 있다.


# 7. 간단한 Css문법 

2021년 3월 16일 화요일
오후 2:55

* onclick안에 javascript가 오는 것과 마찬가지로
style 속성안에는 css가 온다라고 html에서 약속되어 있음.

* Div 무색무취로 감싼다 but 줄바꿈 됨.
span 무색무취에 줄바꿈 x

* *선택자
Id는 식별, class는 그루핑 하는 것.

* Tag와 Class로 전체적으로 디자인하고
Id로 부분부분 예외처리한다.

* Id class tag 순으로 우선순위가 높다.


# 8. 제어할 태그 선택하기

2021년 3월 16일 화요일
오후 4:15

1. ```<input type="button" value="night" onclick="">```
   <input type="button" value="night" onclick="">

* 검색) Javascript select tag by css seletor

2. ```<input type="button" value="night" onclick="document.querySelector('body')">```
   <input type="button" value="night" onclick="document.querySelector('body')">
    

* 검색)javascript element style

3. ```<input type="button" value="night" onclick="document.querySelector('body').style">```
   <input type="button" value="night" onclick="document.querySelector('body').style">

* 검색)javascript style background-color

4. ```<input type="button" value="night" onclick="document.querySelector('body').style.backgroundColor = 'black';">```
   <input type="button" value="night" onclick="document.querySelector('body').style.backgroundColor = 'black';">


# 9. 프로그램, 프로그래밍, 프로그래머

2021년 3월 16일 화요일
오후 5:51

### HTML과 프로그래밍
    Html은 프로그래밍 언어라고 하지 않는다.
    Html은 순서에 따라 작동되도록 하는 기능x
    웹페이지를 묘사하는 목적의 언어. 시간의 순서 중요x
    
### 프로그래밍 언어란? 
    음악회 시간에 흐름에 따라 음악이 연주되는 순서가 있다.
    이 순서를 프로그램이라고 했다
    프로그램 에는 순서라는 의미가 있다
    순서를 만드는 행위가 프로그래밍. 순서를 만드는 사람이 프로그래머
    순서대로 컴퓨터가 작동 또 반복하여 컴퓨터가 작동 이러한 순서를 매기는 과정이 프로그래밍.
    자바스크립트를 이용해 여러개의 명령어를 시간의 순서에 따라 작동하도록 명령할 수 있다.


# 10. 비교 연산자와 블리언

2021년 3월 16일 화요일
오후 6:21

* ===연산자

        document.write(1===1);
    === 의미 왼쪽 1과 오른쪽 1이 같은가?

            1===1
            true
            1===2
            false

* 연산자 표현  

   *  ```<h3>1&lt;2</h3>``` <h3>1&lt;2</h3>

   *  ```<script>document.write(1<2);</script>``` 
 
        1<2

        true

   * ```&lt;``` 의미 : < , ```&gt;``` 의미 : >


* 데이터 타입
    * Number 숫자 : 무한히 많음
    * String 문자 : 엄청나게 많음
    * Boolean : 단 2개(true, false)


* boolean

    * True와 false
     주로 참은 1, 거짓은 0에 대응. 숫자를 쓰지 않고 참과 거짓을 나타내는 영단어 true와 false를 쓰기도 

    * Boolean 객체
      불리언 값을 감싸고 있는 객체


# 11. 조건문

2021년 3월 16일 화요일
오후 6:38

```html
<script>
    document.write("1<br>");
    if(true){
        document.write("2<br>");
    } else {
        document.write("3<br>");
    }
    document.write("4<br>");
</script>
<h2>IF-false</h2>
<script>
    document.write("1<br>");
    if(false){
        document.write("2<br>");
    } else {
        document.write("3<br>");
    }
    document.write("4<br>");
</script>
```

* If문에 뒤에 따라오는 괄호안에는 boolean데이터 타입(True나 false)이 온다. 
* 그리고 true면 첫번쨰 중괄호안의 코드가 실행되고 2번째는 무시된다.
* False면 첫 번째 무시, 2 번째 실행


# 11-2. 조건문의 활용

2021년 3월 16일 화요일
오후 6:48

```html
<input id="night_day" type="button" value="night" onclick="
    if(document.querySelector('#night_day').value === 'night'){
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    document.querySelector('#night_day').value = 'day'
    } else{
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    document.querySelector('#night_day').value = 'night'
    }
">
```

* Document.querySelector()는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환.
* 일치하는 요소가 없으면 null을 반환

```document.querySelector('#night_day').value = 'night' ;```
* ID값이 night_day 의 value값을 night로 변경





## 참고 자료
[https://developer.mozilla.org/ko/docs/Web/JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript)

[https://opentutorials.org/course/743](https://opentutorials.org/course/743)

[https://opentutorials.org/course/1375](https://opentutorials.org/course/1375)

[https://ko.wikipedia.org/wiki/자바스크립트#단순_문법](https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8#%EB%8B%A8%EC%88%9C_%EB%AC%B8%EB%B2%95)