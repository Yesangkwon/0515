// 파라미터의 기본값은 undefined임.
// 파라미터 변수들은 언제 값이 결정되나요?
// JS에서는 같은 이름의 함수를 여러개 가질 수 없다.

const hap=(a,b) => {
  //insert here
  console.log(a+', '+b);
  return a+b
}

hap(1, 2)

const hap2=(a=2, b=2) =>{
  console.log(a+', '+b);
  return a+b
}

hap2()

const hap3=(...numbers) =>{
  console.log(numbers);
}

hap3(1,2,3,4,5)

