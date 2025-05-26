// 콜백 패턴
// 쇼핑몰
// 마치 배송시간이 걸리는 것 처럼 처리해 본다. - settimeout
// 파라미터에 함수를 사용하기 - 일급함수
// 변수에 함수를 치환할 수 있다.
// 함수를 리턴 타입으로도 사용할 수 있다. - 고차함수
// 함수는 객체이다.

const goodSearch = (callback) => {
  setTimeout(() =>{
    console.log('상품조회')
    callback() // 파라미터로 들어온 함수 호출하기
  }, 3000)
};
const cart = (callback) => {
  setTimeout(() =>{
    console.log('카트담기');
    callback() // 파라미터로 들어온 함수 호출하기
  }, 2000)
};
const account = (callback) => {
  setTimeout(() =>{
    console.log('결제하기');
    callback() // 파라미터로 들어온 함수 호출하기
  }, 2000)
};
const delivery = (callback) => {
  setTimeout(() =>{
    console.log('배송하기');
    callback() // 파라미터로 들어온 함수 호출하기
  }, 2000)
};
const result = () => {
    console.log('배송환료');
};

goodSearch(() => {
  cart(() =>{
    account(() => {
      delivery(()=> {
      })
    })
  })
})
result()