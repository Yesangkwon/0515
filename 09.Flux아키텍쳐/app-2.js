createStore = () => {
  let state = {
    count: 0,
  }
  //createStore는 당연히 외부 시그널을 받을 수 있는 구조를 제공해야 함.
  send = () => {
    //대입 연산자를 통해서 worker의 결과를 받아오니까 항상 새로운 state를
    //받아옴.
    //어떤 상태를 바꿀거냐
    //언제 상태를 바꿀거야 - 타이밍
    //그러면 언제 뭔가를 바꿔라는 시그널은 createStore바깥쪽에서 줘야 한다.
    //이때 파라미터를 사용할 것.
    state = worker(state)
  }
  getState = () =>{
    return state;
  }
  return {
    getState,
    send, //왜냐면 밖에 있는 worker와 소통하려고고
  }
}

worker = (state = { count:0 }) => {
  return {...state, count:state.count + 1}
}

const store = createStore()
//createStore내부에서 선언된 변수는 스코프 밖에서는 사용이 불가하다.
//우리가 만든 createStore는 공통코드로 사용될 부분이고
//그 말은 외부에서 시그널을 받아서 상태값을 변경 처리하는 역할을 함.
//외부에서 지변을 사용할 때는 getter함수를 사용할 것.
// console.log(state);
store.send()
store.send()
store.send()
console.log(store.getState());
const store2 = createStore()
console.log(store2.getState());//상태의 묶음이다.