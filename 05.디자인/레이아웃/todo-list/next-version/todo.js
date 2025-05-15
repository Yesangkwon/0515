const Items = document.querySelector(".items") //ul태그

const input = document.querySelector(".footer_input") //input 태그

const addBtn = document.querySelector(".footer_button") // 홈버튼 플러스

//input 태그에서 엔터를 쳤을 때 또는 plus 버튼을 클릭했을 때
//재사용을 위해서 함수로 설계 하였다.
function onAdd() {
  //사용자가 입력한 친구 만나기를 읽어와서 createItem함수를 호출할 때
  //파라미터로 넘긴다.
  const itemName = input.value
  console.log("사용자가 입력한 오늘의 할 일" + itemName);
  if(itemName ===''){
    input.focus()
    return
  }
  const item = createItem(itemName)
  Items.appendChild(item)
  item.scrollIntoView({block: 'center'})
  input.value = ''
  input.focus()
} // end of add
//onAdd 즉 이벤트가 발동되었을 때 인터셉트하여 사용자가 입력한 itemName을
//ul(.Items)태그 아래 li태그에 삽입한다.
const createItem=(itemName) => {
  console.log(itemName);//사용자가 엔터치거나 plus버튼을 눌렀을 때 결정된다.
  const itemRow = document.createElement("li")
  itemRow.classList.add("item_row");


  itemRow.innerHTML =`
  <div class="item">
      <span class="item_name">${itemName}</span>
      <button class="item-delete">
      <i class="fas fa-trash"></i>
      </button>
    </div>
    <div class="item_divider"></div>
  `

  const deleteBtn = itemRow.querySelector(".item-delete")
  deleteBtn.addEventListener('click',()=>{
    Items.removeChild(itemRow)
  })
  //return은 함수의 가장 맨 끝에 작성합니다.
  return itemRow
} //end of createItem

addBtn.addEventListener('click', () => {
    console.log('plus버튼 클릭');
    onAdd()
})
  input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
    console.log('엔터');
    onAdd()
    }
})