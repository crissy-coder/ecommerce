
const button = document.getElementById('btn4')
const Submit  = document.getElementById('submit')

button.addEventListener('click',() => {
    button = checker(event);
})

const checker = (event) =>{
    

    event.preventDefault();
    const Name = document.getElementById('names')
    const Mail = document.getElementById('mail')
    const pass = document.getElementById('password')

    if(Name.value.length >= 4 && pass.value.length >= 8){
        alert("thank your  applicatio as been receveid")
        
    }
    else{
        alert("invlaid form fill or unfilled")
        ;
    }
    

   
}