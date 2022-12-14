const consoleLog=document.querySelector('#consoleLog');
const alertP=document.querySelector('#alert');
const promptP=document.querySelector('#prompt');

addEventListener('click',(event)=>{
    if (event.target.nodeName==='P'){
        if(event.target.textContent===consoleLog.textContent){
            alert('Method writes (logs) a message to the console.');                
        }
        if(event.target.textContent===alertP.textContent){
            alert('Method displays an alert box with a message and an OK button.');                
        }
        if(event.target.textContent===promptP.textContent){
            alert('Method displays a dialog box that prompts the user for input. Returns the input value if the user clicks "OK", otherwise it returns null.');                
        }
    }
    //else console.log(event.target.textContent,event);
});


consoleLog.addEventListener('mouseover',()=>{
    consoleLog.style.color = ('#0085a1');  
    //consoleLog.style.textDecoration='underline';
});
consoleLog.addEventListener('mouseout',()=>{
    consoleLog.style.color = ('black');
   // consoleLog.style.textDecoration='none';
});
alertP.addEventListener('mouseover',()=>{
    alertP.style.color = ('#0085a1');  
});
alertP.addEventListener('mouseout',()=>{
    alertP.style.color = ('black');
});
promptP.addEventListener('mouseover',()=>{
    promptP.style.color = ('#0085a1');  
});
promptP.addEventListener('mouseout',()=>{
    promptP.style.color = ('black');
});