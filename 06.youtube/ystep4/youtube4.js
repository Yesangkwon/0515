const container = document.querySelector("#root")
//조건 검색 결과를 화면에 출력하기

//input type text에서 입력 후 엔터를 쳤을 때
const handleSearch = (event) => {
  const keyword = document.querySelector('.input')
  let word = keyword.value
  if(13 == event.keyCode){
    search(word)
  }
}

const search = (query) =>{
  console.log("사용자가 입력한 키워드는" + query);
} //end of search

container.innerHTML = '조회결과'