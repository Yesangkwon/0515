const xhr = new XMLHttpRequest()
const container = document.querySelector("#root")
const content = document.createElement("div")
const NEWS_URL ="https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"

//Handlebars 템플릿 정의
//html태그가 js 안에 있는 것은 여전히 불편함이 있다.
//이 부분이 html 코드 안에 있는 것이 더 나은 방법이지 않을까? - 직관
//innerHTML을 사용하지 않고(왜냐면 보안 취약) 할 수 있다.
const newsListTemplate =`
  <ul>
    {{#each this}}
    <li>
      <a href="{{id}}">
        {{title}}({{comments_count}})
      </a>
    </li>
    {{/each}}
  </ul>
`
const newsContentTemplate = `
  <h1>{{title}}</h1>
  <div>
    <a href="#">목록으로</a>
  </div>
`

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
  const template = Handlebars.compile(newsContentTemplate)
})

// 뉴스 목록 랜더링
const template = Handlebars.compile(newsListTemplate)
container.innerHTML = template(newsSource.slice(0,10))