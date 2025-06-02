const btns = document.querySelectorAll('ul li')

for(let j=0;j<btns.length;j++)
{
  btns[j].addEventListener('click', ()=> {
    console.log(j);
  })
}

/*
  :블록안에서 선언된 지역변수 코드 블록 밖으로 끌어 올려지면서
  강제로 전역변수화 되는 현상이다.
*/