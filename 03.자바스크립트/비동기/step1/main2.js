//동기와 비동기
//동기 : 순차적으로 코드를 실행함.
//비동기 : 순차적으로 코드를 실행 안함
console.log(1);
setTimeout(() =>{
  console.log(2);
},2000)

console.log(3);