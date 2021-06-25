# 목차
- [목차](#목차)
- [Selector](#selector)
  - [1) 단순 선택자(Simple selectors)](#1-단순-선택자simple-selectors)
  - [2) 복합 선택자(Combinator selectors)](#2-복합-선택자combinator-selectors)
  - [3) 가상 클래스 선택자(Pseudo-class selectors)](#3-가상-클래스-선택자pseudo-class-selectors)
    - [앵커 가상 클래스(Anchor Pseudo-classes)](#앵커-가상-클래스anchor-pseudo-classes)
    - [가상클래스들과 CSS 클래스들](#가상클래스들과-css-클래스들)
    - [Hover on <div>](#hover-on-div)
    - [simple tooltip Hover](#simple-tooltip-hover)
    - [The :first-child 가상-클래스](#the-first-child-가상-클래스)
    - [:lang Pseudo-class (:lang 가상-클래스)](#lang-pseudo-class-lang-가상-클래스)
  - [4) 가상-요소 선택자(Pseudo-elements selectors)](#4-가상-요소-선택자pseudo-elements-selectors)
    - [문법](#문법)
    - [Pseudo-elements and CSS Classes](#pseudo-elements-and-css-classes)
    - [Multiple Pseudo-elements](#multiple-pseudo-elements)
    - [::first-line](#first-line)
    - [::first-letter](#first-letter)
    - [::before](#before)
    - [::after](#after)
    - [::marker](#marker)
    - [::selection](#selection)
    - [참고 : 크로싱 브라우저 prefix(접두어)](#참고--크로싱-브라우저-prefix접두어)
  - [5) 속성 선택자(Attribute selectors)](#5-속성-선택자attribute-selectors)
    - [특별한 속성을 가진 HTML 요소 스타일 지정](#특별한-속성을-가진-html-요소-스타일-지정)
    - [속성 선택자는 ID나 class 없이 스타일링하는데 유용](#속성-선택자는-id나-class-없이-스타일링하는데-유용)
    - [[attribute]](#attribute)
    - [[attribute = "value"]](#attribute--value)
    - [[attribute ~ = "value"]](#attribute---value)
    - [[attribute | = "value"]](#attribute---value-1)
    - [[attribute ^ = "value"]](#attribute---value-2)
    - [[attribute $ = "value"]](#attribute---value-3)
    - [[attribute * = "value"]](#attribute---value-4)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


>> based on W3Cschool - CSS(https://www.w3schools.com/css/default.asp), MDN Web Docs - CSS(https://developer.mozilla.org/ko/docs/Web/CSS)

# Selector
* 식별자, 셀렉터, 선택자로 불림
* HTML요소중 스타일을 지정할 요소를 의미
  * ex) ```<h1> #h1 .aligncenter```
* 선택자 5개 카테고리로 분류

---
## 1) 단순 선택자(Simple selectors)
* 이름, ID, 클래스를 기준으로 요소 선택

1. css element selector (요소 선택자) 
   * = type selector (타입 선택자) 
   * HTML 요소의 이름으로 요소 선택
   * ``` body{} p{} h1{} ...```
2. css id selector (아이디 선택자)
   * ```#id{}```
3. css class selector (클래스 선택자)* 
   * ```.class{}```
5. css universal selector (전체 선택자)
   * ```*{}```
6. css grouping selector (그루핑 선택자)
   * 여러 개의 선택자를 묶어서 스타일 지정
   * ```p, h1, h2{}```

---
## 2) 복합 선택자(Combinator selectors)
* = 연결 선택자, 조합 선택자
* 요소 간의 관계를 설명
* 4개의 조합자 종류
  * descendant selector (space)
    ```css
    div p {
      background-color: yellow;
    }
    ``` 
  * child selector (>)
    ```css
    div > p {
      background-color: yellow;
    }
    ```
  * adjacent sibling selector (+)
  * general sibling selector (~)
  
---
## 3) 가상 클래스 선택자(Pseudo-class selectors)
* 요소의 특별한 상태를 정의하는데 사용
  * 마우스 오버시 스타일
  * 방문, 미방문 링크 스타일
  * 포커스 요소 스타일
```css
selector:pseudo-class {
  property: value;
}
```
### 앵커 가상 클래스(Anchor Pseudo-classes)
* 예시
```css
/* 미방문 링크 */
a:link {
  color: green;
}

/* 방문 링크 */
a:visited {
  color: purple;
}

/* 마우스-오버 링크 */
/* a:visited가 있어야 효과적이고, a:link 뒤에 와야 한다. */
a:hover {
  color: blue;
}

/* 현재 링크 */
/* a:hover뒤에 와야 한다. */
a:active {
  color: orange;
}
```

### 가상클래스들과 CSS 클래스들
* 가상클래스는 CSS클래스와 조합해서 사용가능
* ex)
  ```css
  a.highlight:hover {
    color: #ff0000;
  }
  ``` 
### Hover on <div>
* ex)
  ```css
  div:hover {
    background-color: blue;
  }
  ```
### simple tooltip Hover
* ```<p>``` 요소를 보여주기 위한 ```<div>```요소 Hover
* ex)
    ```css
    p {
     display: none;
     background-color: yellow;
     padding: 20px;
    }

    div:hover p {
     display: block;
    }
    ```

### The :first-child 가상-클래스
* :first-child 가상 클래스는 어떤 요소의 첫번째 자식요소를 지칭
  * 예시1) 첫번째 ```<p>```  
      ```css
      p:first-child {
        color: blue;
      }
      ```
  * 예시2) 모든 ```<p>```의 첫번째 ```<i>```
      ```css
      p i:first-child {
        color: blue;
      }
      ```
  * 예시3) 모든 첫 번째 하위 ```<P>```의 모든 ```<i>```
      ```css
      p:first-child i {
        color: blue;
      }
      ```
### :lang Pseudo-class (:lang 가상-클래스)
* 다른 언어들에 대한 특별한 규칙을 정의
* 예시)
  1. lang="no": 를 사용하여 ```<q>```에 대한 인용 부호를 정의
      * css
      ```css
      q:lang(no) {
        quotes: "~" "~";
      }
      ```
      * html
      ```html
      <p>Some text <q lang="no">A quote in a paragraph</q> Some text.</p>
      ```
      * 결과
      ```
      Some text ~A quote in a paragraph~ Some text.
      ```
    2. 자식 결합자를 사용하여 인용부호를 일치시키는데 사용
       * css
       ```css
       :lang(en) > q { quotes: '\201C' '\201D' '\2018' '\2019'; }
       :lang(fr) > q { quotes: '« ' ' »'; }
       :lang(de) > q { quotes: '»' '«' '\2039' '\203A'; }
       ```

       * html
       ```html
       <div lang="en"><q>This English quote has a <q>nested</q> quote inside.</q></div>
       <div lang="fr"><q>This French quote has a <q>nested</q> quote inside.</q></div>
       <div lang="de"><q>This German quote has a <q>nested</q> quote inside.</q></div>
       ```
       * 결과
       ```
       This English quote has a nested quote inside.
       This French quote has a nested quote inside.
       This German quote has a nested quote inside.
       ``` 

---
## 4) 가상-요소 선택자(Pseudo-elements selectors)
* 요소의 일부분을 선택 또는 스타일 지정
    * 예를 들어 첫번째 문자, 첫 줄, 첫 요소와 같은 스타일 지정하거나 요소의 콘텐츠 전과 후에 콘텐츠를 삽입할 수 있다.
### 문법
```css
selector::pseudo-element {
  property: value;
}
```

### Pseudo-elements and CSS Classes
가상-요소는 CSS 클래스와 조합가능
* 예시) 클래스```.intro```인 문단의 첫번째 문자의 스타일을 지정
```css
p.intro::first-letter {
  color: #ff0000;
  font-size: 200%;
}
```

### Multiple Pseudo-elements
다수의 가상-요소 조합가능
* 예시) 모든 문단의 첫 줄과 첫 문자에 대한 스타일 각각 지정
    ```css
    p::first-letter {
    color: #ff0000;
    font-size: xx-large;
    }
    p::first-line {
    color: #0000ff;
    font-variant: small-caps;
    }
    ``` 
### ::first-line
글의 첫 줄에 특별한 스타일을 추가

* 예시) 모든 ```<p>```요소의 글의 첫 줄의 스타일 지정
    ```css
    p::first-line {
    color: #ff0000;
    font-variant: small-caps;
    }
    ```
* Note: 블록 레벨 요소에서만 적용 가능
* 적용 가능한 속성들
  * font properties
  * color properties
  * background properties
  * word-spacing
  * letter-spacing
  * text-decoration
  * vertical-align
  * text-transform
  * line-height
  * clear
* 주의: 이중 콜론 표기법(the double colon notation) - ```::first-line``` vs ```:first-line```
  * 이중 콜론은 CSS3의 가상-요소에 대한 단일 콜론을 대체 (W3C가 가상-클래스와 가상-요소를 구분하기 위해)
  * 단일 콜론은 CSS2와 CSS1의 가상-클래스와 가상-요소 모두에 사용
  * 이전 버전 호환성을 위해 CSS2 및 CSS1 가상 요소에 단일 콜론 사용 가능

### ::first-letter
글의 첫번째 문자에 대한 특별한 스타일을 추가하는데 사용
* 예시) 모든 ```<p>```요소의 첫번째 문자의 스타일 지정
    ```css
    p::first-letter {
    color: #ff0000;
    font-size: xx-large;
    }
    ```
* Note: 블록 레벨 요소에서만 적용 가능
* 적용 가능한 속성들
  * font properties
  * color properties 
  * background properties
  * margin properties
  * padding properties
  * border properties
  * text-decoration
  * vertical-align (only if "float" is "none")
  * text-transform
  * line-height
  * float
  * clear

### ::before
요소의 콘텐츠 앞에 콘텐츠 추가
* 예시) ```<h1>```앞에 콘텐츠 추가
    ```css
    h1::before {
    content: url(smiley.gif);
    }
    ```

### ::after
요소의 콘텐츠 뒤에 콘텐츠 추가
* 예시) ```<h1>```뒤에 콘텐츠 추가
    ```css
    h1::after {
    content: url(smiley.gif);
    }
    ```

### ::marker
리스트에서 리스트 마커 스타일 지정
* 예시)
    ```css
    ::marker {
    color: red;
    font-size: 23px;
    }
    ```
### ::selection
사용자가 선택 또는 강조한(클릭, 드래그)부분의 스타일 지정
* 예시) 선택된 text의 스타일 지정
    ```css
    ::-moz-selection { /* Code for Firefox */
    color: red;
    background: yellow;
    }

    ::selection {
    color: red;
    background: yellow;
    }
    ```

### 참고 : 크로싱 브라우저 prefix(접두어)
* 속성 앞에 붙여 사용
* 우리나라에서는 크롬과 파이어폭스만 적용하면 무난하게 처리 가능
* 종류
    ```
    -webkit- (Chrome, Safari, Opera 최신 버전, 거의 모든 ios 브라우저
    -moz- (Firefox)
    -o- (Old, pre-WebKit, Opera 오래된 버전)
    -ms- (Internet Explorer and Microsoft Edge)
    ```



---
## 5) 속성 선택자(Attribute selectors)
특별한 속성들 또는 속성 값들을 가진 요소 선택

### 특별한 속성을 가진 HTML 요소 스타일 지정
HTML 요소의 속성에 따라 스타일 지정 가능

### 속성 선택자는 ID나 class 없이 스타일링하는데 유용
* 예시) 
    ```css
    input[type="text"] {
    width: 150px;
    display: block;
    margin-bottom: 10px;
    background-color: yellow;
    }

    input[type="button"] {
    width: 120px;
    margin-left: 35px;
    display: block;
    }
    ```

### [attribute]
```[속성]``` 선택자는 ```속성```에 따라 요소 선택
* 예시)
    ```css
    a[target] {
    background-color: yellow;
    }    
    ```

### [attribute = "value"]
```[속성="값"]``` 선택자는 속성과 값에 따라 요소 선택
* 예시) ```target="_blank"``` 속성을 가진 모든 ```<a>``` 요소 선택
    ```css
    a[target="_blank"] {
    background-color: yellow;
    }
    ```

### [attribute ~ = "value"]
```[속성~="값"]``` 선택자는 특정 단어를 포함하는 속성값을 가진 요소 선택
* 예시) 속성값에 "flower"라는 단어를 포함한 title 속성을 가진 모든 요소 선택
    ```css
    [title~="flower"] {
    border: 5px solid yellow;
    }
    ```

* "summer flower"나 "flower new" 는 되도 **"my-flower"이나 "flowers"는 안됨.**
### [attribute | = "value"]
```[속성|="값"]``` 선택자는 특별한 값으로 시작하는 속성을 가진 요소 선택
* 예시)
    ```css
    [class|="top"] {
    background: yellow;
    }
    ```

### [attribute ^ = "value"]
```[속성^="값"]``` 선택자는 속성값이 특정한 값으로 시작하는 요소 선택
* 예시) "top"으로 시작하는 클래스 속성 값을 가진 모든 요소 선택
    ```css
    [class^="top"] {
    background: yellow;
    }
    ```

### [attribute $ = "value"]
```[속성$="값"]``` 선택자는 특정한 값으로 끝나는 속성값을 가진 요소 선택
* 예시) 클래스 속성 값이 "test"로 끝나는 모든 요소
* 주의: 값은 전체 단어일 필요는 없다.
    ```css
    [class$="test"] {
    background: yellow;
    }
    ```

### [attribute * = "value"]
```[속성*="값"]``` 선택자는 특정한 값을 포함하는 속성을 가진 요소 선택
* 예시) "te"를 포함하는 모든 클래스 속성 값을 가진 요소 선택
* 주의: 값은 전체 단어일 필요는 없다.
    ```css
    [class*="te"] {
    background: yellow;
    }
    ```

