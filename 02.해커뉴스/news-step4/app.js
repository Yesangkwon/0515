const xhr = new XMLHttpRequest()
const container = document.querySelector("#root")
const content = document.createElement("div")
const NEWS_URL ="https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"

function GetData(url)
{
  xhr.open("GET", url, false)
  xhr.send()
  return JSON.parse(xhr.responseText)
}

const newsSource = GetData(NEWS_URL) //NodeList
const ul = document.createElement("ul")

window.addEventListener("hashchange",() => {

  const id = location.hash.substring(1)
  const newsContent = GetData(CONTENT_URL.replace("@id", id))
  const title = document.createElement("h1") //<h1>
  container.innerHTML = `
    <h1>${newsContent.title}</h1>
      <a href="#">목록으로</a>
    </div>
  `
})

const newsList = []

newsList.push('<ul>')
for(let i =0;i<10;i++)
{
  newsList.push(`
    <li>
      <a href="#${newsSource[i].id}">
      ${newsSource[i].title}(${newsSource[i].comments_count})
      </a>
    </li>
  `)    
}
newsList.push('</ul>')
console.log(newsList);
// 빈 문자열을 넣어서 배열을 구분자 없는 문자열로 바꾸어 주는 함수이다.
container.innerHTML = newsList.join('')