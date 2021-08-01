> 부스트코스 - 웹 프로그래밍(풀스택)강의를 학습, 정리한 내용입니다.(https://www.boostcourse.org/web316/joinLectures/12943)
# JavaScript FrontEnd
# 목차
- [JavaScript FrontEnd](#javascript-frontend)
- [목차](#목차)
  - [자바스크립트 관련 자료](#자바스크립트-관련-자료)
- [자바스크립트의 버전](#자바스크립트의-버전)
  - [ES(*ECMAScript*)](#esecmascript)
    - [정의](#정의)
    - [활용](#활용)
    - [기타: J스크립트 간단 정의](#기타-j스크립트-간단-정의)
  - [JavaScript, ES 비유](#javascript-es-비유)
- [변수](#변수)
  - [선언](#선언)
  - [scope](#scope)
  - [데이터 타입 별 변수 선언](#데이터-타입-별-변수-선언)
  - [var (function scope) 변수 선언](#var-function-scope-변수-선언)
    - [함수 유효범위](#함수-유효범위)
    - [Hoisting](#hoisting)
  - [2. let (block scope) 변수 선언](#2-let-block-scope-변수-선언)
    - [블록 유효 범위](#블록-유효-범위)
    - [hoisting되지 않습니다.](#hoisting되지-않습니다)
  - [3. const (block scope)](#3-const-block-scope)
- [연산자](#연산자)
  - [우선순위 표현 ()](#우선순위-표현-)
  - [수학연산자 +,-,*,/,% 등](#수학연산자---등)
  - [논리연산자](#논리연산자)
    - [OR 연산자](#or-연산자)
  - [관계연산자](#관계연산자)
  - [삼항연산자](#삼항연산자)
  - [비교연산자](#비교연산자)
    - [`==` 로 인한 오류상황들](#-로-인한-오류상황들)
    - [`===`  사용](#--사용)
  - [묵시적 타입 변환(implicit type conversion)](#묵시적-타입-변환implicit-type-conversion)
- [타입](#타입)
  - [자바스크립트의 타입](#자바스크립트의-타입)
    - [타입을 체크하는 방법](#타입을-체크하는-방법)
- [비교](#비교)
  - [if문](#if문)
    - [거짓으로 취급하는 값](#거짓으로-취급하는-값)
  - [switch문](#switch문)
- [반복](#반복)
  - [for문, while문](#for문-while문)
  - [성능개선](#성능개선)
    - [length 변수 선언](#length-변수-선언)
    - [reverse 반복문](#reverse-반복문)
    - [배열](#배열)
- [문자열](#문자열)
    - [문자열에 활용 가능한 메서드](#문자열에-활용-가능한-메서드)
- [함수](#함수)
  - [함수 - 함수의 선언](#함수---함수의-선언)
  - [함수 - 함수표현식](#함수---함수표현식)
  - [함수 - 표현식과 호이스팅](#함수---표현식과-호이스팅)
  - [함수 - 반환값과 `undefined`](#함수---반환값과-undefined)
  - [함수 - arguments 객체](#함수---arguments-객체)
  - [응용해보기](#응용해보기)
  - [생각해보기](#생각해보기)
  - [MDN 참고](#mdn-참고)
- [함수 호출](#함수-호출)
  - [함수 호출 방식](#함수-호출-방식)
  - [함수호출과 stack](#함수호출과-stack)
    - [함수 호출 관계](#함수-호출-관계)
    - [**"Maximum call stack size exceeded" 오류**](#maximum-call-stack-size-exceeded-오류)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## 자바스크립트 관련 자료
1. >D2 포스트[2020년과 이후 JavaScript의 동향 - JavaScript(ECMAScript)](https://d2.naver.com/helloworld/4268738)
2. >제트브레인 설문[devecosystem-2020/javascript](https://www.jetbrains.com/ko-kr/lp/devecosystem-2020/javascript/)
3. >스택오버플로우 설문[Most Popular Technologies](https://insights.stackoverflow.com/survey/2020#most-popular-technologies)
   

# 자바스크립트의 버전
자바스크립틀의 버전은 이크마 스크립트 또는 ECMA스크립트라고 한다.
* ES의 버전을 자바스크립트 실행 엔진이 반영
* ES5, ES6(ES2015).. ES11(ES2020)
>ES 버전 확인 [ecma-international](https://www.ecma-international.org/publications-and-standards/standards/?order=last-change)
* 18년도 이후 ES6문법이 표준으로 쓰이는 상황
* ES6는 ES5문법을 포함해 하위호환성 문제가 없다.
* 다만 ES의 feature 별로 지원하지 않는 브라우저가 있을 수 있다.
    > [Can I use ES6 ?](https://caniuse.com/?search=ES6)
## ES(*ECMAScript*)
### 정의
* ECMAScript는 Ecma international이 ECMA-262 기술 규격에 따라 정의
>Draft ECMA-262 / June 15, 2021 [ECMAScript® 2022 Language Specification](https://tc39.es/ecma262/)
* 자바스크립트를 표준화한 스크립트 프로그래밍 언어
* 액션스크립트, J스크립트 등 포함
### 활용
* 웹의 클라이언트 사이드 스크립트로 주로 사용
* Node.js를 사용한 서버 응용 프로그램 및 서비스에도 사용
* 자바스크립트와 J스크립트는 모두 ECMA스크립트와의 호환을 목표로 한다.
* 반면 ECMA 규격에 포함되지 않는 확장 기능도 제공한다.
### 기타: J스크립트 간단 정의
* MS사의 internet Explorer에 주로 사용된는 ECMA스크립트 표준에 기반을 둔 스크립팅 언어 

## JavaScript, ES 비유
* 우리가 쓰는 언어: 국어 - javascript
* 우리가 일상생활에서 쓰는 언어의 기준이 되는 국어: 표준어 - ECMA-262
* 표준어를 관리하는 곳: 국립국어원 - ECMA 인터내셔널
* 국립국어원이 정한 표준어의 여러가지 규칙들(발음 또는 맞춤법) - ECMAScript


# 변수
## 선언
var, let, const로 선언 가능(ES6이상 버전)

ES5까지는 var만
## scope
변수의 유효범위
* 어떤 것을 사용하는 가에 의해 scope라는 변수의 유효범위가 변화
## 데이터 타입 별 변수 선언
    ```javascript
    var a = 2; // 숫자 2
    var a = "aaa"; // 문자열 aaa
    var a = 'aaa'; // 문자열 aaa
    var a = true; // 블리언 true
    var a = []; // 배열
    var a = {}; // 오브젝트
    var a = undefined; // 초기값x
    ```
## var (function scope) 변수 선언
```javascript
var i;  // 선언, "undefined"가 저장됨
var sum = 0;  // 선언과 초기화
var i, sum; // 한 번에 여러 개의 변수를 함께 선언할 수 있음
var i=0, sum=10, message=”Hello”;  // 선언과 초기화를 동시에 해줄 수 있음
name = "javascript";  // 선언되지 않은 변수는 전역 변수가 됨
```
var문에서 변수에 초기값을 지정하지 않는다면, 변수는 값이 설정될 때까지 "undefined"
### 함수 유효범위
* *함수 유효범위*는 어떤 함수 안에서 선언된 모든 변수는 그 함수 전체에 걸쳐 유효하다는 의미.
* 이는 변수가 미처 선언되기 전에도 유효
### Hoisting
* 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것
* 자바스크립트 코드는 함수 안에 있는 모든 변수를 함수 맨 꼭대기로 끌어올린 것처럼 동작
```javascript
var scope = “global”;
function f() {
 console.log(scope);  //"undefined" 출력(global이 아니다)
 var scope = “local”;  
 console.log(scope);  //"local" 출력
}
=> 실제로 실행되는 코드
function f() {
 var scope;  //hoisting(정의만)
 console.log(scope);  // "undefined" 저장
 scope = "local";  // 초기화 호이스팅 x
 console.log(scope);
}
```

## 2. let (block scope) 변수 선언
```javascript
let i;  // 선언, "undefined" 저장
let sum = 0;  // 선언과 초기화
let i, sum; // 한 번에 여러 개의 변수를 함께 선언
let i=0, sum=10, message=”Hello”;  // 동시에 선언과 초기화
```
### 블록 유효 범위
* **let은 변수가 선언된 블록, 구문 또는 표현식 내에서만 유효**한 변수를 선언
* 이는 var 키워드가 블록 범위를 무시하고 전역 변수나 함수 지역 변수로 선언되는 것과 다른 점
* 프로그램이나 함수의 최상위에서는 let과 var는 서로 다르게 행동
* **var는 전역 객체의 프로퍼티를 생성**하지만, **let은 전역 객체의 속성 값을 생성하지 않는다.**
### hoisting되지 않습니다.
* 변수가 초기화(선언)되기 전에 참조할 경우 ReferenceError가 발생

## 3. const (block scope)
* 블록 범위의 상수를 선언(let과 같은 블록 유효범위)
* **상수의 값은 재할당할 수 없으며 다시 선언할 수도 없다.**
* 그래서 처음 선언할 때, **반드시 초기화**를 해야 
* 보통 대문자를 사용해서 선언(의무x)
```javascript
const NUM = 7;
```


# 연산자
## 우선순위 표현 ()
연산자의 우선순위를 표현하기 위해서는 ()를 사용하면 된다. 
```JavaScript 
1+2*3
7
(1+2)*3
9
```
## 수학연산자 +,-,*,/,% 등
```javascript
1+3
4
3-1
2
25/5
5
25%5
0
25%4
1
```
## 논리연산자
### OR 연산자
* || OR연산자를 사용하면 왼쪽을 확인해서 맞으면 오른쪽을 확인하지 않는다.
* "qufstar"를 "defaultname"으로 지정할 때 or연산자를 아래와 같이 사용한다.
```javascript
var name = "KimJunha";
var result = name || "qufstar";
console.log(result);
KimJunha
var name = "";
var result = name || "qufstar";
console.log(result);
qufstar
```
## 관계연산자
* 2개 간의 관계를 시험 또는 정의하는 연산자
* 등식이나 부등식 포함
* `>, <, >=, <=, ==, !=` 은 관계연산자(C계열)
* > [위키 - 관계연산자](https://ko.wikipedia.org/wiki/%EA%B4%80%EA%B3%84%EC%97%B0%EC%82%B0%EC%9E%90)
* > [MDN - 관계연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%EA%B4%80%EA%B3%84_%EC%97%B0%EC%82%B0%EC%9E%90)
  
## 삼항연산자
* if문과 같은 조건문을 간단하게 표현
* `A?B:C`
* A true면 B 실행 아니면 C 실행
```javascript
const data = 11;
const result = (data > 10) ? "ok" : "fail";
console.log(result);
ok // data가 11이어서 10보다 크기 때문에 ok 출력
```

## 비교연산자
* 비교는 `==`보다 `===`을 사용한다.
* 타입까지 비교하려면 `===`을 습관적으로 사용하는게 무조건 좋다.
### `==` 로 인한 오류상황들
    ```
    0 == false;
    true
    "" == false;
    true
    null == false;
    false
    0 == "0";
    true
    null == undefined;
    true
    ```
* 자바스크립트는 영리해서 `0 == "0";`을 자의로 해석해 `0 == 0;`의 결과 반환한 것
* null과 undefined는 자바스크립트의 어떤 표준적인 타입 중 하나
  * 자바스크립트는 영리해서 null과 undefined도 자의로 해석해 true 반환
### `===`  사용
    ```
    0 === false;
    false
    "" === false;
    false
    null === false;
    false
    0 === "0";
    false
    null===undefined;
    false
    ```
  * null은 객체기 때문에 ==와 ===에 상관없이 false가 나왔다    
  
## 묵시적 타입 변환(implicit type conversion)
* 암시적 (명시적)타입 변환이라고도 함
* 위의 실습 코드(`==` 오류 실습 코드)에서 자동으로 타입을 변환하는 자바스크립트의 영리함
* 자바스크립트는 특정 타입의 값을 기대하는 곳에 다른 타입의 값이 오면, 자동으로 타입을 변환하여 사용한다
* 즉, 문자열 값이 오길 기대하는 곳에 숫자가 오더라도 자바스크립트는 알아서 숫자를 문자열로 변환하여 사용
    ```javascript    
    0 == "0";
    true 

    var zero = "0";
    undefined
    var z = 0;
    undefined
    z;
    0
    zero;
    "0"
    z == zero;
    true
    console.log(z);
    0
    undefined
    console.log(zero);
    0 // 0 타입 변환 

    null == undefined;
    true
    ```


# 타입
## 자바스크립트의 타입
`undefined`, `null`, `boolean`, `number`, `string`, `object`, `fuction`, `array`, `Date`, `RegExp`
```bash
function run(a) {
    console.log(a);
}
undefined

function run(a) {
    console.log(typeof a);
}

run("asdf")
string
undefined

run(false)
boolean
undefined
```
* 타입은 선언 시에 결정 X, 런타임에 결정 O.(다이나믹 타입)
* 함수안에서의 파라미터나 변수는 실행될 때  타입이 결정
### 타입을 체크하는 방법
1. `typeof` 사용
   * 문자, 숫자와 같은 자바스크립트 기본 타입
2. `toString.call` 함수 사용
3. `isArray` 함수 사용
   * 배열(표준) 확인
   * IE와 같은 구 브라우저를 사용해야 한다면 지원범위를 살펴보고 사용
>참고 : [자바스크립트의 변수형을 알아내는 다른 방법](https://elegantcoder.com/js-typeof-alternative/)  
>참고 : [Fixing the JavaScript typeof operator](https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/)

# 비교
## if문
* 선택적으로 조건이 거짓인 경우 코드 실행시 `else` 사용
* 여러 개의 `else if`를 사용하여 다양한 조건을 사용 가능
* 여러 줄일 때는 주로 브레이스(블록문)안에 코드 작성
* 블록문을 사용하는 것이 좋은 습관이다. 언제 코드를 추가하여 복잡한 조건문을 구성하게 될지 모르고 가독성이 좋기 때문
1. 브레이스 `{}` 있게
    ```javascript 
    if(true){

    } else {
        
    }
    ```
2. 브레이스 `{}` 없이
    ```javascript
    if(true) console.log(true);
    else console.log(false);
    ```
3. 삼항연산자
    * 간단한 조건문 대체
    ```javascript
    var a = "something..";
    var result = (a) ? "ok" : "not ok";
    console.log(result);
    ```
    * 값이 있다. > ok
### 거짓으로 취급하는 값
* `false`
* `undefined`
* `null`
* `0`
* `NaN`
* `the empty string ("")`

## switch문
```javascript
switch (expression) {
case label_1:
    statements_1
    [break;]
case label_2:
    statements_2
    [break;]
    ...
default:
    statements_def
    [break;]
}
```
* 명확하고 대등한 case들이 나열되는 상황에 사용
* if문과 서로 대체 가능하다
* 일치하는 case가 없으면 default값(관례상 마지막절)을 찾는다.
* break문을 만나면 종료


# 반복

## for문, while문
* for문 예시
```javascript
function howMany(selectObject) { // selectObject라는 객체
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) { // 객체안에 options라는 속성 - 배열형태
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}
```
## 성능개선
### length 변수 선언
* `.length`를 사용하여 반복시킬 경우 해당 배열을 반복할 때마다 접근하기 때문에 비효율적이다.
* `.length`이 고정된 값이므로 따로 변수 선언하여 사용한다.
    ```javascript
    var arr = [1,2,3];    
    for(var i=0, len= arr.length; i<len; i++){
        반복할 코드
    }
    ```
### reverse 반복문
* 때로는 성능 개선을 위해 반복문을 0부터 len까지 i++로 반복하는게 아니라
* len부터 0까지 i--로 반복해서 한다.
    ```javascript
    var arr = [1,2,3];
    var len= arr.length;
    for(var i=len-1, i<=0; i--){
        반복할 코드
    }
    ```
### 배열
* forEach메서드
* for-of를 통한 탐색(브라우저호환성 주위)
* for-in 객체 탐색할 때 사용


# 문자열
* 자바스크립트의 문자와 문자열은 같은 타입(모두 문자열)
    ```javascript
    typeof "abc";   // string
    typeof "a";     // string
    typeof 'a';     // string. single quote도 사용가능
    ```
### 문자열에 활용 가능한 메서드
* 문자열에 다양한 메서드가 있다.
  * 내부적으로 문자열이 객체로 변환이 되어 객체 내의 메소드를 사용 가능
  * `"ab:cd"`를 *문자열객체* 라고 할 수 있다.
    ```javascript
    "ab:cd".split(":");         // ["ab","cd"]
    "ab:cd".replace(":", "$");  // "ab$cd"
    " abcde  ".trim();          // "abcde"
    ```


# 함수
## 함수 - 함수의 선언
함수는 여러개의 인자를 받아서, 그 결과를 출력한다.  
파라미터의 갯수와 인자의 갯수가 일치하지 않아도 오류가 나지 않는다.  
파라미터가 1개일때, 인자의 갯수가 0개라면, 파라미터(매개변수)는 `undefined`이라는 값을 갖게 된다.  
값이 할당되지 않았기 때문이다.
```javascript
function printName(firstname) {
    var myname = "jisu";
    return myname + " " + firstname;
}
```
>> firstname이 파라미터
>> var로 지역변수 선언 (함수 내에서만 유효한 변수)

## 함수 - 함수표현식
함수는 아래 `printName`과 같이 표현할 수도 있다.  
이렇게 표현하면 함수선언문과 달리 선언과 호출순서에 따라서 정상적으로 함수가 실행되지 않을 수 있다.
```javascript
function test() { 
    console.log(printName()); 
    var printName = function() {
        return 'anonymouse';
    }
}

test();
//TypeError: printName is not a function
```
함수 표현식보다 함수 선언문을 더 자주 사용하지만, 어떤 코딩컨벤션에서는 함수 표현식을 권장하기도  
어떤 컨벤션을 갖던지 한가지만 정해서 사용하는 게 좋다.


## 함수 - 표현식과 호이스팅

앞선 코드에서,  
`printName`이 "printName이 is not defined" 이라고 오류가 나오지 않고,  
`function`이 아니라고 나온 이유는  
`printName`이 실행되는 순간 `'undefined'`으로 지정됐기 때문입니다.

자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 미리 다 모아서 선언합니다.

함수 안에 있는 변수들을 모두 끌어올려서 선언한다고 해서, 이를 hoisting이라고 합니다.
(실제로 코드가 끌어올려지는 건 아니며<이 과정이 눈에 보이는 게 아니죠>, 자바스크립트 파서 내부적으로 그렇게 끌어올려서 처리하는 것입니다)

따라서 아래 코드 역시 함수를 값으로 가지지만 어쨌든 `printName`도 변수이므로 끌어올려지고, 값이 할당되기 전에 실행됐으므로 `undefined`가 할당된 상태입니다.
```javascript
printName(); //아직, printName이 undefined으로 할당된 상태다. 
var printName = function(){}
```
`printName`이라는 변수가 존재하고 아직 값이 할당되기 전이므로 `printName`에는 `'undefined'`이라는 기본 값이 할당된 셈입니다.

## 함수 - 반환값과 `undefined`

아래 함수의 반환값은? 
```javascript
function printName(firstname) {
    var myname = "jisu";
    var result = myname + " " +  firstname;
}
```
정답은 `undefined`입니다.

자바스크립트 함수는 반드시 return값이 존재하며,  
없을 때는 기본 반환값인 `'undefined'`가 반환됩니다.

자바스크립트에서는 `void` 타입이 없습니다. 

## 함수 - arguments 객체

함수가 실행되면 그 안에는 `arguments`라는 특별한 지역변수가 자동으로 생성됩니다.

arguments의 타입은 객체 입니다.(`console.log(typeof arguments)` 로 확인해보세요!)

자바스크립트 함수는 선언한 파라미터보다 더 많은 인자를 보낼 수도 있습니다.

이때 넘어온 인자를 `arguments`로 배열의 형태로 하나씩 접근할 수가 있습니다.

`arguments`는 배열타입은 아닙니다.

따라서 배열의 메서드를 사용할 수가 없습니다.

```javascript
function a() {
 console.log(arguments);
}
a(1,2,3);
```
출력값
```
{ '0': 1, '1': 2, '2': 3 }
```
배열보다 객체에 가깝다.

자바스크립트의 가변인자를 받아서 처리하는 함수를 만들 때 등에서 `arguments`속성을 유용하게 사용

## 응용해보기
`arguments`속성을 사용해서 , 1~무한대까지 인자를 받아 합을 구하는 함수를 만들어봅시다.
```javascript
function sum() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  console.log(result);
}
sum(1, 2, 3);
```

## 생각해보기

1. `arrow function`
ES2015에는 `arrow function`이 추가됐다.

간단하게 함수를 선언할 수 있는 문법으로 처음에는 꽤 낯설다.

하지만 점점 많이 사용되고 있는 syntax

```javascript
function getName(name) {
   return "Kim " + name ;
}

//위 함수는 아래 arrow함수와 같다.
var getName = (name) => "Kim " + name;
```

## MDN 참고
[arrow function 참고 바로가기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```javascript
// Traditional Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```


# 함수 호출
보통 함수 하나에 모든 로직을 넣지 않기 때문에  
함수를 연속적으로 A에서 B, B에서 C 이런식으로 할 수도 있고,  
재귀 함수라해서 자기 자신을 부를 수 도 있다.  

A에서 B, B에서 A와 같은 무한루프의 함수만 아니면 된다.

## 함수 호출 방식
자바스크립트의 함수는 이렇게 호출된다.
`run`이 호출되고 그 다음에 `printName`이 호출되는 함수
```js
function printName(firstname) {
  var myname = "jisu";
  return myname + " ," + firstname;
}

// 프로그램 순서 - 13, 7, 8, 9, (1, 2, 3, 4), 9(result), 10, 11
function run(firstname) {
  firstname = firstname || "Youn"; // true면 firstname, false면 Youn
  var result = printName(firstname);
  console.log(result);
}

run(); // undefined >> false ... firstname = "Youn"
```



## 함수호출과 stack
> [Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)
```js
function foo(b){
    var a = 5;
    return a * b + 10;
} 

function bar(x){
    var y = 3;
    return foo(x * y);
}

console.log(bar(6));
```

### 함수 호출 관계
`bar() → foo()`

메모리에서 순서대로 스택이 쌓인다.

bar 함수에서 foo를 호출한 후 foo 함수의 결과를 받아올 때까지 bar함수는 메모리 공간에서 사라지지 못하고 기다리고 있는 것

foo의 경우에는 실행이 끝나고 return문이 실행되면 메모리 공간에서 사라진다.

다시 말해서 Call Stack에서 없어지는 것

call stack은 이렇게 동작하지만,  
함수를 연속적으로 계속 호출하면 call stack이 꽉 차버리면서  
더 실행되지 못하고 오류가 발생할 것.

브라우저에서는 대부분 지정된 횟수만큼만 call stack을 쌓게 미리 설정해둔 경우가 많다

### **"Maximum call stack size exceeded" 오류**
무한 루프에 빠진 함수 호출이다.  
스택이 터져버린다고 표현한다.  
그래서 프로그램이 멈추던가 시스템이 다운되버릴 수도 있는데  
대부분의 브라우저가 정해놓은 한계에 막혀 큰 오류는 방지한 것.  
무한루프에 빠진 함수호출관계를 찾아서 수정한다.
 