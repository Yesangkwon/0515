const items = [
  {id:10, name : '벤치프레스', count: 5},
  {id:10, name : '렛풀다운', count: 3},
  {id:10, name : '스쿼트', count: 7}
]

console.log(items[0].name);
console.log(items[0][`name`]);
console.log(items[0].id);
console.log(items[0][`id`]);

console.log(`${items[1]}`);
console.log(`${items[1]['name']}`);
console.log(`${items[1]['count']}`);

console.log(`운동이름:${items[1][`name`]}, ${items[1][`count`]}세트`);
