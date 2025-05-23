//Object(객체)
const userA = {
  name: '이순신',
  age: 55
}

const userB = {
  name: '강감찬',
  age: 56,
  parent: userA
}

console.log(userA);
userA.age = 80 // 재정의 -> let
console.log(userA);
console.log(userB.parent);