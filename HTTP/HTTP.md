>> 생활코딩 WEB2-HTTP를 학습, 정리한 내용입니다.(https://opentutorials.org/course/3385)
    
# HTTP

- 브라우저와 서버 간 통신 규칙인 HTTP
    - Request Message
    - Response Message
    
# 목차
* chapter 1 ~ chapter 4
    1. Http
    2. Request message
    3. Response message
    4. 정리

# 수업소개

2021년 3월 28일 일요일
오후 4:23

## HyperText Transfer Protocol
* HTTP는 W3 상에서 정보를 주고받을 수 있는 프로토콜이다. 
* 주로 HTML 문서를 주고받는 데에 쓰인다. 
* HTTP는 주로 Request와 Response를 위한 메세지로 구분되어 있다.
* 주로 TCP를 사용하고 
* HTTP/3 부터는 UDP를 사용하며, 80번 포트를 사용한다. 
* 1996년 버전 1.0, 그리고 1999년 1.1이 각각 발표되었다.

>출처: <https://www.google.com/search?q=http&oq=http&aqs=chrome..69i57j69i60l3j69i65l3j69i60.1429j0j4&sourceid=chrome&ie=UTF-8> 

### 웹과 HTTP
* 1990년 팀 버너스 리와 그의 동료들이 웹을 세상에 최초로 내놓았을때 웹은 크게 4가지 요소로 이루어져 있었다.
	1. html  (웹페이지를 만드는 컴퓨터 언어)
	2. url  (원하는 웹페이지에 방문 할 수 있도록 도와주는 주소체계)
	3. 웹브라우저-웹서버  (웹페이지를 주고받는 소프트웨어)
	4. http  (웹브라우저와 웹서버가 통신할때 사용하는 통신 규칙)
* http는 매우 단순했었다. 하지만 단순한 http의 기능만으로는 성능, 보안, 안정성 확보가 힘들었다.
* 보다 풍부한 기능을 가진 http로 발전하기 시작
* 텍스트 파일 뿐만 아니라 이미지, 오디오, 동영상 등 멀티미디어 파일을 전송하는 가장 중요한 프로토콜 
* 웹을 넘어서서 인터넷을 움직이는 근간이라 할 수 있다. 

### HTTP를 배움으로써...
* '서버와 클라이언트는 어떤 메세지로 서로 응답하는가'를 알 수 있다.
* 'http와 다르지만 본질은 같은 다른 프로토콜에 대한 이해'도 높아질 것이다.

### 크롬 개발자 툴로 본 HTTP(network탭)
![HTTP_image](image/HTTP_image.png)
* Request Headers 
  * 웹브라우저가 웹서버에게 요청한 데이터(보낸 텍스트)
  * 필수 정보(2줄)
    1. GET /welcome HTTP/1.1
      * GET방식으로   /welcome을 요청하면서 통신방법은 HTTP/1.1
    2. Host: localhost
      * localhost로 접속했다.
* Response Headers(위에)
  * 웹 서버는 사용자가 요청한 내용을 Response Headers로 응답한다.
  * 필수 정보(1줄)
    1. HTTP/1.1 200 OK  
      * HTTP/1.1 - 방식으로 통신할거야 라고 웹 서버가 웹 브라우저에게 응답 
      * 200 OK - 성공적으로 데이터를 찾아서 보냈다. 
    * 추가 주목할만한 정보
      * Content-Length: 8 - 컨텐츠 길이
      * Content-type: text/html - 응답하는 정보가 text이고 text중에 html이다.    

## 웹브라우저와 웹서버
* 웹브라우저 역할 : 
  * 사용자가 요청한 정보를 웹 서버에게 대신 물어봐 줌. (Request Header) 
  * 응답한 정보를 화면에 적당히 그려주는 역할을 하는 프로그램이라고도 보충적으로 알 수 있다.
* 웹서버 역할 : 
  * 자기가 갖고 있는 정보를 보내주면서 Response Header 만들어 주는 그런 기계.
 


# Request message

2021년 3월 28일 일요일
오후 5:04

## http request header  
* 검색 이미지) http request header  
	> https://lh3.googleusercontent.com/proxy/TaEG2-ohfo7fx5tsfmTSm0OoJd6CpibC9xd-KWBZrSxBKW-_s6YS2rUNLezm3RK7O56vu_9isuHYMvzpaKJlTevmTNE0ZaGGtgsTUrAZnvsG3OX2TjpmV_4WbwelR0h9yJrnphyAW8vl1KNoELIIY2qXpyR-wgHUvfMRj-br

![HTTP_image2](image/HTTP_image2.png)

* Request Line 중요**
  * GET /doc/test.html HTTP/1.1 
  * GET 방식으로 /doc/test.html파일을 http/1.1버전으로 요청
* Request Headers 
  * Host  중요**
    * 웹사이트의 **웹서버의 주소**를 적는 것.
    * 만약 하나의 웹서버거 여러 개의 도메인을 서비스한다면 그리고 각 주소별로 다른 웹사이트라고 한다면 웹서버는 host에 적혀있는 주소가 무엇이냐를 따라서 다른 정보를 보내줄 수 있다.
  * localhost 
    * 가상호스트 8080: 포트
  * User-Agent
    * 웹브라우저의 다른 이름. 
    * 요청하는 **웹브라우저가 어떤 것인지 운영체제 버전 등 유저의 정보**를 알려준다.
    * 통계를 확인하거나 보안강화에도 사용하는 이름이다.
  * Accept-Encoding 
    * 웹브라우저와 웹서버가 서로 통신할 때 응답하는 데이터의 양이 많으면 그걸 압축해서 전송하면 웹브라우저가 것을 압축을 풀어서 처리할 수 있다. 그러면 네트워크의 자원을 아낄 수 있다. 
    * 그러니까 액셉트 인코딩은 **어떤 압축방식을 지원하는지** 알려주는것. 
    * 적혀있는 것들 중 하나의 압축 방식을 선택해서 압축해서 보낸다.
  * If-Modified-Since 
    * 파일을 요청할 때마다 다운 받는것은 비효율적이므로 **마지막으로 언제 다운로드 받았는지** 알려준다. 
    * 서버는 응답할때 자기가 갖고 있는 파일과 비교해서 자신이 갖고 있는 파일이 최신이면 보내주고 최신이 아니면, 즉 다운로드할 필요가 없으면 전송하지 않아도 되는 것. 


# Response message

2021년 3월 28일 일요일
오후 5:21

## http response message
* 검색 이미지)
  > https://media.vlpt.us/post-images/rosewwross/6fc65770-4b39-11ea-abce-67c155f8f58a/image.png

![HTTP_image3](image/HTTP_image3.png)

### http response Header format
![HTTP_image4.png](image/HTTP_image4.png)
* (Http의) 버전이 나오고 응답결과에 대한 얘기(status code)가 나오고 phrase는 응답결과를 사람이 이해하기 쉽도록 말로 풀어쓴 것.

### Response Headers
![HTTP_image5.png](image/HTTP_image5.png)
* 200 이 status code
유명한 헤더
* Content-Type: text/html - 파일의 콘텐츠 타입을 보여줌
* Content-Length : 1434 - 응답하는 파일의 사이즈
* Content_Encoding : gzip - 방축방식을 알려줘서 읽을라면  gzip으로 압축을 풀어서 읽어야 된다.
* Last-Modified - 마지막 수정일


## http status codes
* 검색)
  > https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C
* 1xx (조건부 응답)요청을 받았으며 작업을 계속한다.

* 2xx (성공)이 클래스의 상태 코드는 클라이언트가 요청한 동작을 수신하여 이해했고 승낙했으며 성공적으로 처리했음을 가리킨다.
  * EX) 200(성공): 서버가 요청을 제대로 처리했다는 뜻이다. 이는 주로 서버가 요청한 페이지를 제공했다는 의미로 쓰인다.

* 3xx (리다이렉션 완료)클라이언트는 요청을 마치기 위해 추가 동작을 취해야 한다.

* 4xx (요청 오류) 4xx 클래스의 상태 코드는 클라이언트에 오류가 있음을 나타낸다.
  * EX) 404(Not Found, 찾을 수 없음): 서버가 요청한 페이지(Resource)를 찾을 수 없다. 예를 들어 서버에 존재하지 않는 페이지에 대한 요청이 있을 경우 서버는 이 코드를 제공한다.
  * 403(Forbidden, 금지됨): 서버가 요청을 거부하고 있다. 예를 들자면, 사용자가 리소스에 대한 필요 권한을 갖고 있지 않다. (401은 인증 실패, 403은 인가 실패라고 볼 수 있음)

* 5xx (서버 오류)서버가 유효한 요청을 명백하게 수행하지 못했음을 나타낸다.
  * EX) 500(내부 서버 오류): 서버에 오류가 발생하여 요청을 수행할 수 없다.


# 수업을 마치며

2021년 3월 28일 일요일

## 정리
1. HTTPS(SSL)
  * HTTP 와 HTTPS(SSL)의 차이점 S는 secure 전송하고 있는 내용을 가로챈다고 하더라도 실제로 무슨 내용이 있는지는 당사자만 알 수 있다. 암호화 되어 있기 때문에. 
  * http로 시작하는 사이트에서는 로그인 하면 안된다. 개인 정보 유출 위험 있음.
2. cache 한번 사이트에 접속 해서 다운로드 받았다면 다시 다운로드 받지 않아도 된다.
   * 캐시 갱신 단축키
	![HTTP_image6.png](image/HTTP_image6.png)
   * 캐시 갱신에 대한 내용을 일반 사용자는 알 수 없다.
   * cache-control , pragma 이러한 헤더값들은 캐시를 제어하는 테크닉 또 애플리케이션 캐시같은 것도 성능향상을 위한 기술
3. cookie 기술을 이용해서 쿠키값을 웹브라우저에 설정하면 사용자 상태를 유지하면서 
쇼핑몰 사이트 장바구니 상태 유지
  * 로그인상태 유지>>쿠키(기록들을 웹사이트와 웹브라우저가 기억하기 있기 때문)
4. web storage
   * 최근 등장, 쿠키보다도 훨씬 더 많은 정보를 저장하면서도 보안적으로도 우수
5. proxy 
  * 중계서버. 중간에 있는 서버가 캐시를 대신해주거나 보안과 관련된 공격을 막아주거나 적당히 사용자 요청을 여러 대 서비스로 분산해주는 역할 등을 함.
  * 서비스가 복잡해지고 중요해지면 프록시서버 기술이 필요.


6. 네크워크 모니터링 도구들
  1. 웹브라우저의 개발자 도구의 네트워크 모니터링 기능
    * 가장 간편한 도구
    * 매우 사용하기 쉽기 때문에 우선적으로 사용해 볼만함.
  
  2. 와이어샤크
    * 그리고 오픈소스이고 무료이면서 가장 강력한 기능을 가진 도구
    * http뿐 아니라 컴퓨터에서 일어나는 모든 네트워크 트래픽을 감시할 수 있는 강력한 도구. 
    * 배우기 어렵고 복잡하지만 익숙해지면 강력한 도구
