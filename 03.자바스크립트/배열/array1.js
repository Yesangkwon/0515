//배열에서 제공되는 내장 함수
//객체 = 필드 + 함수
//Array 배열 객체 제공한다. - API 사용한다.
//일급객체, 일급함수, 고차함수(파이썬과 동일함) -> AI와 Spring Boot 융합 프로젝트
//함수 - 사용자 정의함수, 제공되는 함수
//파라미터, 리턴타입
//제공되는 객체가 있다.
//Array객체가 제공하는 프로토타입 함수들...
//JS가 말하는 배열은 객체지향 언어가 말하는 배열과는 차이가 있다.
//또 다른 객체이다.(강조)

const colors = ['red','green','blue']

//toString() : 배열을 문자열로 변환
let result = colors.toString()
//문자열로 변환시 값 사이에 , 가 들어있다. -> 제거하기
//데이터 분석 - 데이터 전처리가 필요하다.
console.log(result);

//해커뉴스
//join() : 파라미터에 구분자를 활용해서 문자열로 이어붙이기
result = colors.join(" ")
console.log(result);

//pop() : 배열의 마지막 요소를 제거(리턴값으로 잘라낸 요소를 반환)
result = colors.pop()
console.log(result);

//push() -> <ul><li> 배열의 끝 부분에 새로운 요소를 추가(리턴값으로 배열 길이 반환함.)
result = colors.push('yellow')
console.log(colors);

colors.push(5)
console.log(colors);