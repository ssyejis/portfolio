let form,name,email,message,nameVali=!1,emailVali=!1,messageVali=!1;document.addEventListener("DOMContentLoaded",(()=>{form=document.querySelector(".gform"),name=document.getElementById("name"),email=document.getElementById("email"),message=document.getElementById("message")}));const exptxt=/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;function checkForm(e){switch(e){case"name":""===name.value?(name.nextElementSibling.classList.remove("display--none"),nameVali=!1):(name.nextElementSibling.classList.add("display--none"),nameVali=!0);break;case"email":""===email.value?(email.nextElementSibling.classList.remove("display--none"),email.nextElementSibling.nextElementSibling.classList.add("display--none"),emailVali=!1):""!==email.value&&(email.nextElementSibling.classList.add("display--none"),exptxt.test(email.value)?(email.nextElementSibling.nextElementSibling.classList.add("display--none"),emailVali=!0):(email.nextElementSibling.nextElementSibling.classList.remove("display--none"),emailVali=!1));break;case"message":""===message.value?(message.nextElementSibling.classList.remove("display--none"),messageVali=!1):(message.nextElementSibling.classList.add("display--none"),messageVali=!0)}}function sendForm(){nameVali&&emailVali&&messageVali?(form.action="https://script.google.com/macros/s/AKfycbx8hy8W5Bzh5uareHiGsyLToaHhB58lP90EIVkwn43bibfnC4NTTD1PHkX8cVBF0yLt/exec",form.method="POST"):(""===name.value&&name.nextElementSibling.classList.remove("display--none"),""===email.value&&email.nextElementSibling.classList.remove("display--none"),""===email.value||exptxt.test(email.value)||email.nextElementSibling.nextElementSibling.classList.remove("display--none"),""===message.value&&message.nextElementSibling.classList.remove("display--none"),form.action="",form.method="")}