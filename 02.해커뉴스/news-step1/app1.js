//브라우저에 내장된 표준 비동기통신객체 생성하기
//const - 상수 선언 할 때 - ECMAScript6(2015)
//let - 변수 선언 할 때
//XMLHttpRequest는 객체 이름으로 new 다음에 작성하면 객체생성됨.
const xhr = new XMLHttpRequest()
//상수라서 대문자로 표시함. - 눈에 잘 띄게 했다.
const NEWS_URL ="https://api.hnpwa.com/v0/news/1.json"
//xhr은 XMLHttpRequest객체를 참조하는 변수입니다.
//open 함수는 XMLHttpRequest객체를 참조하는 변수입니다.
//재사용성을 높이는 코드를 작성하는 첫 단추는 함수 중심의 코딩을 전개하기
//open함수는 XMLHttpRequest가 정의하고 있는 함수 입니다.
//파라미터의 개수는 3개 입니다.
//@param - GET 전송방식(Rest API)
//@param - 해커뉴스의 최신목록을 가져오는 URL
//@param - true(:동기) or false(:비동기-default)
xhr.open("GET", NEWS_URL, false)
//send도 XMLHttpRequest제공하는 함수 입니다.
xhr.send()//send가 호출되었을 때 서버에 요청이 간다.
//Object ->
//JSON.stringify
//JSON.parse
console.log(xhr.response);
console.log(xhr.responseText);
const newsList = JSON.parse(xhr.response)
console.log(newsList[0].title); // 첫 번째 배열의 뉴스 제목
console.log(newsList[1].title); // 두 번째 배열의 뉴스 제목
console.log(newsList[2].title); // 세 번째 배열의 뉴스 제목
//console.log(xhr.responseXML);//xml - null 출력되었다.
//왜냐하면 응답 결과가 json이었다.