let items = [
  {id:1, name:'벤치프레스', count:0},
  {id:2, name:'렛풀다운', count:0},
  {id:3, name:'스쿼트', count:0},
]

//운동 제목 추가하기
const handleAdd = () => {
  const workouts = [...items, {id: items.length+1, name:'론지', count:0}]
  console.log(items);
  console.log(workouts);
  console.log(workouts.length);
}

handleAdd()


//운동 제목 삭제하기 - filter
//filter 함수는 Array 객체의 prototype이다.
//Array 객체가 제공하는 prototype 함수들은 누가 언제 호출하더라도 결과가 같다.
//filter함수의 리턴 타입은 Array이다.
const handleDelete = (id) => {
  //filter함수의 반환 타입은 object인가, array인가 -> api 보는 방법
  //items와 result는 서로 다른 배열이다. 주소번지가 다르다.
  const result = items.filter(item => id != item.id)
  console.log(typeof result)
  console.log(result);
}

handleDelete(2)
console.log(items);