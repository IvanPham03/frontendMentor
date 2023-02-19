const idAdvice =  document.getElementById('idAdvice');
const advice = document.getElementById('advice');
const random = document.getElementById('random');
let mess;


async function getAdvice(){
    const rand = Math.floor(Math.random()*200);
    console.log(rand);
    const API_URL = `https://api.adviceslip.com/advice/${rand}`;

    try{
        mess = await fetch(API_URL).then(Response => {
            return Response.json();
        })
        idAdvice.textContent = mess.slip.id;
        advice.textContent = `"${mess.slip.advice}"`;
    } 
    catch(err){

    }
}
random.addEventListener('click', ()=> {
    getAdvice();
});


// onload
getAdvice();
