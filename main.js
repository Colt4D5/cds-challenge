const isValid = {
  firstname: false,
  lastname: false,
  email: false,
  phone: false,
  where: false,
  termsAccepted: false,
}

const firstNameInput = document.querySelector('form input[name="firstname"]');
firstNameInput.addEventListener('input', e => validateInput(e.target, e.target.value.length > 30 || e.target.value.length === 0, 'firstname'));

const lastNameInput = document.querySelector('form input[name="lastname"]');
lastNameInput.addEventListener('input', e => validateInput(e.target, e.target.value.length > 30 || e.target.value.length === 0, 'lastname'));

const phoneInput = document.querySelector('form input[name="phone"]');
phoneInput.addEventListener('input', e => validateInput(e.target, /^\d+$/.test(e.target.value) === false || (e.target.value.length > 30 || e.target.value.length === 0), 'phone'));

const emailInput = document.querySelector('form input[name="email"]');
emailInput.addEventListener('input', e => validateInput(e.target, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(e.target.value) === false || (e.target.value.length > 50 || e.target.value.length === 0), 'email'));

const promoInput = document.querySelector('form input[name="promocode"]');
promoInput.addEventListener('input', e => {
  const length = e.target.value.length
  console.log(isValid)
  if (length === 0) {
    document.querySelector('select[name="where"]').setAttribute('required', 'true');
    document.querySelector('label[for="where"]').innerHTML = 'How did you hear about us? <sup>*</sup>';
    if (document.querySelector('select[name="where"]').value === 'none') {
      isValid.where = false;
    }
  } else {
    document.querySelector('select[name="where"]').removeAttribute('required');
    document.querySelector('label[for="where"]').innerHTML = 'How did you hear about us? ';
    if (document.querySelector('select[name="where"]').value === 'none')
    isValid.where = true;
  }
});

document.querySelector('select[name="where"]').addEventListener('change', e => {
  if (promoInput.value.length > 0 && e.target.value !== 'none') {
    isValid.where = true;
  } else {
    isValid.where = false;
  }
});

const acceptTermsCheck = document.querySelector('input[name="termsAccepted"]')
acceptTermsCheck.addEventListener('change', e => {
  if (e.target.checked) {
    isValid.termsAccepted = true;
    document.querySelector('form#form input[type="submit"]').removeAttribute('disabled')
  } else {
    isValid.termsAccepted = false;
    document.querySelector('form#form input[type="submit"]').setAttribute('disabled', 'true')
  }
})

const otherInput = document.querySelector('input[name="other"]');

const selectInput = document.querySelector('form select[name="where"]');
selectInput.addEventListener('change', e => {
  if (e.target.value !== 'none') isValid.where = true;
  if (e.target.value === 'other') {
    document.querySelector('#other-input-group').classList.add('isVisible');
    document.querySelector('input[name="other"]').setAttribute('required', true)
  } else {
    document.querySelector('#other-input-group').classList.remove('isVisible');
    document.querySelector('input[name="other"]').value = ''
    document.querySelector('input[name="other"]').removeAttribute('required')
  }
});



function validateInput(target, condition, key) {
  if (condition) {
    target.classList.add('invalid');
    isValid[key] = false;
  } else {
    target.classList.remove('invalid');
    isValid[key] = true;
  }
}

document.querySelector('form#form').addEventListener('submit', e => {
  e.preventDefault()
  
  // if all required fields are valid
  if (Object.values(isValid).every(item => item)) {
    const formData = new FormData(e.target)
    const firstName = formData.get('firstname');
    const lastName = formData.get('lastname');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const promocode = formData.get('promocode');
    const where = formData.get('where');
    const other = formData.get('other');
    const termsAccepted = formData.get('termsAccepted');
    const url = `/success.html?${firstName ? 'firstname=' + firstName : ''}&${lastName ? 'lastname=' + lastName : ''}&${phone ? 'phone=' + phone : ''}&${email ? 'email=' + email : ''}&${promocode ? 'promocode=' + promocode : ''}&${where ? 'where=' + where : ''}&${other ? 'other=' + other : ''}&${termsAccepted ? 'termsAccepted=' + termsAccepted : ''}`;
    window.location = url;
  } else { // else if invalid fields
    let index = 0;
    // scroll to first invalid element
    for (const [key, value] of Object.entries(isValid)) {
      if (!value && index === 0) {
        const invalidField = document.querySelector(`[name="${key}"]`);
        invalidField.focus();
        index++;
      }
    }
  }
})

function toggleTerms() {
  document.querySelector('html').dataset.termsDialogIsOpen = document.querySelector('html').dataset.termsDialogIsOpen == "false"
  
  document.querySelector('html').dataset.termsDialogIsOpen == "true" ? 
  document.querySelector('dialog#terms').setAttribute('open', true) : 
  document.querySelector('dialog#terms').removeAttribute('open')
}


[
  document.querySelector('.terms-overlay'),
  document.querySelector('dialog#terms #close-btn')
].forEach(el => el.addEventListener('click', toggleTerms))