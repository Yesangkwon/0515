// 배열
const fruits = ['banana','peach','apple']
console.log(fruits[0]);
console.log(fruits[2]);
// 원소의 개수가 3개 이지만 첫 번째 방에 인덱스 값이 0부터니까
// 마지막 방의 인덱스 값은 n-1이다.
// null과 undefined는 다르다.
console.log(fruits[1]);
console.log(fruits.length);
// for문을 사용하면 데이터셋이 늘었다가 줄었다가 하더라도
// 코드를 수정하지 않아도 된다. = 간단히 수정이 가능하다.
for(let i = 0; i < fruits.length; i++)
{
  console.log(fruits[i]);
}