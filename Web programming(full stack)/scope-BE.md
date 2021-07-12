> 부스트코스 - 웹 프로그래밍(풀스택)강의를 학습, 정리한 내용입니다.(https://www.boostcourse.org/web316/joinLectures/12943)

# scope - BackEnd

- [scope - BackEnd](#scope---backend)
  - [# 1) scope란?](#-1-scope란)
  - [핵심 개념](#핵심-개념)
  - [4가지 Scope](#4가지-scope)
  - [생각해보기](#생각해보기)
    - [내 생각](#내-생각)
  - [참고 자료](#참고-자료)
  - [# 2) page scope](#-2-page-scope)
  - [핵심 개념](#핵심-개념-1)
  - [Page Scope](#page-scope)
    - [정리](#정리)
  - [생각해보기](#생각해보기-1)
    - [내 생각](#내-생각-1)
  - [참고 자료](#참고-자료-1)
  - [# 3) request scope](#-3-request-scope)
  - [핵심 개념](#핵심-개념-2)
  - [Request Scope](#request-scope)
  - [생각해보기](#생각해보기-2)
    - [내 생각](#내-생각-2)
  - [참고 자료](#참고-자료-2)
  - [# 4) session scope](#-4-session-scope)
  - [핵심 개념](#핵심-개념-3)
  - [Session Scope](#session-scope)
  - [Session의 사용](#session의-사용)
  - [생각해보기](#생각해보기-3)
    - [내 생각](#내-생각-3)
  - [참고 자료](#참고-자료-3)
  - [# 5) application scope](#-5-application-scope)
  - [핵심 개념](#핵심-개념-4)
  - [Application Scope](#application-scope)
  - [Application scope의 사용](#application-scope의-사용)
  - [Application scope 실습](#application-scope-실습)
    - [ApplicationScope01.java](#applicationscope01java)
    - [ApplicationScope02.java](#applicationscope02java)
    - [applicationscope01.jsp](#applicationscope01jsp)
  - [실행결과](#실행결과)
  - [생각해보기](#생각해보기-4)
    - [내 생각](#내-생각-4)
  - [참고 자료](#참고-자료-4)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# 1) scope란?
---
스코프에 대해 알아보자
* Servlet과 JSP를 개발하다보면 변수를 많이 다루게 된다.
* 어떤 변수는 웹 어플리케이션에서 공유하고 싶은 변수가 있을 수도 있고, 어떤 변수는 사용자 별로 유지하고 싶은 변수가 있을 수 있다.
* 또 어떤 변수는 포워딩 되는 동안 유지하고 싶은 변수가 있다.
* 이렇게 변수를 어떤 범위 내에서 사용하기 위해서는 스코프(scope)라는 것에 대해서 알아야 한다.
## 핵심 개념
* 스코프
* 4가지 스코프
  1. application scope
  2. session scope
  3. request scope
  4. page scope
> 출처 http://inheritingjava.blogspot.kr/2011/04/chapter-42-scope-of-javabeans-in-jsp.html
## 4가지 Scope
1. Application : 웹 어플리케이션이 시작되고 종료될 때까지 변수가 유지되는 경우 사용
   * 어플리케이션이 생성되서 소멸될 때까지 유지
2. Session : 웹 브라우저 별로 변수가 관리되는 경우 사용
   * 세션 객체가 생성되서 소멸될 때까지 유지
   * 요청이 하나가 아니라 여러 개의 요청이 들어와도 계속 남아 있을 수 있다.
   * 상태 유지(추후 학습)를 할 때 사용하는 스코프
3. Request : http요청을 WAS가 받아서 웹 브라우저에게 응답할 때까지 변수가 유지되는 경우 사용
   * 클라이언트 요청들어오고 부터 서버가 응답을 보낼 때까지 사용 가능
4. Page : 페이지 내에서 지역변수처럼 사용
   * 선언된 페이지 안에서만 사용 가능
* 예시
   * 포워드
     * 서블릿 1에서 서블릿 2로 포워드 했을 때 request 영역은 같았다.
     * 그런데 페이지 영역은, 서블릿 1 페이지 영역과 서블릿 2가 가진 페이지 영역은 달랐다.
## 생각해보기
* 회사 관리 프로그램을 만듭니다. 
* 회사 전체적으로 사용되는 특정 정보가 약 1메가 정도 있습니다. 
* 이 정보는 자주 바뀌지 않고, 모든 사원들이 공통적으로 사용하는 코드입니다. 
* 이러한 정보는 어떤 scope로 사용하는 것이 좋을까요?
### 내 생각
* 자주 바뀌지 않고 모든 사원들이 공통으로 사용한다면 가장 사용 범위가 넓은 application scope를 사용하는 것이 좋을 것 같다.
## 참고 자료
> [참고링크] Application, Request, Session and Page Scopes in Servlets and JSPs
http://www.javajee.com


# 2) page scope
---
page scope에 대해서 알아보자
* 특정 서블릿이나 JSP가 실행되는 동안에만 정보를 유지 하고 싶은 경우가 있다.
* 이 경우에 사용되는 것이 page scope
## 핵심 개념
* `PageContext`
## Page Scope
* `PageContext` 추상 클래스를 사용한다.
* JSP 페이지에서 `pageContext`라는 내장 객체로 사용 가능 하다.
  * 사용예시 - `exam1_jsp.txt`
    ```
     javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
    ```
    * jsp 페이지에서 직접 사용할 경우
    * pageContext.setAttribute(), .getAttribute() 와 같이 메서드를 사용하면 된다.
* forward가 될 경우 해당 Page scope에 지정된 변수는 사용할 수 없다.
  * 서블릿 1번이 요청을 받았을 때 해당 요청을 받은 페이지 하나당 pageContext가 하나씩 생긴다.
  * 서블릿 1번이 역할을 수행하고 서블릿 2로 수행을 넘길 때 pageContext는 메모리에서 없어지고 새로운 pageContext가 생성된다.(서로 다른 서블릿 페이지 이므로)
* 사용방법은 Application scope나 Session scope, request scope와 같다.
  * 이름.setAttribute, getAttribute
* 마치 지역변수처럼 사용된다는 것이 다른 Scope들과 다르다.
  * 각 페이지가 유지될 때까지만 사용
* jsp에서 pageScope에 값을 저장한 후 해당 값을 EL표기법 등에서 사용할 때 주로 사용된다.
  * 페이지에서 변수를 선언해서 값을 저장해서 사용하는 거나 pageContext에다가 setAttribute해서 사용하는 거나 크게 차이가 없기 때문에 굳이 많이 사용할 필요는 없다.
  * EL표기법이나 JSTL이용시에 조금 더 편해서 사용
* 지역 변수처럼 해당 jsp나 서블릿이 실행되는 동안에만 정보를 유지하고자 할 때 사용된다.
### 정리
* jsp에서 내장 객체로 이미 만들어져 있기 때문에 pageConxt.setAttribute, pageContext.getAttribute 이렇게 사용하면 된다.
## 생각해보기
* page scope를 이용하여 사용되는 변수와 지역변수는 거의 유사합니다. 
* 하지만, 앞으로 배울 EL과 JSTL을 이용할 경우에는 구분되어 사용될 경우가 발생합니다. 
* page scope와 지역변수가 유사하다고 하였는데요. 
* 어떤 부분에서 유사할까요?
### 내 생각
* 지역 변수는 특별한 구역(중괄호{} 안)에서 사용할 수 있는 변수, page scope는 같은 페이지 안에서 사용할 수 있는 변수로 둘 다 사용할 수 있는 범위가 한정된다는 점이 유사하다.
## 참고 자료
> [참고링크] Application, Request, Session and Page Scopes in Servlets and JSPs
http://www.javajee.com


# 3) request scope
---
request scope에 대해 알아보자
* 웹 브라우저로부터 WAS가 요청을 받은 후, 포워드 되는 동안 유지하고 싶은 정보가 있을 경우 request scope를 사용
## 핵심 개념
* HttpServletRequest
* forward
* request.setAttribute() - 값을 맡길 때
* request.getAttribute() - 값을 얻어낼 때
  * 어떤 스코프든 setAttribute()와 getAttribute()를 사용한다.
## Request Scope
* http 요청을 WAS가 받아서 웹 브라우저에게 응답할 때까지 변수값을 유지하고자 할 경우 사용한다.
* HttpServletRequest 객체를 사용한다.
* JSP에서는 request 내장 변수를 사용한다.
* 서블릿에서는 HttpServletRequest 객체를 사용한다.
* 값을 저장할 때는 request 객체의 setAttribute()메소드를 사용한다.
* 값을 읽어 들일 때는 request 객체의 getAttribute()메소드를 사용한다.
* forward 시 값을 유지하고자 사용한다.
* 앞에서 forward에 대하여 배울 때 forward 하기 전에 request 객체의 setAttribute() 메소드로 값을 설정한 후, 서블릿이나 jsp에게 결과를 전달하여 값을 출력하도록 하였는데 이렇게 포워드 되는 동안 값이 유지되는 것이 Request scope를 이용했다고 한다. 
## 생각해보기
* 리다이렉트 될 경우에도 request scope를 이용하면 정보를 유지할 수 있을까요?
* 만약 정보를 유지할 수 없다면 이유가 무엇일까요?
### 내 생각
* 정보를 유지할 수 없다.
* 리다이렉트는 기존 요청에 대해 리다이렉트 location을 응답했을 때 재요청을 하기 때문에 기존의 request scope를 이용한 정보는 유지 되지 않는다.
## 참고 자료
> [참고링크] Application, Request, Session and Page Scopes in Servlets and JSPs 
http://www.javajee.com


# 4) session scope
---
세션 스코프에 대해 알아보자
* 접속한 웹 브라우저별로 정보를 관리 하고 싶을 때 세션 scope를 사용
## 핵심 개념
* HttpSession
* session.setAttribute()
* session.getAttribute()
## Session Scope
* 웹 브라우저별로 변수를 관리하고자 할 경우 사용한다.
* 웹 브라우저간의 탭 간에는 세션정보가 공유되기 때문에, 각각의 탭에서는 같은 세션정보를 사용할 수 있다.
* 클라이언트의 정보를 유지할 필요가 있을 때 사용한다.
  * 장바구니처럼 사용자별로 유지가 되어야 할 정보가 있을 때 사용
## Session의 사용
* HttpSession 인터페이스를 구현한 객체를 사용한다.
* JSP에서는 session 내장 변수를 사용한다.
* 서블릿에서는 HttpServletRequest의 `getSession()`메소드를 이용하여 session 객체를 얻는다.
* 값을 저장할 때는 session 객체의 `setAttribute()`메소드를 사용한다.
* 값을 읽어 들일 때는 session 객체의 `getAttribute()`메소드를 사용한다.
## 생각해보기
* session scope는 어떤 경우에 이용하는 것이 좋을까요? 
* 예를 한번 생각해보세요.
### 내 생각
* 장바구니, 구매목록, 결재내역, 로그인과 같이 클라이언트의 정보를 유지할 필요가 있을 때
## 참고 자료
> [참고링크] JSP Scopes Example - Dinesh on Java
https://www.dineshonjava.com


# 5) application scope
---
어플리케이션 스코프에 대해서 알아보자
* 하나의 웹 어플리케이션에서 공유하고 싶은 변수가 있을 때 application scope를 사용
## 핵심 개념
* ServletContext
* setAttribute
* getAttribute
## Application Scope 
* 웹 어플리케이션이 시작되고 종료될 때까지 변수를 사용할 수 있다.
* 어플리케이션 스코프는 하나의 웹 어플리케이션 내의 객체 하나라고 생각하면 된다.
* 어플리케이션은 서버안에 여러 개가 있을 수 있다.(firstWeb, exam31, exam25, ...)
  * localhost/firstWeb/
    * 이게 하나의 어플리케이션을 의미한다고 볼 수 있다.
* 여러 클라이언트가 하나의 웹 어플리케이션이 접근할 때 어떤 클라이언트든 하나의 어플리케이션 스코프에 해당하는 영역을 사용한다.
## Application scope의 사용
* ServletContext 인터페이스를 구현한 객체를 사용한다.
* jsp에서는 application 내장 객체를 이용한다.
* 서블릿의 경우는 `getServletContext()`메소드를 이용하여 application객체를 이용한다.
* 웹 어플리케이션 하나당 하나의 application객체가 사용된다.
* 값을 저장할 때는 application객체의 `setAttribute()`메소드를 사용한다.
* 값을 읽어 들일 때는 application객체의 `getAttribute()`메소드를 사용한다.
* ***모든 클라이언트가 공통으로 사용해야 할 값들이 있을 때 사용한다.***
## Application scope 실습
* ApplicationScope01, ApplicationScope02 서블릿을 2개 생성한다.
* `applicationscope01.jsp`를 생성한다.
* ApplicationScope01 서블릿에서는 Application scope로 "value"에 1값을 저장한다.
* ApplicationScope02는 Application scope에서 저장된 "value"의 값에 1를 더한 후 그 결과를 출력한다.
* `applicationscope01.jsp`는 Application scope로 저장된 "value"의 값에 2를 더한 후 그 결과를 출력한다.
* Application scope는 웹 어플리케이션을 사용하는 모든 브라우저에서 같은 값을 사용하게 한다. 
* 테스트를 위해서 크롬과 인터넷 익스플로러를 사용해서 결과를 확인한다.
### ApplicationScope01.java
```java
package examples;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ApplicationScope01")
public class ApplicationScope01 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public ApplicationScope01() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html; charset=UTF-8"); // 응답 콘텐츠 타입 지정
		PrintWriter out = response.getWriter(); // 응답을 내보낼 통로 변수 out

		ServletContext application = getServletContext(); // 어플리케이션 객체(Servlet Context) 변수 application
		int val = 1; // 저장할 값 1을 변수 val에 할당
		application.setAttribute("value", val); // "value"의 값에 1을 저장

		out.println("<h1>value : " + val + "</h1>"); // <h1>태그 이용해 출력
	}

}
```

### ApplicationScope02.java
```java
package examples;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ApplicationScope02")
public class ApplicationScope02 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public ApplicationScope02() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();

		ServletContext application = getServletContext();
		try { // (02파일이 먼저 실행시) value값이 없을 경우(null값) 에러 발생
			int val = (int) application.getAttribute("value"); // 어플리케이션 스코프의 "value"값을 가져옴. int로 형변환 후 val에 저장
			val++; // val 증가
			application.setAttribute("value", val); // "value"에 val값을 맡김(설정)

			out.println("<h1>value : " + val + "</h1>");
		} catch (NullPointerException e) {
			out.print("value의 값이 설정되지 않았습니다.");
		}
	}

}
```
### applicationscope01.jsp
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	try {
		int val = (int) application.getAttribute("value");
		val = val + 2;
		application.setAttribute("value", val);
	%>
	<h1><%=val%></h1>
	<%
	} catch (NullPointerException e) {
	%>
	<h1>설정된 값이 없습니다.</h1>
	<%
	}
	%>
</body>
</html>
```
## 실행결과
* applicationScope01.jsp를 먼저 실행해보니 "설정된 값이 없습니다."라고 에러가 뜬다. 
  * getAttribute할 값이 ApplicationScope01.java 서블릿에서 생성되기 때문에 먼저 01서블릿을 실행해야한다.
* 이제 01서블릿을 실행해보고 02서블릿을 실행해보니 각각 출력 결과는 1, 2가 나온다.
  * 01서블릿에서 어플리케이션 스코프가 제대로 생성되었고 02서블릿에서 제대로 호출해 사용했음을 알 수 있다.
* 그리고 다시 아까 01jsp 을 실행해 열었던 브라우저를 새로고침하면 이번에는 4라는 값이 출력됨을 확인 할 수 있다. 
  * 브라우저(클라이언트)가 바뀌어도 어플리케이션 스코프를 사용할 수 있음을 확인할 수 있다.
* 크롬을 열어 01jsp URL을 열어보면 8이 출력된다.
  * 계속 "value" 값이 사용되고 있음을 알 수 있다.
  * 웹 어플리케이션이 다시 시작할 때 까지 value값이 사용 된다.
* 다시 웹 어플리케이션을 실행시켜보면(01 서블릿 run) 1이 출력된 것을 확인할 수 있다.(원래 어플리케이션 스코프는 없어졌고 새로 생성)
## 생각해보기
* 어플리케이션 스코프에 List객체를 저장했습니다. 
* 이 List객체에 주기적으로 값이 저장은 되지만, 삭제는 되지 않고 있습니다. 
* 이 경우 어떤 문제가 발생할 수 있을까요?
### 내 생각
* 자바의 리스트는 크기가 정해지지 않아 메모리를 다 잡아 먹을 정도로 커질 수 있다.
* 어플리케이션이 오랜 시간동안 작동했다면 꽤 많은 값이 어플리케이션 스코프의 list객체에 쌓여 메모리가 부족한 상황이 생길 것이다. 
* 이 경우 프로그램이 느려지거나 기존의 데이터가 사라지거나 프로그램이 팅겨버리는 상황이 생길 수도 있다.
## 참고 자료
> [참고링크] Web Application Scope
https://www.pearsonitcertification.com