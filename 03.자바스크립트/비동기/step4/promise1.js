const p = new Promise((resolve, reject)=>{
  resolve('OK')
  setTimeout(() => {
    reject('실패')
  },2000)
})

p.then(function(OK){
  console.log(OK);
}).catch(function(error){
  console.log(error);
})