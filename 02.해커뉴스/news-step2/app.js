const xhr = new XMLHttpRequest()
//제목을 클릭 했을 때 제목을 읽어 와서 다른 화면에 출력하기
const content = document.createElement("div")
const NEWS_URL ="https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"
xhr.open("GET", NEWS_URL, false)
xhr.send()
// 개발자가 호출하는 함수가 아니라 시스템에서 이벤트가 감지되었을 때
// 자동으로 호출된다. - callback함수
// 뉴스 제목을 클릭하면 URL 바뀐다 -> 감지한다
const newsList = JSON.parse(xhr.responseText) //NodeList
const ul = document.createElement("ul")

window.addEventListener("hashchange",() => 
  {
  // console.log("The hash has changed!");
  //console.log(location.hash); //#4878909
  // #을 떼어내고 뒤에 id값만 꺼내서 @id치환한다.
  // 0번 째 자리에는 #이 들어있으니 1을 쓴다.
  const id = location.hash.substring(1)
  //console.log(id);
  //반복되는 코드가 있다.
  xhr.open("GET", CONTENT_URL.replace("@id",id), false)
  xhr.send()
  const newsContent = JSON.parse(xhr.responseText)
  console.log(newsContent);
  //뉴스 제목을 h1태그 안에 작성하시오.
  const title = document.createElement("h1") //<h1>
  title.innerText = newsContent.title // <h1>뉴스제목</h1>
  console.log(title);
  //<div id='root'></div>
  content.appendChild(title)

  }); // end of hashchange

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