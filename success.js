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
  formHTML += `<p>First Name: ${firstName}</p>`;
  formHTML += `<p>Last Name: ${lastName}</p>`;
  formHTML += `<p>Phone #: ${phone}</p>`;
  formHTML += `<p>Email: ${email}</p>`;
  formHTML += `<p>Promo Code: ${promocode}</p>`;
  formHTML += `<p>Where did you hear about us? ${where}</p>`;
  formHTML += other ? `<p>Other: ${other}</p>` : '';
  formHTML += `<p>Terms Accepted? ${termsAccepted ? 'True' : 'False'}</p>`;
  formHTML += `<button onclick="backHome()">Back Home</button>`;

  document.querySelector('#form-output').insertAdjacentHTML('afterbegin', formHTML);
  document.querySelector('#form-output').style.display = 'block';
}, 1500)

function backHome() {
  window.location = '/';
}