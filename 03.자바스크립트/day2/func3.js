//주문을 한다. - 등록 - INSERT - POST(REST API)

const 주문 = (f1, f2) => { // 함수 구현
  console.log(f1, f2);
}
//파라미터에 대한 정보는 API 찾아본다
//파라미터의 개수
//파라미터의 타입(문자열, 숫자, 불리언)
주문('딸기', '바나나') //호출 - 파라미터, 매개변수, 인자값값

//70,80,90 평균을 구하시오
//평균을 구하기 위해서는 총점을 먼저 구해야 한다.
const jumsu = [70, 80, 90]

let hap = 0;

for(let i = 0; i < jumsu.length; i++) {
  hap = hap + jumsu[i]
}


function funcHap() {
  return hap
}
function funcHap2() {
  hap = 100;
}

function funcAvg (a) {
  let avg = a/3.0
  console.log(avg);
}

const tot = funcHap()
funcAvg(hap)