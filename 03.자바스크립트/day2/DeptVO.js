export class DeptVO{
  constructor(deptno, dname, loc){
    //괄호안의 변수는 지역변수이고 this가 붙은 변수는 전역변수이다.
    //this는 자기자신을 가리키는 수정자이다.
    this.deptno = deptno
    this.dname = dname
    this.loc = loc
  }
  get getDeptno(){
    return this.deptno
  }
  //전역변수의 값을 setDeptno함수로 재정의 할 수 있다.
  set setDeptno(value){ //저장하기
    this.deptno = value
  }
}

const dvo = new DeptVO(10, '총무부', '서울')
console.log(dvo.deptno);
//지역변수는 인스턴스변수.변수명으로 사용이 불가하다.
console.log(dvo.deptno2);
console.log(dvo.getDeptno);
dvo.setDeptno = 30
console.log(dvo.getDeptno);