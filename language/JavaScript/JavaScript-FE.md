# JavaScript FrontEnd build
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
* 선택적으로 조건이 거짓인 경우 코드 실행시 else 사용
* 여러 개의 else if를 사용하여 다양한 조건을 사용 가능
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
* false
* undefined
* null
* 0
* NaN
* the empty string ("")

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
* .length를 사용하여 반복시킬 경우 해당 배열을 반복할 때마다 접근하기 때문에 비효율적이다.
* .length이 고정된 값이므로 따로 변수 선언하여 사용한다.
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




# 함수 호출