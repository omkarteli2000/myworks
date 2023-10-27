const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const loginTabBtn = document.getElementById('loginTabBtn');
const signupTabBtn = document.getElementById('signupTabBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const popup = document.getElementById('popup');


const loginEmailMobile = document.getElementById('loginEmailMobile');
const loginPassword = document.getElementById('loginPassword');
const loginEmailMobileError = document.getElementById('loginEmailMobileError');
const loginPasswordError = document.getElementById('loginPasswordError');


const signupName = document.getElementById('signupName');
const signupEmail = document.getElementById('signupEmail');
const signupMobile = document.getElementById('signupMobile');
const signupPassword = document.getElementById('signupPassword');
const signupNameError = document.getElementById('signupNameError');
const signupEmailError = document.getElementById('signupEmailError');
const signupMobileError = document.getElementById('signupMobileError');
const signupPasswordError = document.getElementById('signupPasswordError');

openPopupBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

loginTabBtn.addEventListener('click', () => {
  loginTabBtn.classList.add('active');
  signupTabBtn.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  loginEmailMobileError.textContent = "";
  loginPasswordError.textContent = "";

  const emailMobileValue = loginEmailMobile.value.trim();
  const passwordValue = loginPassword.value.trim();

  if (emailMobileValue === "") {
    loginEmailMobileError.textContent = "Email or mobile is required";
  }
  if (passwordValue === "") {
    loginPasswordError.textContent = "Password is required";
  }

  // Additional logic for login processing...
});

signupTabBtn.addEventListener('click', () => {
  signupTabBtn.classList.add('active');
  loginTabBtn.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  signupNameError.textContent = "";
  signupEmailError.textContent = "";
  signupMobileError.textContent = "";
  signupPasswordError.textContent = "";

  const nameValue = signupName.value.trim();
  const emailValue = signupEmail.value.trim();
  const mobileValue = signupMobile.value.trim();
  const passwordValue = signupPassword.value.trim();

  if (nameValue === "") {
    signupNameError.textContent = "Name is required";
  }
  if (emailValue === "") {
    signupEmailError.textContent = "Email is required";
  }
  // Validate email format (regular expression)
  if (!validateEmail(emailValue)) {
    signupEmailError.textContent = "Invalid email format";
  }
  if (mobileValue === "") {
    signupMobileError.textContent = "Mobile is required";
  }
  // Validate mobile format (regular expression)
  if (!validateMobile(mobileValue)) {
    signupMobileError.textContent = "Invalid mobile format";
  }
  if (passwordValue === "") {
    signupPasswordError.textContent = "Password is required";
  }

  // Additional logic for signup processing...
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateMobile(mobile) {
  const mobilePattern = /^[0-9]{10}$/;
  return mobilePattern.test(mobile);
}