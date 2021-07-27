# BE_PJT A-1. 나를 소개하는 홈페이지 만들기


# 1. 프로젝트 개요
‘나를 소개하는 웹페이지’ 만들기

여러분들은 HTML페이지 3개와 서블릿 하나를 Tomcat 서버 위에서 동작하게 해야 한다.

# 기획서
> [부코 웹 pjt1 자기소개페이지.pptx](https://docs.google.com/presentation/d/1Q0qZO7mEh5VFcm2riFsP0XViNaKUP7Bj5NCjiia3hyo/edit#slide=id.g7b8037d172_0_0)


# 2. 프로젝트의 개발스펙
## 웹프론트엔드 기술요구사항
* html layout tag를 사용합니다.
* classname은 일정한 컨벤션을 유지합니다.
* 의미에 맞는 tag를 최대한 사용합니다. (div 사용은 최대한 자제)
* position속성과 float를 사용해서 element를 배치합니다.
* 라이브러리를 사용한 레이아웃은 지양합니다. (부트스트랩 등)
* id와 class등의 다양한 selector문법을 잘 활용해야 합니다.
 

## 웹백엔드 기술요구사항
* 톰캣서버를 통해서 자기소개 페이지가 동작되야 합니다.
  * ex) http://localhost:8080/aboutme/index.html 에서 노출
* 서블릿페이지하나를 생성해서, url을 입력했을 때 시간데이터가 화면에 노출돼야 합니다.


# 3. 프로젝트 개발과정 참고
## 개발환경
* JDK 설치(ver 1.8)
* 이클립스 설치
* tomcat 설치(ver 8.5)
 

## 개발순서 (BE)
1. 프로젝트 이름을 aboutme 로 Dynamic Web Project 를 생성합니다.
2. 생성된 aboutme 프로젝트의 webContent 폴더에 index.html, aboutme.html, photo.html 파일을 작성합니다.
3. 이미 다른곳에서 작성했다면 해당 디렉토리로 이동합니다. 주의) 반드시 이클립스에서 붙여넣기 합니다.
4. 서블릿 클래스의 이름은 TodayServlet으로 하고, 해당 서블릿의 URL경로는 http://localhost:8080/aboutme/today 로 하는 서블릿 클래스를 생성합니다.
5. 기획서의 내용에 맞게 화면에 현재시간과 메인화면 링크가 나오도록 페이지를 작성합니다.
 

# 참고 자료
Java Archive Downloads - Java SE 8  
http://www.oracle.com

Java Archive Downloads - Java SE 8  
Apache Tomcat 8.5  
https://tomcat.apache.org

SUN 가이드  
http://www.oracle.com

Google 가이드  
https://google.github.io

# 프로젝트 실습 코드
aboutme project - Dynamic Web Project
## aboutme.html
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>about me</title>
<link rel="stylesheet" href="mystyle.css" />
</head>
<body id="wrap">
	<header>
		<ul id="header-menu">
			<li><a href="index.html">홈</a></li>
			<li><a href="aboutme.html">자기소개</a></li>
			<li><a href="photo.html">내사진</a></li>
			<li><a href="today">몇시에요</a></li>
		</ul>
	</header>
	<section class="articles">
		<article>
			<h2>이런 것을 잘해요?</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
				exercitationem earum maxime laudantium culpa delectus ab? Maiores
				amet ducimus suscipit ipsum ea, voluptatum voluptate blanditiis
				magni quaerat magnam non iste.Sitquaerat autem aut tempora dolor
				consequatur possimus, mollitia namsimilique? Fugit incidunt id
				molestias omnis quaerat.adipisicing elit. Placeat
				perspiciatisconsectetur vero nobis! Sit quaerat autem aut tempora
				dolorconsequatur possimus, mollitia nam similique?</p>
		</article>
		<article>
			<h2>나의 포트폴리오</h2>
			<p id="homepagelink">
				<a href="">www.homepage.com</a>제 홈페이지 입니다. 이곳에서 많은 개발코드를 볼 수 있습니다.
			</p>
			<p id="githublink">
				<a href="">github.com/qufstar7</a>제 홈페이지 입니다. 이곳에서 많은 개발코드를 볼 수
				있습니다.
			</p>
		</article>
		<article>
			<h2>나의 최근 프로젝트 설명</h2>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Placeat perspiciatis consectetur vero nobis! Sit quaerat autem aut
				tempora dolor consequatur possimus, mollitia nam similique? Fugit
				incidunt id molestias omnis quaerat.Lorem ipsum dolor sit amet
				consectetur, adipisicing elit. Placeat perspiciatis consectetur vero
				nobis! Sit quaerat autem aut tempora dolor consequatur possimus,
				mollitia nam similique? Fugit incidunt id molestias omnis
				quaerat.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Placeat perspiciatis consectetur vero nobis! Sit quaerat autem aut
				tempora dolor consequatur possimus, mollitia nam similique? Fugit
				incidunt id molestias omnis quaerat.</p>
		</article>
	</section>
	<footer>
		<p>email : qufstar7@gmail.com</p>
		<p>github : https://github.com/qufstar7</p>
	</footer>
</body>
</html>
```
## index.html
```html
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>index</title>
<link rel="stylesheet" href="mystyle.css">
</head>

<body>
	<header>
		<ul id="header-menu">
			<li><a href="index.html">홈</a>
			<li><a href="aboutme.html">자기소개</a>
			<li><a href="photo.html">내사진</a>
			<li><a href="today">몇시에요</a>
		</ul>
	</header>
	<section>
		<h1>웹 개발자를 공부하는 김준하입니다.</h1>
		<p>열심히 배워서 좋은 개발자가 되고 싶어요</p>
		<p>경기도 고양시 일산에 살고 있어요.</p>
		<ul id="section-ul">
			<li><a href="aboutme.html">자기소개</a>
			<li><a href="photo.html">내사진</a>
		</ul>
		<img src="image/map.png"></img>
	</section>
	<footer>
		<p>email : qufstar7@gmail.com</p>
		<p>github : https://github.com/qufstar7</p>
	</footer>
</body>

</html>
```
## mystyle.css
```css
html {
	height: 100%;
}

body {
	background-color: white;
	text-align: center;
	color: navy;
}

li {
	list-style-type: none;
	background-color: navy;
	margin: 5px;
	box-shadow: 5px 5px grey;
}

li:hover:not(.active) {
	background-color: rgb(0, 7, 107);
}

a {
	text-decoration: none;
	color: skyblue;
	cursor: pointer;
	display: block;
}

header, section, footer {
	margin: 10px 0px;
	background-color: skyblue;
	overflow: auto;
}

#header-menu {
	float: right;
}

#header-menu li {
	float: left;
	width: 120px;
}

#header-menu a {
	padding: 14px 16px;
}

#section-ul {
	text-align: center;
	padding: 0px;
	margin: 0px;
}

#section-ul li {
	display: inline-block;
	width: 120px;
}

#section-ul a {
	padding: 45px 15px;
}

img {
	width: auto;
	height: auto;
	max-width: 700px;
	margin: 20px;
}

.articles article {
	margin: 20px 40px;
	height: 300px;
}

.articles article h2 {
	margin-bottom: 0px;
}

.articles p {
	margin-top: 0;
}

#homepagelink a, #githublink a {
	color: blue;
	font-size: 20px;
}

#photo1, #photo2 {
	width: 300px;
	height: 300px;
	display: flex;
	justify-content: center;
	border: solid 10px;
}

#photoarticle1, #photoarticle2 {
	display: inline-flex;
}

#photo1description, #photo2description {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
}
```

## photo.html
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>photo</title>
<link rel="stylesheet" href="mystyle.css" />
</head>
<body id="wrap">
	<header>
		<ul id="header-menu">
			<li><a href="index.html">홈</a></li>
			<li><a href="aboutme.html">자기소개</a></li>
			<li><a href="photo.html">내사진</a></li>
			<li><a href="today">몇시에요</a></li>
		</ul>
	</header>
	<section>
		<article id="photoarticle1">
			<img id="photo1" src="image/apple.jpg" />
			<div id="photo1description">
				2001.03.11<br />사진1입니다<br />Lorem ipsum dolor sit amet,
				consectetur adipisicing elit.<br />Lorem ipsum, dolor sit amet
				consectetur adipisicing elit.
			</div>
		</article>
		<hr />
		<article id="photoarticle2">
			<img id="photo2" src="image/like.jpg" />
			<div id="photo2description">
				2001.03.11<br />사진2입니다<br />Lorem ipsum dolor sit amet,
				consectetur adipisicing elit.<br />Lorem ipsum, dolor sit amet
				consectetur adipisicing elit.
			</div>
		</article>
	</section>
	<footer>
		<p>email : qufstar7@gmail.com</p>
		<p>github : https://github.com/qufstar7</p>
	</footer>
</body>
</html>
```
