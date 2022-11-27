const linkMain=document.querySelector('a');

linkMain.addEventListener('click',(event)=>{
    let linkNewText=prompt('Pls input link text:', 'New link text');
    //console.log(linkNewText);
    if (linkNewText===null){   
        alert('Link cannot be "Null"');               
    }
    else if(linkNewText.trim()===''){
        alert('Link cannot be "Space" or none characters');
    }        
    else {       
        linkMain.textContent=linkNewText;
    }    
    event.preventDefault();
});
