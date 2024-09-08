// const form = document.querySelector('form');
// const emailInput = document.getElementById('email');
// const container = document.querySelector('.container');
// const successMessage = document.querySelector('.success');
// const formGroup = document.querySelector('.form_group');

// const toggleVisibility = (elem, show) => elem.style.display = show ? 'grid' : 'none';
// const toggleError = (show) => formGroup.classList.toggle('error', show);

// const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = emailInput.value.trim();

//   if (isValidEmail(email)) {
//     toggleVisibility(container, false);
//     toggleVisibility(successMessage, true);
//     successMessage.querySelector('p').textContent = 
//       successMessage.querySelector('p').textContent.replace('ash@loremcompany.com', email);
//   } else {
//     toggleError(true);
//   }
// });

// emailInput.addEventListener('input', () => toggleError(false));

// successMessage.querySelector('.button').addEventListener('click', () => {
//   toggleVisibility(successMessage, false);
//   toggleVisibility(container, true);
//   emailInput.value = '';
// });

const subscribeButton = document.getElementById("subscribe");
subscribeButton.style.display = "none"
console.log(subscribeButton);