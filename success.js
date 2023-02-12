const urlParams = new URLSearchParams(window.location.search);

const firstName = urlParams.get('firstname');
const lastName = urlParams.get('lastname');
const phone = urlParams.get('phone');
const email = urlParams.get('email');
const promocode = urlParams.get('promocode');
const where = urlParams.get('where');
const other = urlParams.get('other');
const termsAccepted = urlParams.get('termsAccepted');

setTimeout(() => {
  let formHTML = ''

  document.querySelector('#loader').style.display = 'none';

  formHTML += '<h2>Thank you for Registering!</h2>';
  formHTML += `<p><b>First Name:</b> ${firstName}</p>`;
  formHTML += `<p><b>Last Name:</b> ${lastName}</p>`;
  formHTML += `<p><b>Phone #:</b> ${phone}</p>`;
  formHTML += `<p><b>Email:</b> ${email}</p>`;
  formHTML += `<p><b>Promo Code:</b> ${promocode}</p>`;
  formHTML += `<p><b>Where did you hear about us?</b> ${where}</p>`;
  formHTML += other ? `<p><b>Other:</b> ${other}</p>` : '';
  formHTML += `<p><b>Terms Accepted?</b> ${termsAccepted ? 'True' : 'False'}</p>`;
  formHTML += `<button onclick="backHome()">Back Home</button>`;

  document.querySelector('#form-output').insertAdjacentHTML('afterbegin', formHTML);
  document.querySelector('#form-output').style.display = 'block';
}, 1500)

function backHome() {
  window.location = '/';
}