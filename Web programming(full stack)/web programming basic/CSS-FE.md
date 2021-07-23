# 1) css 선언방법
CSS를 HTML안에 선언하는 방식 3가지
## **핵심 개념**
- inline
- internal
- external

## **CSS의 구성**
```css
span {
  color : red;
  }
```
- span : selector(선택자)
- color : property
- red : value

### **style을 HTML페이지에 적용하는 3가지 방법**

**1. inline**
HTML태그 안에다가 적용

다른 CSS파일에 적용한 것 보다 가장 먼저 적용

```html
<p style="border:1px solid gray; color:red; font-size:2em;">
```

**2. internal**
style 태그로 지정

구조와 스타일이 섞이게 되므로 유지보수가 어렵다.

별도의 CSS파일을 관리하지 않아도 되며 서버에 CSS파일을 부르기 위해 별도의 브라우저가 요청을 보낼 필요가 없다.

```html
<head>
<style>
p  {
  font-size : 2em;
  border:1px solid gray;
  color: red;
}
</style>
</head>

<body>
<div>...</div>
</body>
```

**3. external**
외부파일(.css)로 지정하는 방식

CSS 코드가 아주 짧지 않다면 가급적 이 방법으로 구현하는 것이 가장 좋다.

현업에서는 여러개의 CSS 파일로 분리하고 이를 합쳐서 서비스에서 사용하기도

internal 코드와 같은 css코드를 구현하고, style.css와 같은 별도 파일로

이후에 link태그로 추가

```html
<html>
	<head>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<div>		
		</div>
	</body>
</html>
```
**4. 우선순위**
inline > internal = external (겹치면 후선언 반영)

inline은 별도의 우선순위를 갖지만, internal 과 external은 우선순위가 동등합니다. 따라서 겹치는 선언이 있을 경우 나중에 선언된 속성이 반영됩니다.

## **생각해보기**
1. javascript로 동적으로 css코드를 수정하려고 하면 어떻게 해야 할까? 
2. 구글 웹사이트는 어떻게 css를 선언하고 있을까?

## **참고 자료**
> **[[참고링크] Difference Between Inline, External and Internal CSS Styles**  
https://www.hostinger.com  
hostinger.com/tutorials/  
difference-between-inline-external-and-internal-css)


# 2) 상속과 우선순위 결정
CSS의 스타일을 적용하는 것 몇 가지 규칙

상속은 대표적인 CSS 적용 규칙

중복된 속성을 매번 적용해야 하는 일을 줄일 수 있다.

## **핵심 개념**
- CSS 상속
- 선택자 우선순위 (CSS Specificity)

상위에서 적용한 스타일은 하위에도 반영.

이로 인해 여러 단계로 중첩된 엘리먼트마다 매번 같은 색상과 글자 크기를 부여하지 않아도 된다.

하지만 모든 CSS 속성이 이런 특징을 갖게 되면, 몇 가지 문제가 생깁니다.

예를 들어 width 속성이 상속되면 하위 엘리먼트가 모든 같은 크기의 넓잇값을 가질 수 있습니다.

이런 것은 원하는 것이 아니죠.

그래서 box-model이라고 불리는 속성들(width, height, margin, padding, border)과 같이 크기와 배치 관련된 속성들은 하위엘리먼트로 상속이 되지 않습니다.

이렇게 CSS는 꽤 똑똑한 방식으로 동작합니다.

아직 혼란스러운 부분이 있다면, 여러분들이 중첩된 엘리먼트를 만들고, CSS 속성을 부여하면서 이 특징을 잘 이해해보면 좋습니다.

---
## **참고 자료**
[**[참고링크] Specificity**
http://developer.mozilla.org   
CSS Specificity(CSS 선택자 우선순위)에 대한 설명과 예제.  
(http://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)


#### inline > internal > external

일반적인 CSS위치는 css파일(external)에 두고 그 아래 style태그를 사용해서(internal 방식) 표현하기 때문에 그런 경우 위에 나온 내용이 맞다. 

하지만, internal과 external은 같은 우선순위를 가집니다. 

### 같은 css내용이 있는 경우 예시

```html
<head>
<style>div { color:red; }</style>
<link rel="stylesheet" href="css.css">
</head>
```

만약 css.css에서 div color를 blue로 주었다면, 뒤에 선언된 external방식의 css내용이 반영. 따라서 blue색깔

즉 internal과 external은 같은 우선순위로 결정된다

CSS는 여러가지 스타일정보를 기반으로 최종적으로 '경쟁'에 의해서 적절한 스타일이 반영된다
```html
<div id="a" class="b">
	text....
</div>
```

```css
#a{
 color : red;
}

.b{
 color : blue;
}

div{
 color : green;
}
```

위 코드에서 id, class, 엘리먼트 순으로 우선순위

id는 클래스보다 우선되고 클래스는 엘리먼트보다 우선. 위 코드에서는 id인 a의 색상이 적용. CSS의 이런 성질 : 캐스캐이딩

## **선언방식에 따른 차이**

같은 선택자(selector)라면 나중에 선언한 것이 반영

선택자의 표현이 구체적인 것이 있다면 먼저 적용

- body > span (O)
- span (X)

## **ID > CLASS > ELEMENT 순으로 반영**

만약 h1태그가 div > p > h1 구조로 HTML으로 짜여있다고 가정하면, 아래에 색깔 중 h1이 가진 색깔은 어떤 것?

jsbin과 유사한 사이트

이번에는 [codepen.io](http://codepen.io/)

---

## **참고 자료**
[**[참고링크] Specificity**
http://developer.mozilla.org  

CSS Specificity(CSS 선택자 우선순위)에 대한 설명과 예제  
(http://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

# 3) CSS Selector
엘리먼트를 쉽고 빠르게 찾을 수 있는 CSS Selector 문법

## **핵심 개념**
- CSS Selector
- id, class, tag selector
- nth-child

## **CSS selector**
HTML의 요소를 tag, id, html 태그 속성 등을 통해 쉽게 찾아주는 방법

## **element에 style 지정을 위한 3가지 기본 선택자**
- tag로 지정하기
```html
<style>
     span {
       color : red;
     }
 </style>
```
- id로 지정하기
```html
<style>
     #spantag {
       color : red;
     }
</style>

<body>
     <span id="spantag"> HELLO World! </span>
</body>
```
- class로 지정하기
```html
<style>
     .spanClass {
     color : red
     }
</style>

<body>
     <span class="spanClass"> HELLO World! </span>
</body>
```
## **CSS Selector의 다양한 활용**
- id, class 요소 선택자와 함께 활용
```css
#myid { color : red }
div.myclassname { color : red }
```
- 그룹 선택 (여러 개 셀렉터에 같은 style을 적용해야 한다면)
```css
h1, span, div { color : red }
h1, span, div#id { color : red }
h1.span, div.classname { color : red }
```
- 요소 선택 (공백) : 자손요소
- 아래 모든 span태그에 red색상이 적용됨
```html
<div id="jisu">
  <div>
    <span> span tag </span>
  </div>
  <span> span tag 2 </span>
</div>
```
```css
#jisu span { color : red }
```
- 자식 선택 (>) : 자식은 바로 하위엘리먼트를 가리킵니다.
- 아래는 span tag 2만 red 색상이 적용됩니다.
```html
<div id="jisu">
  <div>
    <span> span tag </span>
  </div>
  <span> span tag 2 </span>
</div>
```
```css
#jisu > span { color : red }
```
- n번째 자식요소를 선택합니다. (nth-child)
- 첫번째 단락에 red 색상이 적용됩니다.
```html
<div id="jisu">
  <h2>단락 선택</h2>
  <p>첫번째 단락입니다</p>
  <p>두번째 단락입니다</p>
  <p>세번째 단락입니다</p>
  <p>네번째 단락입니다</p>
</div>
```
```css
#jisu > p:nth-child(2) { color : red }
```
---

## **생각해보기**
1. pseudo-class인 nth-child 와 nth-of-type의 차이점은?

---

## **참고 자료**

[**CSS Selectors Cheatsheet**
https://gist.github.comCSS Selectors Cheatsheet. GitHub Gist: instantly share code, notes, and snippets.](https://gist.github.com/magicznyleszek/809a69dd05e1d5f12d01)


# 4) CSS 기본 Style 변경하기
글자색, 배경색, 글꼴은 어떻게 바꾸는 것?

텍스트 속성 및 옵션값을 변경하는 방법

## **핵심 개념**
- font-size
- background-color
- font-family

CSS style 적용은 글자색, 배경색 등이 가장 자주 사용되는 것들

이런 속성은 위치 값과 크기를 지정하는 것과 달리, 색상 위주로 값을 부여

색상 관련 값은 다양한 색을 일관된 방법으로 표현하기 위해 주로 16진수 표기법을 사용

## **font 색상 변경**
- color : red;
- color : rgba(255, 0, 0, 0.5);
- color : #ff0000; //16진수 표기법으로 가장 많이 사용되는 방법이죠.

## **font 사이즈 변경**
- font-size : 16px;
- font-size : 1em; (기준값-'주로 상속받음' 의 1배. 설정x 시 16px)

## **배경색**
- background-color : #ff0;
- background-image, position, repeat 등의 속성이 있습니다.
- background : #0000ff url(“.../gif”) no-repeat center top; //한 줄로 정의도 가능

## **글씨체/글꼴**
- font-family:"Gulim";
- font-family : monospace; (여러개를 콤마로 나열. 앞에가 안되면 뒤에거로)

---
## **실습 코드**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <style>
    body > div {
      font-size:16px;
      background-color: #ff0;
      font-family:"Gulim";
    }
    
    .myspan {
      color : #f00;
      font-size:2em;
    }
  </style>
</head>
<body>
  <div>
    <span class="myspan">my text is upper!</span>
  </div>
</body>
</html>
```

## **웹 폰트**
웹폰트는 브라우저에서 기본으로 지원하지 않는 폰트를 웹으로부터 다운로드 받아 사용할 수 있는 방법

다양하고 예쁜 폰트들을 웹폰트로 사용할 수 있긴 하지만 다운로드를 받아야 한다는 단점이 있다.

다운로드 시간이 오래 걸리게 되면 화면에 노출되는 시간이 느려져 오히려 사용자에게 불편함을 느끼게 할 수 있는 것

또한 다양한 해상도에서 깨지는 문제도 발생할 수 있다.

웹폰트는 수많은 종류가 있다.

대표적으로 구글 웹폰트가 있으며 최근에는 다양한 크기에서 품질을 유지하는 벡터 방식의 아이콘 웹폰트도 등장

(unicode영역 중 Private Use Area (PUA) 영역을 활용해서 제작)

또한 웹폰트 방식말고, 기본 unicode를 사용해서 간단한 아이콘을 표현하는 것도 가능

### 아래 unicode를 사용한 HTML 코드
```html
 <div> 안녕하세요 &#x263a;</div> //☺  웹 화면에는 웃음 표시가 표현되는 코드입니다.
```

## **참고 자료**
**[[참고링크] bootstrap**  
http://getbootstrap.com](http://getbootstrap.com/components/)

# 5) Element가 배치되는 방법(CSS layout)
block과 inline의 차이

position 속성

float의 성질

## **핵심 개념**
- 박스 모델 (Box model)
- margin
- border
- padding
- position


### css파일의 올바른 주석은? 

1과 같은 해석되지 않는 값을 사용할 수도 있지만, 다른 프로그래밍 언어처럼 css도 주석이 있다

`/* */`를 사용해서 주석처리를 할 수 있다.

### **엘리먼트가 배치되는 방식**
엘리먼트를 화면에 배치하는 것

layout 작업, 

Rendering 과정이라고도

편의상 배치라고 한다.

기본 엘리먼트는 위에서 아래로 배치되는 것이 기본

하지만 웹사이트의 배치는 다양하게 표현 가능해야 하므로, 이를 다양한 방식으로 배치할 수 있도록 다양한 속성을 활용.

### 중요하게 이해해야 할 속성
```
display(block, inline, inline-block)
position(static, absolute, relative, fixed)
float(left, right)
```

### **엘리먼트가 배치되는 방식 - (display:block)**

display속성이 block이거나 inline-block인 경우 그 엘리먼트는 벽돌을 쌓든 블록을 가지고 쌓인다.

```html
<div>block1</div><p>block2</p><div>block3</div>
```

### **엘리먼트가 배치되는 방식 - (display:inline)**

display 속성이 inline인 경우는 우측으로, 그리고 아래쪽으로 빈자리를 차지하며 흐른다.

높이와 넓이를 지정해도 반영이 되지 않는다.

```html
<div><span>나는 어떻게 배치되나요?</span><span>좌우로 배치되는군요</span><a>링크는요?</a><strong>링크도 강조도 모두 좌우로 흐르는군요</strong>
  모두다 display속성이 inline인 엘리먼트이기 때문입니다.
</div>
```

### **엘리먼트가 배치되는 방식 (position:static, relative, absolute)**

엘리먼트 배치가 순서대로만 위아래로 또는 좌우로 흐르면서 쌓이기만 하면, 다양한 배치를 하기 어렵다.

position 속성을 사용하면 상대적/절대적으로 어떤 위치에 엘리먼트를 배치하는 것이 수월.

**1. position 속성으로 특별한 배치를 할 수 있다.**

position 속성은 기본 static.

그냥 순서대로 배치.

**2. absolute는 기준점에 따라서 특별한 위치에 위치한다.**

top / left / right / bottom 으로 설정.

기준점을 상위엘리먼트로 단계적으로 찾아가는데 static이 아닌 position이 기준점.

(상위 엘리먼트 중에 static이 아닌 포지션이 기준점)

**3. relative는 원래 자신이 위치해야 할 곳을 기준으로 이동.**

top / left / right / bottom로 설정합니다.

**4 fixed는 viewport(전체화면) 좌측, 맨 위를 기준으로 동작.**

### **엘리먼트가 배치되는 방식 (margin:10px)**

margin으로 배치가 달라질 수 있다.

margin은 위 / 아래 / 좌 / 우 엘리먼트와 본인 간의 간격.

따라서 그 간격만큼 내 위치가 달라진다.

## **엘리먼트가 배치되는 방식 (float:left)**

float 속성으로 원래 flow에서 벗어날 수 있고 둥둥 떠다닐 수 있다.

일반적인 배치에 따라서 배치된 상태에서 float는 벗어난 형태로 특별히 배치된.

따라서 뒤에 block엘리먼트가 float 된 엘리먼트를 의식하지 못하고 중첩돼서 배치된다.

float의 속성은 이런 특이성 때문에 웹사이트의 전체 레이아웃 배치에서 유용하게 활용된다.

### **엘리먼트가 배치되는 방식 (box-model)**

블록 엘리먼트의 경우 box의 크기와 간격에 관한 속성으로 배치를 추가 결정.

margin, padding, border, outline으로 생성되는 것.

box-shadow 속성도 box-model에 포함지어 설명할 수 있다.

box-shadow는 border 밖에 테두리를 그릴 수 있는 속성.

### **엘리먼트의 크기**

block엘리먼트의 크기는 기본적으로는 부모의 크기만큼을 가진다.

예를 들어, width:100%는 부모의 크기만큼을 다 갖는 것과 같다.

### **box-sizing과 padding**

padding 속성을 늘리면 엘리먼트의 크기가 달라질 수 있다.

box-sizing 속성으로 이를 컨트롤 할 수 있다.

box-sizing 속성을 border-box로 설정하면 엘리먼트의 크기를 고정하면서 padding 값만 늘릴 수 있다.

### **layout 구현방법은?**
전체 레이아웃은 float를 잘 사용해서 2단, 3단 컬럼 배치를 구현.

최근에는 css-grid나 flex 속성 등 layout을 위한 속성을 사용하기 시작했으며 브라우저 지원범위를 확인해서 사용.

특별한 위치에 배치하기 위해서는 position absolute를 사용, 기준점을 relative로 설정.

네비게이션과 같은 엘리먼트는 block 엘리먼트를 inline-block으로 변경해서 가로로 배치하기도 

엘리먼트안의 텍스트의 간격과 다른 엘리먼트간의 간격은 padding과 margin 속성을 잘 활용 위치시킨다

---

## **생각해보기**
1. 여러분들이 자주 사용하는 웹사이트의 배치를 살펴봅니다.
2. 크롬 개발자도구의 element 패널을 열어서 소스코드를 살펴봅니다.
3. CSS의 어떤 속성을 주로 사용해서 좌/우로 배치를 하고 있는지 찾아보면 좋습니다.
4. 실제로 많은 웹사이트도 float와 같은 전통적 방식을 사용하는 것을 찾아볼 수도 있습니다.

# 6) float 기반 샘플 화면 레이아웃 구성

## **핵심 개념**
- float
- layout

## **실습코드**
```html
<header>부스트코스는 정말 유익합니다.</header>
<div id="wrap">
   <nav class="left">
      <ul>
         <li>menu</li>
         <li>home</li>
         <li>name</li>
      </ul>
   </nav>
   <div class="right">
      <h2>
         <span>반가워요!</span>
         <div class="emoticon">:-)</div>
      </h2>
   <ul>
      <li>crong</li>
      <li>jk</li>
      <li>honux</li>
      <li>pobi</li>
   </ul>
   </div>
   <div class="realright">
      oh~ right
   </div>
</div>
<footer>코드스쿼드(주)</footer>
```

```css
li {
   list-style:none;
}

header {
   background-color : #eee;
}

#wrap {
   overflow:auto;
   margin:20px 0px;
}

.left, .right, .realright {
   float:left;
   height: 200px;
}

.left {
   width:17%;
   margin-right:3%;
   background-color : #47c;
}

.right {
   width : 60%;
   text-align:center;
   background-color : #47c;
}

.realright {
   width: 17%;
   margin-left:3%;
   background-color : #67c;
}

.right > h2 {
   position:relative;
}

.right .emoticon {
   position:absolute;
   top:0px;
   right:5%;
   color:#fff;
}

footer {
   background-color : #eee;
   clear:left;
}
```
## **생각해보기**
1. 레이아웃을 배치하는데 flex라는 속성도 있습니다. flex 속성은 많은 기능을 제공하지만, 간단히 좌/우로 배치하는 방식이 어떻게 구현하는지 찾아봅니다.
2. float와의 차이점을 느껴보세요.


#  7) 디버깅-HTML-CSS
프로그래밍의 디버깅

HTML/CSS를 개발하면서 생기는 문제를 어떻게 빨리 처리 할까?

더 빠르고 정확한 문제를 해결하기 위한 HTML/CSS 디버깅 방법

## **핵심 개념**
- debugging
- chrome developer tools

## **참고 자료**

**[[참고링크] 페이지와 스타일 검사 및 편집**  
https://developers.google.com]  

(https://developers.google.com/web/tools/chrome-devtools/inspect-styles/?hl=ko)
