{
  const number_buttons = document.querySelectorAll('.number_button');

  [...number_buttons].forEach((number_buttons) => {
    number_buttons.addEventListener('click', () => {
      console.log(number_buttons.innerHTML);
    })
  })

  let output = document.querySelector('#output');
  console.log(output.innerHTML.trim());
}