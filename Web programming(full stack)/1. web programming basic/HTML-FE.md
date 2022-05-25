> 부스트코스 - 웹 프로그래밍(풀스택)강의를 학습, 정리한 내용입니다.(https://www.boostcourse.org/web316/joinLectures/12943)

# HTML

# HTML Tags
'각각의 의미를 지닌다'는 것을 'Semantic한 태그' 혹은 'Semantic하다'라고 표현

HTML의 중요한 태그

## HTML tag의 종류

태그는 그 의미에 맞춰서 사용해야 한다.

- 링크
- 이미지
- 목록
- 제목

anchor 태그, img 태그, ul/li 태그, heading 태그, p 태그 등이 자주 사용된다.

그 밖에 가장 많이 사용하는 div태그가 있다.

div 태그는 block 엘리먼트라고 하는데 일반적인 영역을 표현할 때 가장 많이 사용

많은 태그를 모두 외울 필요는 없으며, 필요한 태그를 찾아서 적절한 의미에 맞는 태그를 사용하는 것이 중요

## 실습 
중요한 html 태그들 실습
### 실습코드
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width">
<title>JS Bin</title>
</head>
<body>
<div>
	<h1>반갑습니다</h1>
    여기 여러분들이 좋아하는 과일이 있어요.
	<ul>
		<li><a href="http://www.apple.com">사과</a></li>
		<li>사과</li><li>메론</li><li>귤</li>
	</ul>
</div>
</body>
</html>
```
## 참고 자료
> **[[참고링크] HTML Element Reference**
http://www.w3schools.com다양한 HTML Tags들을 살펴볼 수 있습니다.](http://www.w3schools.com/tags/ref_byfunc.asp)



# 2) HTML Layout 태그

레이아웃을 위한 HTML 태그

‘레이아웃(Layout)’ 이란 ‘배치'라는 뜻, 

HTML 태그로 감싸진 각 정보 요소를 화면상의 어느 위치에 어떻게 자리잡을지를 결정하는 것

기본적으로 상단의 `<header>`, 하단의 `<footer>`그리고 가운데의 본문 영역이 있다.

## 레이아웃을 위한 태그
레이아웃을 구성하는 태그도 역시 그 의미에 맞춰서 사용된다.

- header
- section
- nav
- footer
- aside

html태그는 레이아웃을 할 때도 그 의미에 맞는 것을 찾아 사용해야 검색도 더 잘되고, 가독성 있는 코드를 만들 수 있게 된다.

지금 언급된 태그들은 예를 들어 아래와 같은 화면으로 구성된다.

![html5layoutTag](image/html5layoutTag.jpg)

**HTML5 layout tag**

---

## 생각해보기
1. 간단한 웹페이지를 만든다고 가정하고, 상단 영역, 네비게이션 영역, 하단 영역을 layout tag를 사용해서 구성해보면 좋습니다.
2. 여러 웹사이트들이 어떻게 layout태그를 사용하고 있는지 살펴보자.
### NAVER.com
* header, footer와 같은 layout tag를 사용하지 않고 `<div id="header">`와 같이 div 태그를 사용하였다. (css style을 더 편리하게 지정)
* body안에 u_skip, wrap, adscript라는 id를 가진 div가 있고 대부분의 내용은 wrap에 들어있다.
* wrap div 안의 태그
  1. `<style>`
  2. `<div id="NM_TOP_BANNER">`
     * naver whale 브라우저 배너용
       * (뜰 때도 있고 안 뜰때도 있다.)
  3. `<div id="header">`
     * 검색창(`<input>`)
     * 메뉴(`<div id="group_nav">)
     * 날씨
     * 등
  4. `<div id="container">`
     * `<div id="NM_INT_LEFT">` 와 `<div id="NM_INT_RIGHT">`로 나눠진다.
     * 뉴스, 로그인, themecast, 블로그, 배너, 쇼핑 과 같은 섹션들로 나누어진다.
  5. `<div id="footer">`
  
* 주로 div태그를 이용해 스타일 지정이 편리하게 구성하였다. 
* style, a, span, button, ul, li, strong, h, address, img, iframe, script 등의 생각보다 적은 개수의 태그들이 사용되었다.
### google.com
* 5개의 영역으로 간단하게 구성되었다.
* 5 영역 : header메뉴, Google이미지, 검색창, 언어, footer
* div jsname, jscontroller
## 참고 자료
> [참고링크] Standard HTML5 Semantic Layout**
https://gist.github.com
(https://gist.github.com/thomd/9220049)


# HTML 구조설계

웹사이트의 문서구조를 만드는 것이 가장 먼저 할 일

## HTML 구조설계

구조화 설계는 마치 문서를 쓴다고 생각하면 쉽다.

현업에서는 Presentation 문서형태의 기획서나 디자인 파일을 받아서 그것을 기반으로 HTML개발을 시작

즉 어떠한 화면을 보면서 그대로 구현하는 것

그 화면을 보면서 구조를 분석해야 한다.

### 구조 분석
1. 먼저 영역을 나눠서 상단/본문/네비게이션 이런 식으로 큰 부분부터 분리
2. 각 영역 안에 내용의 구조를 잡는다.
   * 각 영역 안의 내용 역시 여러 가지 형태일 것
   * 목록을 나타내거나, 이미지를 나타내거나, 문단을 나타내거나 등등.
   * 이때마다 적절한 태그를 사용
3. 영역 안에 또 다른 영역이 있다면 점점 안으로 좁혀가면서 HTML tag를 사용

이때 CSS코드를 같이 구현하지 않고 HTML로 먼저 문서의 구조를 잡아나가는 것이 개발 단계에서 유리

## 실습
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <header>
  <h1>Company Name</h1>
  <img src="..." alt="logo">
  </header>
  
  <div>  <!-- section태그를 사용했었지만, 별 의미없는 container에는 section태그가 적절하지 않아서 수정합니다 -->
    <nav><ul>
      <li>Home</li>
      <li>Home</li>
      <li>About</li>
      <li>Map</li>
      </ul></nav>
    
    <div>  
      <button></button>
      <div><img src="dd" alt=""></div>
      <div><img src="dd" alt=""></div>
      <div><img src="dd" alt=""></div>
      <button></button>
    </div>
    <div>
      <ul>
        <li>
          <h3>What we do</h3>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
        </li>
        <li>
          <h3>What we do</h3>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique accusamus, corporis, dolorum fugiat tenetur porro. Aspernatur commodi, ea suscipit non? Molestiae nulla explicabo debitis provident nostrum dolorem minima reiciendis suscipit?</div>
        </li>
        <li>
          <h3>What we do</h3>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
        </li>
      </ul>
    </div>
  </div>
  <footer>
    <span>Copyright @codesquad</span>
  </footer>
</body>
</html>
```
- 예제의 lorem... 은 별의미없는 글자들을 채우기 위해서 보통 사용하는 문장


# class 와 id 속성
HTML 속성 중 class와 id

고유한 값인 id와 

중복 사용이 가능한 class

## **ID**
- 고유한 속성으로 한 HTML 문서에 하나만 사용 가능.
- 고유한 ID 값이 있으면 하나하나에 특별한 제어를 할 수 있으며 검색에도 용이.

## **Class**
- 하나의 HTML문서 안에 중복해서 사용 가능.
- 하나의 태그에 여러 개의 다른 class 이름을 공백을 기준으로 나열할 수가 있다.
- 홈페이지 전체적인 스타일을 일관성 있게 지정하기 위해서는 class의 사용이 필수적.

### convention
위처럼 id와 class를 구분할 수 있지만,

회사마다 개발단계에서 어떠한 약속(convention)을 만들어서 자신들만의 규칙을 사용하기도 한다.

1. 예를 들어 ID사용을 금하는 곳도 있다.

2. class로만 사용하는 곳도 있다.
   * 그건 팀이 결정하기 나름.
   * 하지만 반대의 경우 즉 모든 것을 id만으로 사용하는 것은 없을 것.
## 실습코드
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <header>
  <h1>Company Name</h1>
  <img src="..." alt="logo">
  </header>
  
  <section id="nav-section">
    <nav><ul>
      <li>Home</li>
      <li>Home</li>
      <li>About</li>
      <li>Map</li>
      </ul>
    </nav>
    
    <section id="roll-section">
      <button></button>
      <div><img src="dd" alt=""></div>
      <div><img src="dd" alt=""></div>
      <div><img src="dd" alt=""></div>
      <button></button>
    </section>
    <section>
      <ul>
        <li class="our_diescriptipn">
          <h3>What we do</h3>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
        </li>
        <li class="our_diescriptipn">
          <h3>What we do</h3>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique accusamus, corporis, dolorum fugiat tenetur porro. Aspernatur commodi, ea suscipit non? Molestiae nulla explicabo debitis provident nostrum dolorem minima reiciendis suscipit?</div>
        </li>
        <li class="our_diescriptipn">
          <h3>What we do</h3>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
        </li>
      </ul>
    </section>
  </section>
  <footer>
    <span>Copyright @codesquad</span>
  </footer>
</body>
</html>
```
* nav-section 클래스를 가진 section엘리먼트는 유심히 보면, nav만 감싸있는게 아니다. 
* nav와 아래 section등도 모두 포함한 wrapper역할. 
* nav-section이라는 이름을 주었지만, 전체 영역을 모두 커버하는 class이름이 더 적당
* nav-section 클래스 이름이 적당한 엘리먼트는 ? 
* section 바로 아래있는 nav엘리먼트에 그 클래스 이름을 주는 것이 어울릴 것.

## 생각해보기
1. 좋은 class 이름을 짓는 규칙은 무엇일까요? id를 다른 웹사이트들에서는 어떻게 실제로 사용할까요? 어디에 id속성을 부여했는지 한번 찾아보세요.
2. 요즘에는 data속성이라는 것도 자주 사용합니다. tag에 추가적인 데이터 정보를 표현하기 위함입니다. 이 부분도 같이 살펴보면 좋습니다.

## 추가조사
* BEM 
  * block element modifier 클래스명 짓는 규칙.
  * `—` `__`로 구분.
  * 목적에 따라 이름을 부여.
  * 이름연결할 때는 하이픈 하나만 써서 연결,

BEM방식으로 클래스명을 짓는다. id는 각 파트를 고유한 이름으로 구분짓는데 사용

data속성으로 html에 정보저장 가능. dataset객체 js에서 사용.
