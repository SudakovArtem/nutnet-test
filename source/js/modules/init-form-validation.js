const initFormValidation = () => {
  const forms = document.querySelectorAll('form');

  if (!forms) {
    return;
  }

  forms.forEach((form) => {
    const mailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const nameRegEx = /[^А-Я,а-я,a-z,A-Z,ё,Ё,' ',-]/;
    const formSubmitBtn = form.querySelector('button[type="submit"]');
    const nameInput = form.querySelector('.input-wrapper input[name="name"]');
    const subjectInput = form.querySelector('.input-wrapper input[name="subject"]');
    const emailInput = form.querySelector('.input-wrapper input[type="email"]');
    const textarea = form.querySelector('.input-wrapper textarea[required]');

    const formInputs = form.querySelectorAll('.input-wrapper:not(.js-tel):not(.input-wrapper--email) input:required, input[type="checkbox"]:required, textarea[required]');
    form.setAttribute('novalidate', '');

    form.addEventListener('input', () => {
      if (form.checkValidity()) {
        form.classList.add('form-valid');
      } else {
        form.classList.remove('form-valid');
      }
    });

    formSubmitBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      document.activeElement.blur();
      if (form.checkValidity()) {
        formInputs.forEach((el) => {
          el.classList.remove('invalid');
          el.closest('.input-wrapper').classList.remove('input-wrapper--invalid');
          el.closest('.input-wrapper').classList.remove('input-wrapper--valid');
        });
        form.submit();
      } else {
        formInputs.forEach((el) => {
          if (!el.checkValidity()) {
            el.closest('.input-wrapper').classList.add('input-wrapper--invalid');
            el.closest('.input-wrapper').classList.remove('input-wrapper--valid');
          }
        });

        if (nameInput) {
          nameInput.addEventListener('input', () => {
            nameInput.value = nameInput.value.replace(nameRegEx, '');
          });

          if (nameRegEx.test(nameInput.value)) {
            nameInput.closest('.input-wrapper').classList.add('input-wrapper--invalid');
            nameInput.closest('.input-wrapper').classList.remove('input-wrapper--valid');
          }
          nameInput.addEventListener('input', () => {
            if (!nameRegEx.test(nameInput.value)) {
              if (nameInput.closest('.input-wrapper').classList.contains('input-wrapper--invalid')) {
                nameInput.closest('.input-wrapper').classList.remove('input-wrapper--invalid');
              }
              nameInput.closest('.input-wrapper').classList.add('input-wrapper--valid');
            } else {
              nameInput.closest('.input-wrapper').classList.remove('input-wrapper--valid');
            }
          });
        }

        if (subjectInput) {
          subjectInput.addEventListener('input', () => {
            subjectInput.value = subjectInput.value.replace(nameRegEx, '');
          });

          if (nameRegEx.test(subjectInput.value)) {
            subjectInput.closest('.input-wrapper').classList.add('input-wrapper--invalid');
            subjectInput.closest('.input-wrapper').classList.remove('input-wrapper--valid');
          }
          subjectInput.addEventListener('input', () => {
            if (!nameRegEx.test(subjectInput.value)) {
              if (subjectInput.closest('.input-wrapper').classList.contains('input-wrapper--invalid')) {
                subjectInput.closest('.input-wrapper').classList.remove('input-wrapper--invalid');
              }
              subjectInput.closest('.input-wrapper').classList.add('input-wrapper--valid');
            } else {
              subjectInput.closest('.input-wrapper').classList.remove('input-wrapper--valid');
            }
          });
        }

        if (emailInput) {
          if (!mailRegEx.test(emailInput.value)) {
            emailInput.closest('.input-wrapper').classList.add('input-wrapper--invalid');
            emailInput.closest('.input-wrapper').classList.remove('input-wrapper--valid');
          }
          emailInput.addEventListener('input', () => {
            if (mailRegEx.test(emailInput.value)) {
              if (emailInput.closest('.input-wrapper').classList.contains('input-wrapper--invalid')) {
                emailInput.closest('.input-wrapper').classList.remove('input-wrapper--invalid');
              }
              emailInput.closest('.input-wrapper').classList.add('input-wrapper--valid');
            } else {
              emailInput.closest('.input-wrapper').classList.remove('input-wrapper--valid');
            }
          });
        }

        if (textarea) {
          textarea.addEventListener('input', () => {
            const value = textarea.value;

            if (value.length) {
              if (textarea.closest('.input-wrapper').classList.contains('input-wrapper--invalid')) {
                textarea.closest('.input-wrapper').classList.remove('input-wrapper--invalid');
              }
              textarea.closest('.input-wrapper').classList.add('input-wrapper--valid');
            } else {
              textarea.closest('.input-wrapper').classList.remove('input-wrapper--valid');
            }
          });
        }
      }
    });
  });
};

export {initFormValidation};
