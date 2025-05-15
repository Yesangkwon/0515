const getNewsList = () =>
  { 
    const requestOptions = 
    {
    method: "GET", // HTTP 메소드 GET으로 설정함
    redirect: "follow" // 서버가 리다이렉트(응답URL)를 반환할 때 자동으로 따라가기
    };
    //fetch API 호출
    //브라우저가 제공하는 내장 API(axios-npm-비동기 통신 지원하는 lib)
    //프레임워크와 라이브러리의 차이점은 제어권을 가지고 있다 | 없다.
    //네트워크 요청을 보내고 (watting - 비동기로 처리해야함.)
    //응답이 언제 올지 알 수가 없다. 그러니까 비동기로 해야한다.
    //기다리는 동안 다른 일을 할 수 있다. - 합리적인 판단
    //단 기억(약속)해야한다. -> new Promise<Response>반환
    //응답으로 받아오는 객체는 JSON 포맷으로 돌려준다.
    //그래서 나는 XMLHttpRequest 대신에 Fetch를 사용하기로 결정하였다.
    //JSON.parse나 JSON.stringify를 쓰지 않고도 직접 json으로 받아낸다.
    //리액트 프로젝트에서는 axios를 사용할 것이다.
    fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
    .then((response) => response.json())
    .then((result) => { // 실행문을 작성할 수 있음.
      const newsFeed = result;
      const ul = document.createElement('ul')
      for(let i=0;i<10;i++)
      {
        const li = document.createElement('li')
        li.innerHTML = newsFeed[i].title
        ul.appendChild(li)
      } // end of for
      document.querySelector(".home").appendChild(ul)
    }) // end of fetch
    .catch((error) => console.error(error));
  } // end of getNewsList
  
  /*
  전체 흐름 요약
  Fetch요청 : fetch(,)
  -> 응답(JSON)파싱 -> response.json()지원함
  -> DOM 요소 생성 및 데이터 바인딩 -> createElement, appendChild -> 직관없음
  -> 페이지 삽입 : innerHTML, innerText -> 보안 취약
  -> 에러처리 : console.error
  */