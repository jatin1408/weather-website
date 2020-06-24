

const temp=document.querySelector('form')
const data=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')
temp.addEventListener('submit',e=>{
    e.preventDefault();
    const location=data.value;
    fetch(`http://localhost:3000/weather?address=${location}`).then(response=>{
        response.json().then(data=>{
            if(data.error){
                messageOne.textContent=data.error
                messageTwo.textContent="";
            }
            else{
                messageOne.textContent=data.location;
                messageTwo.textContent=data.forecast;

    
            }
        })
    })
    
    
})   

 