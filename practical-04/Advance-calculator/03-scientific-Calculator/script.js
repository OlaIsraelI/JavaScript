let screen = document.querySelector('#screen');
let btn = document.querySelector('.btn');

for (item of btn){
  item.addEventlistener('click', (e)=>{
    btntext = e.target.innerText;
    screen.value += btntext;
  })
}
