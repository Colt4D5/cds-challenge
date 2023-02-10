function toggleTerms() {
  document.querySelector('html').dataset.termsDialogIsOpen = document.querySelector('html').dataset.termsDialogIsOpen == "false"
  
  document.querySelector('html').dataset.termsDialogIsOpen == "true" ? 
    document.querySelector('dialog#terms').setAttribute('open', true) : 
    document.querySelector('dialog#terms').removeAttribute('open')
}

// [
//   document.querySelector('.terms-overlay'),
//   document.querySelector('dialog#terms #close-btn')
// ].forEach(el => el.addEventListener('click', toggleTerms))

document.querySelector('.terms-overlay').addEventListener('click', toggleTerms)
document.querySelector('dialog#terms #close-btn')
.addEventListener('click', toggleTerms)