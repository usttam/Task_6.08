const inputText=document.querySelector('input');
const submitButton=document.querySelector('button');
const duplicateText=document.querySelector('#duplicateField');

inputText.addEventListener('keyup',()=>{    
    duplicateText.textContent=inputText.value;
});

submitButton.addEventListener('click',(e)=>{
    if (inputText.value!==''){
        console.log('Entered text:',inputText.value);
        duplicateText.textContent='';
        inputText.value='';
    }
    else {
        alert('Please fill the input field');
        inputText.focus();
    }
    e.preventDefault();
});