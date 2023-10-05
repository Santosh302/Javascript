let inputBox= document.getElementById('input-box')
let display = document.getElementById('display')

//adding a keypress event listner to the inpubox
inputBox.addEventListener('keypress', function(e){
    display.innerText="you have Pressed "+ e.key
})