// 여러 개의 비동기 상황을 순차적으로 엮을 때

const p = new Promise((resolve, reject)=>{
  // resolve('OK')
  setTimeout(() => {
    resolve('성공')
  },2000)
})

p.then((OK) => {
  console.log('첫번째 성공');
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('두번째 성공')
    }, 5000)
  })
})
.then(()=>{
  console.log(OK);
})