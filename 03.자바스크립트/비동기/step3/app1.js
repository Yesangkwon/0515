// 다음 코드는 동기 코드인가요? 아니면 비동기 코드인가요?

// 동기 코드라는게 과연 뭐지?

function double(x){
  return x*2;
}

const x = double(100)
const y = x

/*
8번 라인이 실행이 끝나야 즉 double 함수가 반환해서 x값이 확정이 되는 것
확정이 되어야 그 x값을 y에 넣음.
*/