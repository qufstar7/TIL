# Project B. TO-DO LIST 구현하기

# 1. 프로젝트 개요
'할 일 관리' 웹 페이지를 개발

'할 일 관리'는 해야 할 일, 하고 있는 일, 한 일을 웹 브라우저에서 확인할 수 있는 웹 애플리케이션

# 기획서
> [부코_웹_PJT2_TODO-LIST.pptx](https://docs.google.com/presentation/d/163ZmA14C4OGB85QnlXMOo9vO9KFN3YzXYbTYPW7wngs/edit#slide=id.p3)

![mainpage](image/mainpage.png)

![addlistpage](image/addlistpage.png)

# 2. 프로젝트의 개발스펙
## 웹프론트엔드 기술요구사항
* 총 2개의 화면이 존재
  - 할 일 목록 화면 (리스트)
  - 할 일 등록 화면 (쓰기)
* CSS는 기획서와 동일한 수준으로 만들어야 합니다.
* 따라서 HTML 엘리먼트간의 배치와 간격은 일정하고 반듯해야 합니다.
* 글자의 크기는 일정한 수준을 유지합니다.
* CSS는 외부 라이브러리(부트스트랩)을 사용하지 않습니다.
* jQuery를 사용하지 않고, querySelector, addEventListener, innerHTML을 사용해서 DOM, EVENT 처리를 합니다.
* Ajax는 XMLHTTPRequest를 사용합니다.
 
## 웹백엔드 기술요구사항
* 프로젝트는 maven프로젝트로 생성합니다.
* 제공된 테이블 생성 SQL을 이용해서 테이블을 생성합니다.
* TodoDto 클래스와 TodoDao클래스를 주어진 스펙에 맞게 작성합니다.
* 메인화면을 보여주기 위한 MainServlet과 main.jsp를 작성합니다.
* MainServlet은 TodoDao를 이용해 결과를 조회해서 main.jsp 에 전달합니다.
* 새로운todo등록 버튼을 클릭하면 해당 요청을 서블릿이 받아서 jsp로 포워딩하여 할 일 등록 화면을 보여줍니다.
* 할일등록폼에서 값을 입력하고 제출 버튼을 누르면 post 방식으로 요청하게 합니다.
* 해당 요청을 서블릿이 받아서 처리하게하고, 요청에 대한 모든 일이 끝나면 메인화면으로 리다이렉트 합니다.
* 메인화면에서 todo 상태변경 버튼(->)을 클릭하여 요청을 보낼 때, Todo 의 Id와 상태값을 전달하여 다음 상태로 (현재 상태가 Todo라면 doing으로 doing 이라면 done) 상태를 나타내는 컬럼값을 변경하고 응답결과로 "success"를 보냅니다.

# 3. 프로젝트 개발과정 참고
## BE 개발 - MySql설치
1. 프로젝트 이름을 Todo로해서 maven프로젝트를 생성합니다.
2. 제공된 테이블 생성 SQL을 이용해서 테이블을 생성합니다.
3. Todo 테이블에 정보 한 건을 담을 수 있는 TodoDto 클래스를 주어진 스펙에 맞게 작성합니다.
4. Todo 테이블에 입력, 수정, 조회하는 TodoDao클래스를 주어진 스펙에 맞게 작성합니다.
5. 메인화면을 보여주기 위한 MainServlet과 main.jsp를 작성합니다.
6. MainServlet은 TodoDao를 이용해 결과를 조회해서 main.jsp 에 전달합니다.
7. main.jsp에서는 전달받은 결과를 JSTL 과 EL을 이용해 출력합니다.
8. 새로운todo등록 버튼을 클릭하면 TodoFormServlet이 실행되고, TodoFormServlet은 todoForm.jsp로 포워딩하여 할 일 등록 화면을 보여줍니다.
9. 할 일 등록폼에서 값을 입력하고 제출 버튼을 누르면 post 방식으로 TodoAddServlet으로 값이 전달되고, TodoAddServlet에서는 TodoDao를 이용해서 테이블에 저장하고 메인화면으로 리다이렉트합니다.
10. 메인화면에서 todo 상태변경버튼(->)을 클릭하면 TodoTypeServlet에게 Todo 의 Id와 상태 값을 전달하여 다음 상태로 (현재 상태가 TODO라면 DOING으로 DOING 이라면 DONE로) TodoDao를 이용해서 변경합니다.

![tododao](image/tododao.png)

## 테이블 생성 SQL
```sql
CREATE TABLE todo ( id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT, title VARCHAR(255) NOT NULL, name VARCHAR(100) NOT NULL, sequence INT(1) NOT NULL, type VARCHAR(20) DEFAULT 'TODO', regdate DATETIME DEFAULT NOW(), PRIMARY KEY (id) );
```

## 프로그램 관련 SQL(참고용)

- 입력
```sql
insert into todo(title, name, sequence) values('자바스크립트공부하기', '홍길동', 1); insert into todo(title, name, sequence) values('리포트 제출하기', '홍길동', 1);
```

- 수정
```sql
update todo set type = 'DOING' where id = 1; update todo set type = 'DONE' where id = 1;
```

- 조회
```sql
select id, title, name, sequence, type, regdate from todo order by regdate desc select id, title, name, sequence, type, regdate from todo where type = 'TODO' order by regdate desc
```
## TodoDao와 TodoDto
주어진 클래스다이어그램과 같이 필드와 메소드를 가지는 TodoDto와 TodoDao클래스를 작성합니다.


# 프로젝트 실습
## 1. 프로젝트 생성
* new project - maven project
* 아키타입 선택
  * Group id - arg.apache.maven.archetypes
  * Artifact id - maven-archetype-webapp
  * version - 1.4
* 아키타입 아이디 설정
  * Group id - kr.or.connect
  * Artifact id - Todo
## 2. 데이터베이스 접속 후 테이블 생성
* connectdb 데이터베이스에 접속 
* todo 테이블을 생성
* todo 테이블이 잘 생성되었는지 확인
### 실습코드
```
C:\Users\Junha>mysql -h127.0.0.1 -uconnectuser -p connectdb
Enter password: *************
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 13
Server version: 8.0.25 MySQL Community Server - GPL

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> CREATE TABLE todo ( id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT, title VARCHAR(255) NOT NULL, name VARCHAR(100) NOT NULL, sequence INT(1) NOT NULL, type VARCHAR(20) DEFAULT 'TODO', regdate DATETIME DEFAULT NOW(), PRIMARY KEY (id) );
ERROR 1050 (42S01): Table 'todo' already exists
mysql> Query OK, 0 rows affected, 2 warnings (0.11 sec)

mysql> desc todo;
+----------+-----------------+------+-----+-------------------+-------------------+
| Field    | Type            | Null | Key | Default           | Extra             |
+----------+-----------------+------+-----+-------------------+-------------------+
| id       | bigint unsigned | NO   | PRI | NULL              | auto_increment    |
| title    | varchar(255)    | NO   |     | NULL              |                   |
| name     | varchar(100)    | NO   |     | NULL              |                   |
| sequence | int             | NO   |     | NULL              |                   |
| type     | varchar(20)     | YES  |     | TODO              |                   |
| regdate  | datetime        | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+----------+-----------------+------+-----+-------------------+-------------------+
6 rows in set (0.00 sec)
```
## 3. TodoDto 클래스 작성
