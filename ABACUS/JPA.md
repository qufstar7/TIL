## JPA
Java Persistence :  API 자바 지속 api, 자바 지속성 API
* 자바 플랫폼 SE와 자바 플랫폼 EE를 사용하는 응용프로그램에서 관계형 데이터베이스의 관리를 표현하는 자바 Application Programming Interface (API는 고유한 기능을 가진 소프트웨어)
* ORM 기술 표준 인터페이스
* 실제적 구현체가 아니라 구현된 클래스와 매핑해주기 위한 프레임워크
* Hibernate : 자바 언어를 위한 ORM 프레임워크, 객체지향도메인 모델을 관계형 DB로 매핑하기 위한 프레임워크 제공. java OOP Mapping framework
* OpenJPA : 아파치에서 만든 오픈소스 ORM

### ORM : Object Relational Mapping
* 객체와 DB의 관계를 매핑 
* DB와 자바 클래스(객체)를 연결해주는 도구
* Spring JPA, Hibernate가 ORM을 수행
#### 장점
* SQL문이 아닌 Method를 통해 DB 조작 > 객체 모델을 이용한 로직 구성에 집중
* Query 미사용 으로 부수적 코드 감소 > 객체에 대한 코드 별도 작성으로 가독성 증가
* 객체 지향적 코드 작성 가능 > 생산성 증가
* Class로 매핑 정보를 확인 > ERD 의존도 감소로 유지보수 및 리팩토링에 유리
* ORM을 사용하면 DBMS를 중간에 바꿔도 쿼리 수정 필요 x
#### 단점
* 프로젝트 규모가 크고 복잡한데 설계가 잘못되면 속도 저하 및 일관성 부족
* 복잡하고 무거운 Query > 별도의 튜닝 필요 > 결국 SQL문 (Query) 사용
* 학습비용

>[[Spring JPA] JPA 란?](https://dbjh.tistory.com/77)  
>[ORM(Object Relational Mapping)이 뭘까? ](https://geonlee.tistory.com/207)  
>자바 ORM 표준 JPA 프로그래밍 / 저자 김영한