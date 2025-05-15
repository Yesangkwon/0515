const xhr = new XMLHttpRequest()
//제목을 클릭 했을 때 제목을 읽어 와서 다른 화면에 출력하기
const content = document.createElement("div")
const NEWS_URL ="https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"

// GetData 함수의 피라미터 자리에 url에 대입되는 값은 언제 결정 되나요?
// 호출할 때 결정됩니다.
// 파라미터 자리에 선언된 변수는 지역변수이다. - 기초
function GetData(url)
{
  xhr.open("GET", url, false)
  xhr.send()
  return JSON.parse(xhr.responseText)
}

const newsList = GetData(NEWS_URL) //NodeList
const ul = document.createElement("ul")

window.addEventListener("hashchange",() => 
  {
  const id = location.hash.substring(1)
  const newsContent = GetData(CONTENT_URL.replace("@id", id))
  console.log(newsContent);

  const title = document.createElement("h1") //<h1>
  title.innerText = newsContent.title // <h1>뉴스제목</h1>
  console.log(title);

  // content.appendChild(title)
  content.replaceChildren(title)
  }); // end of hashchange

/*
replaceChildren()함수는 한번의 호출로 기존의 모든 자식 요소를 제거하고
새로운 요소를 추가하는 작업을 동시에 수행합니다.
이전 방법과 비교했을 때 코드가 간결합니다.
성능이 좋다.(DOM조작이 한 번만 발생하니까)
가독성도 좋다.
innerHTML이나 while루프를 사용하는 것보다 더 효율적인 방법입니다.
*/

for(let i=0;i<10;i=i+1)
{ 
  const li = document.createElement("li")
  //insert here
  const a = document.createElement("a")
  //어떤 제목을 클릭할 것인가는 사용자 마음이므로 정할 수 없다.
  a.href = `#${newsList[i].id}`
  a.innerText = `${newsList[i].title}(★${newsList[i].comments_count})`

  li.appendChild(a)
  ul.appendChild(li)
}

const v_root = document.querySelector("#root").append(ul)
document.querySelector("#root").appendChild(content)
/*

*/