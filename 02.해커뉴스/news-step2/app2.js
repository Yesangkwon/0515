const xhr = new XMLHttpRequest()
const NEWS_URL ="https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"
xhr.open("GET", NEWS_URL, false)
xhr.send()

const newsList = JSON.parse(xhr.responseText) //NodeList
const ul = document.createElement("ul")

window.addEventListener("hashchange",() => 
  {
  // console.log("The hash has changed!");
  //console.log(location.hash); //#4878909
  // #을 떼어내고 뒤에 id값만 꺼내서 @id치환한다.
  // 0번 째 자리에는 #이 들어있으니 1을 쓴다.
  const id = location.hash.substring(1)
  xhr.open("GET", CONTENT_URL.replace("@id",id), false)
  xhr.send()

  const newsContent = JSON.parse(xhr.responseText)
  console.log(newsContent);
  });

for(let i=0;i<10;i=i+1)
{ 
  const li = document.createElement("li")
  //insert here
  const a = document.createElement("a")
  //어떤 제목을 클릭할 것인가는 사용자 마음이므로 정할 수 없다.
  a.href = `#${newsList[i].id}`
  a.innerText = `${newsList[i].title}('★'${newsList[i].comments_count})`

  li.appendChild(a)
  ul.appendChild(li)
}

const v_root = document.querySelector("#root").append(ul)
/*

*/