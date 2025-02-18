const input=document.querySelector('.input')
const submit=document.querySelector('.submit')
const start=document.querySelector('.start')
const result=document.querySelector('.result')
const chance=document.querySelector('.chance')
let value=[]
let guess=Math.round(Math.random()*100)
submit.addEventListener('click',()=>{
    start.disabled=true
    const inputVal=input.value
    if(inputVal>guess)
    {
        result.innerText='too high'
    }
    else if(inputVal<guess)
    {
        result.innerText='too low'
    }
    else{
        result.innerText='you win'
        start.disabled=false
        chance.innerText=''
        submit.disabled=true
        submit.style.backgroundColor="red"
    }
    value.push(inputVal)
    
    chance.innerText=`your guess is ${value.join(',')}`
    
    
})
start.addEventListener('click',()=>{
    guess = Math.round(Math.random() * 100); // Reset the guess
    value = []; // Clear previous guesses
    start.disabled = true;
    submit.disabled = false;
    result.innerText = ''; // Clear result
    chance.innerText = ''; // Clear previous guesses display
    submit.style.backgroundColor = "";

})