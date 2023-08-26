
window.onload = emailValidation;
function emailValidation() {
  const form = document.getElementById('form');
  const emailComfirmField = document.getElementById('email_confirm');
  const element = document.createElement('p');
  const message = document.createTextNode("El correo electrónico no coincide");
  const contentField = document.getElementById('contenido');
  element.appendChild(message);
  element.setAttribute('id', 'alert');
  element.classList.add("alerta_color");
  emailComfirmField.addEventListener('input', e => {
    if(form.email.value !== form.email_confirm.value) {
      if (!document.getElementById('alerta')) {
        contentField.parentNode.insertBefore(element, contentField);
        emailComfirmField.classList.add("alerta_fondo");
      }
    } else {
      emailComfirmField.classList.remove("alerta_fondo");
      element.parentNode.removeChild(element);
    }
  });
};

window.onload = function() {
  emailValidation();
};
