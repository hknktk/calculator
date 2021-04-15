{

  let output = document.querySelector('#output');

  const number_buttons = document.querySelectorAll('.number_button');

  

  [...number_buttons].forEach((number_buttons) => {
    let number_value = number_buttons.innerHTML;
    
    number_buttons.addEventListener('click', () => {
      if(output.textContent === ""){
        output.textContent = number_value;
      }else{
        output.textContent += number_value;
      }
      
      console.log(output.textContent);
    })
  })

  const clear_button = document.querySelector('#clear');
  clear_button.addEventListener('click', () => {
    output.textContent = "0";

    console.log(output.textContent);
  })
  

  const save_button = document.querySelector('#save');
  save_button.addEventListener('click', () =>{
    output.classList.toggle('once_save');
    if (output.className !== "output"){
      output.textContent = "0";
    }
  })

 
}