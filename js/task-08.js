const form = document.querySelector(`.login-form > button`);
const newForm = document.querySelector(`.login-form`);
const email = document.querySelector('input[name=email]')
const password = document.querySelector('input[name=password]');

console.log(email);
console.log(password);
form.addEventListener(`click`, onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const userDetails = { email: email.value, password: password.value };
  console.log(userDetails);
  event.currentTarget.reset();
   console.log(email);

}


