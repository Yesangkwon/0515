const data = {
  "kind":123,
  "items":[1,2,3]
}

console.log(typeof {});
console.log(typeof []);
console.log(data);
console.log(data.kind);
console.log(data['kind']);
console.log(data.items);
console.log(data.items[1]);
console.log(data.items[2]);
console.log(data.items[3]);
console.log(typeof data.items);
console.log(typeof data.items[0]);

class Sonata{
  constructor(speed=30){
    this.speed = speed
  }
}

let myCar = new Sonata();
console.log(myCar.speed);
//재정의 했는데 아래는 바뀌지 않았다.
myCar.speed=50
console.log(myCar.speed);
//타입은 같지만 새로운 객체가 생성되었다.
myCar = new Sonata();
console.log(myCar.speed);