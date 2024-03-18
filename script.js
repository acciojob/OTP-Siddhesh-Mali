//your JS code here. If required.
const codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && input.value === '') {
      if (index > 0) {
        codeInputs[index - 1].focus();
      }
    } else if (event.key !== 'Backspace' && input.value !== '') {
      if (index < codeInputs.length - 1) {
        codeInputs[index + 1].focus();
      }
    }
  });
});