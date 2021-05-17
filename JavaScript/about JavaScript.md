# about JavaScript

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
# 참고 자료

[https://developer.mozilla.org/ko/docs/Web/JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript)

[https://opentutorials.org/course/743](https://opentutorials.org/course/743)

[https://opentutorials.org/course/1375](https://opentutorials.org/course/1375)

[https://ko.wikipedia.org/wiki/자바스크립트#단순_문법](https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8#%EB%8B%A8%EC%88%9C_%EB%AC%B8%EB%B2%95)