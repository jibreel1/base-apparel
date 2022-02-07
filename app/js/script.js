const form = document.getElementById("form");
const emailDiv = document.querySelector(".input-control");
const emailInput = document.getElementById("email");
const error = document.getElementById("text");
const submitButton = document.querySelector(".input_submit");

const isValidEmail = (email) => {
   const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
};

const validateEmail = () => {
   const emailValue = emailInput.value.trim();

   if (emailValue === "") {
      emailDiv.classList.remove("valid");
      emailDiv.classList.remove("invalid");
      error.innerHTML = "";
   } else if (isValidEmail(emailValue)) {
      emailDiv.classList.add("valid");
      emailDiv.classList.remove("invalid");
      error.innerHTML = "Your Email is valid";
      error.style.color = "green";
   } else {
      emailDiv.classList.remove("valid");
      emailDiv.classList.add("invalid");
      error.innerHTML = "Please provide a valid email";
      error.style.color = "#ff7f7f";
   }
};

// const clicksubmit = () => {
//    validateEmail();
// };

submitButton.addEventListener("click", validateEmail);
