let show = document.getElementById('show');
buttons = document.querySelectorAll('button');
let showValue = '';
for(item of buttons){
    item.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText;
    
        if(buttonText =='*'){
            showValue += buttonText;
            show.value = showValue;
        }
        
        else if (buttonText == 'CL'){
            showValue = "";
            show.value = showValue;
        }

        else if(buttonText == '='){
            show.value = eval(showValue);

        }
         else if(buttonText == 'del'){
            showValue = showValue.slice(0,-1);
            show.value= showValue; 

         }

        else{
            showValue += buttonText;
            show.value = showValue;
        }
    
    
    })   


}