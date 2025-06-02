var x = 'global' //ESS -> ES6기반 -> let, const -> 트랜스파일러(Babel)
//Babel -> ES6 -> ES5
//함수를 선언 햇다고 해서 호출 되는것은 아니다.
//불러 줘야 실행이 된다.
function foo() {
  console.log(x);
  var x = 'local'
  console.log(x);
}
//함수호출
foo()
//insert here
console.log(x);

//문제제기 - local 값을 굳이 함수 밖에서 사용하고 싶다.
//어떡하지? - 힌트 : return

const hap = (x,y) => {
  var tot = x + y
  return tot
}
const hap1 = (x,y) => {
  var tot = x + y
  return tot
}

console.log(hap1(1,2));

console.log(hap(1,2));

var tot = hap(1,2)
console.log(tot);