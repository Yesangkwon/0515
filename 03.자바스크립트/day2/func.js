// 0부터 9시이의 숫자 중 두 수를 입력 받아서 합을 구하는
// 함수를 구현 하시오.
// 두 수를 입력 받아서 -> 파라미터 자리의 역할 입니다.
// 사용자 정의 함수 선언하기
// 함수 이름은 무엇입니까 - add
// add 함수의 파라미터는 몇개 인가요 - 2개
// 아래 함수에는 변수의 개수가 몇개 인가요 - 3개
// hap의 초기화는 얼마로 해야 할까요 - 
function add(a, b)
{
  // 처리를 한다.
  let hap = 0
  hap = a + b
  return hap
}// end of add
function add2(a, b)
{
  // 처리를 한다.
  let hap = 0
  hap = a + b
}// end of add

console.log(add("1",2))
console.log(add(2,3))
console.log(add(3,4))
//변수 결과값에는 add 함수를 호출한 결과를 리턴 받아서 대입연산자로 치환함.
const result = add(3,4)
// insert here 5를 출력하는 코드를 작성하시오.
console.log(result);
// add2에는 맨 마지막에 return이라는 예약어가 없다.
// 그 말은 add2를 호출했을 때 아무것도 돌려받을 수가 없다는 것이다.
// 그래서 add와는 다르게 대입연산자를 써서 변수에 두 수의 합을 담을수가 없다.
// null-모른다.
// 자바스크립트는(바닐라스크립트) 런타임시에 타입이 결정됩니다.
// 만일 사용자 정의 함수에서 return을 쓰지 않으면
// 그런데 대입연산자로 함수 호출의 결과를 받고자 한다면 null이 아니고
// undefined를 만나게 된다.
// 결론 : 함수의 처리 결과를 돌려받고자 한다면 반드시 함수를 끝내기 전에
// return 예약어를 반드시 작성할것.
const return2 = add2(3,4)
console.log(return2);