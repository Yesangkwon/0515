//비동기 통신 객체 생성하기
const xhr = new XMLHttpRequest()
//미리 생성을 해 둘까?
//아니면 search함수가 호출될 때 마다 객체 생성을 할까?
const container = document.querySelector('#root')
//조건 검색 결과를 화면에 출력하기

//input type text에서 입력 후 엔터를 쳤을 때
const handleSearch = (event) => {
  if(13 == event.keyCode){
    const keyword = document.querySelector(".input")
    let word = keyword.value
    search(word)
  }
}

const search = (query) => {
  console.log("사용자가 입력한 키워드는 " + query);
  const SEARCH_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC8gn32XwBh1rm6q7zdkilNCQAj-1n9LaY&q=AI`

  xhr.open('GET',SEARCH_URL, false)
  xhr.send()

  const videoList = []
  const result = JSON.parse(xhr.responseText)
  //console.log(result.items);
  //썸네일과 채널이름 영상제목은 snippet안에 있지만 썸네일 클릭시 영상재생에
  //필요한 videoId는 snippet밖에 있다.
  const vitems = result.items.map(item => ({...item, id: item.id.videoId }));
  //console.log(vitems);
  videoList.push('<ul class="videos">')
  for(let i=0;i<vitems.length;i++){
    videoList.push(`<li class="container">`)
    videoList.push(`<div class="video">`)
    videoList.push(`<img src="${vitems[i].snippet.thumbnails.medium.url}"></img>`)
    videoList.push(`<div>`)
    videoList.push(`<p class="title">${vitems[i].snippet.title}</p>`)
    videoList.push(`<p class="channel">${vitems[i].snippet.channelTitle}</p>`)
    videoList.push(`</div>`)
    videoList.push(`</div>`)
    videoList.push(`</li>`)
  }//end of for
  videoList.push('</ul>')
  container.innerHTML = videoList.join("")
}//end of search




/*
1. 키워드를 입력한 뒤 엔터를 치거나 검색이미지 버튼을 클릭했을 때 유튜브 서버에 요청을 한다.
const xhr = new XMLHttpRequest()
xhr.open
xhr.send

function onKeyPress(event){
  if(event.keyCode === 13){
    search(사용자가 입력한 키워드)
  }
}

2. 이벤트 소스가 두 가지 경우 이므로 함수를 설계한다.
- search(키워드), 조회결과 처리, 결과를가지고 화면 처리한다.
- 조회하는 함수와 화면을 처리하는 함수 두 개를 가져야 하나???
  - 리턴타입은 꼭 필요한가? 아니면 전변으로 하면 괜찮은 건가
- 그냥 하나로 하면 안되나?
- 두 개로 하는 것과 하나로 하는것 중 어떤 쪽이 더 나은선택인가?

3. 조건검색을 해야 하므로 사용자로 부터 키워드를 입력받는다.
*/