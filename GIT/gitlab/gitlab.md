# gitlab
> [깃허브 vs. 깃랩, 무엇을 써야할까](https://zdnet.co.kr/view/?no=20220804135812)
> 
> [Gitlab 소개](https://opentutorials.org/module/567/4933)

## gitlab 소개
### git
* 분산형 버전관리 시스템
* 가장 많이 사용하는 버전관리시스템
### gitlab
* 깃랩사가 개발
* 깃 저장소 및 CI/CD, 이슈 추적, 보안성 테스트 등의 기능
  * 지속적 통합/지속적 전달(CI/CD)
* 웹 기반의 데브옵스 플랫폼
* 오픈 소스 라이선스 및 사유 소프트웨어 라이선스를 사용(무료, 유료 버전.)
  * 클로즈드 소스 소프트웨어(영어: closed source software)는 저작권 소유자의 예외적 법적 권한 하에 허가된 컴퓨터 소프트웨어. 독점 소프트웨어.
* UI - 자체 디자인 시스템 '파자마스' (vue.js로 작성됨)
### 깃헙과 깃랩의 차이
1. 데브옵스 요소
   * 깃랩은 CI/CD와 데브옵스 워크플로우를 내장
   * 깃헙은 사용자가 원하는 CI/CD 도구를 직접 통합해야 한다. 보통 젠킨스, CircleCI, TravisCI 같은 써드파티 프로그램 사용
2. 속도/안정성
   * 깃랩은 안정성
   * 깃헙은 속도에 초점
3. 브랜치의 병합/분리
   * 깃헙은 새로운 브랜치를 master와 병합하는 것을 지지 > 신속한 배포, 문제 발생시 이전 버전으로 신속 복원
   * 깃랩은 각 세트를 master와 별도의 안정적인 브랜치로 생성, 프로덕션과 스테이징의 분기가 최소한. (다중 분기 접근방식 - 여러 단계의 테스트 프로세스를 필요로 한다.) > 코드 검도 까다로움
4. 소프트웨어 서비스의 구성
   * 깃랩은 완전한 소프트웨어 개발 솔류션을ㅈ ㅔ공 올인원의 데브옵스 플랫폼, 지라, 팀즈, 슬랙, G메일과 같은 APP, 플랫폼과 통합을 제공
   * 깃헙은 적은 수의 소프트웨어 서비스를 제공하지만 외부 프로그램 및 서비스와 통합하는 쉬운 방법을 제공 ( 깃헙 마켓 플레이스 )
* 유사점
  * 리눅스 서버에서 실행됨
  * 이슈 트래커를 제공 
    * 프로젝트를 진행하는 과정에서 발생하는 업무들을 관리해주는 업무 관리 시스템
  * 광범위한 타사 통합과 가져오기 도구
  * 인터페이스 (고급 개발자를 위한 CLI, 초급 개발자를 위한 웹 인터페이스)
### 요약
* gitlab은 깃허브와 비슷하지만 깃에 대한 비용이 부담되거나 보안이 중요한 프로젝트에 사용된다.

## gitlab 실행해보기
1. New project
   1. Visibility Level 설정
      1. (private or public)
   2. Project Configuration
      * README 설정
      * SAST(Static Application Security Testing) 설정
        * 알려진 보안 취약점에 대한 소스 코드 분석
2. git bash 활용
   * Git global setup 가능
   ```bash
   git config --global user.name "김준하"
   git config --global user.email "qufstar7@gmail.com"
   ```
   * gitlab repo에 사용할 폴더로 이동 후 git init, remote
      ```bash
      cd existing_folder
      git init
      git remote add origin https://~/qufstar7/test.git
      ```
      * (git 시동, gitlab repo와 연결)
   * 파일(코드) 작성 후 add, commit, push
      ```bash
      touch README.md
      dir
      git add .
      git commit -m "first commit test"
      git push -u origin master
      ```
   * 기타 사용법
      ```bash
      git clone https://~~.git
      cd test
      touch README.md
      git add README.md
      git commit -m "add README"
      git push -u origin master

      cd exsting_repo
      git remote rename origin old-origin
      git remote add origin https://~/qfustar7/test.git
      git push -u origin --all
      git push -u origin --tags
      ```
         * git clone으로 repo 복제
         * 기존의 repo를 새로운 이름의 repo로 연결