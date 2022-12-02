const form=document.querySelector('form');
const factDiv=document.querySelector('.numfact');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const number = e.target.querySelector('input[type="number"]').value;
    const type=e.target.querySelector('input[type="text"]').value
 console.log(number,type);
const loadText='Wait a little bit';
//const baseurl='http://numbersapi.com/';
    
     //fetch(baseurl+number+"/"+type)
factDiv.innerHTML=loadText;
 const baseurl='https://github.com/Rob--W/cors-anywhere/issues/301/http://numbersapi.com/';
 fetch(baseurl+number+"/"+type,{
     method:"GET",
    headers:{
       'x-requested-with':'text/plain'
   }}).then(response =>response.text())
     .then(text =>factDiv.innerHTML=text);
}).catch((err)=>console.log(error));
 
