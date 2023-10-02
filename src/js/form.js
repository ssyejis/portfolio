let nameVali = false;
let emailVali = false;
let messageVali = false;

let form;
let name;
let email;
let message;

document.addEventListener('DOMContentLoaded', () => {
  form = document.querySelector('.gform');
  name = document.getElementById('name');
  email = document.getElementById('email');
  message = document.getElementById('message');
})
const exptxt = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

function checkForm(target) {
  switch (target) {
    case 'name' :
      if (name.value === '') {
        name.nextElementSibling.classList.remove('display--none');
        nameVali = false; 
      }
      else {
        name.nextElementSibling.classList.add('display--none');
        nameVali = true; 
      }
      break;
    case 'email' :
      if (email.value === '') {
        email.nextElementSibling.classList.remove('display--none');
        email.nextElementSibling.nextElementSibling.classList.add('display--none');
        emailVali = false;
      } else if (email.value !== '') {
        email.nextElementSibling.classList.add('display--none');
        if (!exptxt.test(email.value)) {
          email.nextElementSibling.nextElementSibling.classList.remove('display--none');
          emailVali = false;
        } else {
          email.nextElementSibling.nextElementSibling.classList.add('display--none');
          emailVali = true;
        }
      }
      break;
    case 'message' :
      if (message.value === '') {
        message.nextElementSibling.classList.remove('display--none');
        messageVali = false; 
      }
      else {
       message.nextElementSibling.classList.add('display--none');
        messageVali = true; 
      }
      break;
  }
}


function sendForm() {
  if (nameVali && emailVali && messageVali) {
    const postForm = new Promise((resolve, reject) => {
      form.action = 'https://script.google.com/macros/s/AKfycbx8hy8W5Bzh5uareHiGsyLToaHhB58lP90EIVkwn43bibfnC4NTTD1PHkX8cVBF0yLt/exec';
      form.method = 'POST';
      setTimeout(()=> { resolve(form.action, form.method)},500 ); 
    })
    postForm.then(() => {
      name.value = '';
      email.value = '';
      message.value = '';
    })
    const alter = document.querySelector('.alter-box');
    alter.classList.remove('display--none');
    setTimeout(()=> {
      alter.classList.add('display--none');
    },4000);
  }
  else {
    if (name.value === '') name.nextElementSibling.classList.remove('display--none');
    if (email.value === '') email.nextElementSibling.classList.remove('display--none');
    if (email.value !== '' && !exptxt.test(email.value)) email.nextElementSibling.nextElementSibling.classList.remove('display--none');
    if (message.value === '') message.nextElementSibling.classList.remove('display--none');
    form.action = '';
    form.method = '';
  }
}