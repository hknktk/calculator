{

  let output = document.querySelector('#output');
  

  const plus_minus_button = document.querySelector('#plus_minus_switch');

  plus_minus_button.addEventListener('click' , () =>{
    if(output.textContent === ""){
      output.textContent = "-";
    }else if(output.textContent === "-"){
      output.textContent = "";
    }else{
      return;
    }
  })


  const number_buttons = document.querySelectorAll('.number_button');
  
  [...number_buttons].forEach((number_buttons) => {
    let number_value = number_buttons.innerHTML;
    
    number_buttons.addEventListener('click', () => {
      if(number_value === "0" && output.textContent === ""){
        return;
      }
      else if(output.textContent === ""){
        output.textContent = number_value;
      }
      else{
        output.textContent += number_value;
      }
      
      console.log(output.textContent);
    })
  })


  

  const sign_buttons = document.querySelectorAll('.sign_button');


  [...sign_buttons].forEach((sign_buttons) => {
    let sign_value = sign_buttons.innerHTML;
    
    sign_buttons.addEventListener('click', () => {
     console.log(sign_value);
    })
  })


  
 

  const clear_button = document.querySelector('#clear');
  clear_button.addEventListener('click', () => {
    output.textContent = "";

    console.log(output.textContent);
  })


  

  // const save_button = document.querySelector('#save');
  // save_button.addEventListener('click', () =>{
  //   output.classList.toggle('once_save');
  //   if (output.className !== "output"){
  //     output.textContent = "0";
  //   }
  // })

 
}