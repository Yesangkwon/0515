//증감 연산자 - for 문 if문 흐름을 바꾼다.
let a = 0
console.log(a);

a = a + 1
console.log(a);

a++
console.log(a);
//대입을 먼저 하고 1을 증가시킨다.
//1을 증가시킨 다음에 대입한다.
//++가 뒤에 있으면 후위 연산자 앞에 있으면 전위 연산자
//연산자가 여러개 있을 때 우선순위가 있다.
let b = a++
console.log(`a : ${a}, b : ${b}`);

b = ++a
console.log(`a : ${a}, b : ${b}`);

//비교 연산자, 산술 연산자, 대입연산자
//==값만 비교, ===값과 타입까지도 비교함.

const myCar = {
  name : "소나타",
  color : "red",
  speed : 50
}
const hisCar = {
  name : "소나타",
  color : "red",
  speed : 50
}

console.log(myCar==hisCar);
console.log(myCar===hisCar);
