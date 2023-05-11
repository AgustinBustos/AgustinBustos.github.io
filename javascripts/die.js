var count = 0;
var seed = Math.floor(Math.random()*1000000000);
var value=0;
let button = document.querySelector('button');
let die = document.querySelector('#die');

// button.onclick = ()=>{
//     count = count+1
//     die.textContent = count


// }
// async function loadDie() {
//     const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
//     const url = `https://true-d6-999birds.herokuapp.com/resampled/dice/${seed}&${count}`
//     const response = await fetch(url);
//     const dict = await response.json();
//     return dict
    
//   }

async function loadDie() {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = {
        decimal: Math.floor(Math.random()*6+1),
      
      };
      resolve(result);
    }, 3000);
  });
}

button.addEventListener('click',async ()=>{
    var timer=setInterval(()=>{die.textContent=Math.floor(Math.random()*6+1)},1)
    const dict=await loadDie()
    clearInterval(timer)
    for (let i = 0; i < 200; i++) {
        setTimeout(()=>{die.textContent=Math.floor(Math.random()*6+1)},10*i);
    }
    for (let i = 20; i < 30; i++) {
        setTimeout(()=>{die.textContent=Math.floor(Math.random()*6+1)},100*i);
    }
    
    setTimeout(()=>{die.textContent=Math.floor(Math.random()*6+1)},500+3000);
    
    console.log(dict);
    console.log(seed);
    console.log(count);
    count=count+dict.attempts;
    setTimeout(()=>{die.textContent=String(dict.decimal)+'!'},4000);
    })
    
    
    
    
    
    
