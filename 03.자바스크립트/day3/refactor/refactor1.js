const 인사 = () =>
  { // 결합도를 낮추는 코드를 작성
    console.log("인사 함수 호출 성공"); // 로그(공통된 관심사 : AOP)
    const d_root = document.querySelector("#root")
    d_root.innerHTML = "안녕하세요 호출"
  }