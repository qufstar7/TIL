> 부스트코스 - 웹 프로그래밍(풀스택)강의를 학습, 정리한 내용입니다.(https://www.boostcourse.org/web316/joinLectures/12943)

# Front-End & Back-End

- [Front-End & Back-End](#front-end--back-end)
- [web Front-End, web Back-End](#web-front-end-web-back-end)
  - [핵심 개념](#핵심-개념)
- [web Front-End](#web-front-end)
  - [웹프론트엔드의 역할](#웹프론트엔드의-역할)
    - [HTML 코드 예시](#html-코드-예시)
    - [스타일 - CSS 코드예시](#스타일---css-코드예시)
    - [동작 - JavaScript 코드예시](#동작---javascript-코드예시)
- [web Back-End](#web-back-end)
  - [백 엔드 개발자가 알아야 할 것들](#백-엔드-개발자가-알아야-할-것들)
  - [참고 자료](#참고-자료)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# web Front-End, web Back-End
웹은 프론트엔드(FE)와 백엔드(BE)로 나눠진다.

우리가 인터넷을 하기 위해서 브라우저에서 웹을 탐색하곤 하는데요.

브라우저를 프론트엔드 또는 클라이언트라고도 한다.

웹백엔드는 인터넷 사용자에게는 보이지 않는 것. 
## 핵심 개념
* HTML
* CSS
* JavaScript
* 클라이언트
* 서버
# web Front-End
사용자에게 웹을 통해 다양한 콘텐츠(문서, 동영상, 사진 등)를 제공.

또한, 사용자의 요청(요구사항)에 반응해서 동작.

## 웹프론트엔드의 역할
웹콘텐츠를 잘 보여주기 위해 구조를 만들어야.
* (신문,책등과 같이) - HTML

적절한 배치와 일관된 디자인 등을 제공해야.
* (보기 좋게) - CSS

사용자 요청을 잘 반영해야.
* (소통하듯이) - Javascript
### HTML 코드 예시
원하는 문서의 구조를 프로그래밍 언어로 표현해야 합니다.

HTML이라는 것은 그 구조를 잘 표현해 줍니다.
```html
<h1> 우리집에 오신걸 환영합니다 </h1>
<section >
   <h2> 위치</h2>
    <p> 경기도 시흥시 어딘가 위치하고 있어요~</p>
   <h2> 특징</h2>
    <p>  우리집은 마루가 아주 작아요~  하지만 옹기종기 모여있기 좋은 구조에요</p>
</section>
<footer>email : crong@kdd123.com</footer>
```
### 스타일 - CSS 코드예시
웹페이지를 꾸미기 위해서는 각각의 HTML 태그(문서의 구조를 표현한 각 조각 단위)를 꾸미기 위한 규칙이 필요합니다

CSS는 이를 표현할 수 있는 프로그래밍 언어입니다.
```css
.window-header-icon {
left: -28px;
position: absolute;
top: 8px
}

.window-header-inline-content {
cursor: default;
display: inline-block;
margin: 4px 6px 0 0
}
```
### 동작 - JavaScript 코드예시
HTML,CSS를 이리저리 움직이고 변경할 필요가 있을 거예요.

JavaScript가 그걸 해줍니다.
```js
let aCardList = [];
for (var i = 0; i < cardList.length; i++) {
let str =`${cardList[i]}번째 카드`;
let id = `list-${cardList[i]}`;
aCardList.push(<li id={id} key={i} draggable='true' onDragStart={dragStart}> {str} </li>)
}
```

# web Back-End
backend는 정보를 처리하고 저장하며,

요청에 따라 정보를 내려주는 역할을 한다.

가령 쇼핑몰이라면, 상품 정보를 가지고 있고, 주문을 받아서 저장하고, 사용자가 관심있어 하는 상품을 골라주는 역할이 back-End의 역할
## 백 엔드 개발자가 알아야 할 것들
* 프로그래밍 언어(JAVA,  Python, PHP, Javascript 등)
* 웹의 동작 원리
* 알고리즘(algorithm), 자료구조 등 프로그래밍 기반 지식
* 운영체제, 네트워크 등에 대한 이해
* 프레임워크에 대한 이해(예: Spring)
* DBMS에 대한 이해와 사용방법(예: MySQL, Oracle 등)
## 참고 자료
> [참고링크] 웹프론트엔드 역할을 아주아주 쉽게 볼 수 있어요!
http://html-css-js.com