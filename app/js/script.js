// Form functionality
// ------------------------------------
// Grab elements from the DOM
const form_el = document.querySelector("form");

// Add an event listener to the form when it's submitted
form_el.addEventListener("submit", (e) => {
   // Prevent the form from being submitted
   e.preventDefault();

   // Get the value of the email field and trim any whitespaces
   const input_el = document.getElementById("email");
   const input_value = input_el.value.trim();

   // Check if email field is blank
   validate_email(input_value, input_el);
});

// Define a function to perform input checks on the form
function validate_email(value, el) {
   if (value === "") {
      set_error_state(el, "Please enter an email address");
      remove_state(el);
      // Check if email is valid
   } else if (!is_email(value)) {
      set_error_state(el, "Please provide a valid email");
      remove_state(el);
   } else {
      set_success_state(el, "Email is valid. Thank you ( ͡ᵔ ͜ʖ ͡ᵔ )");
      remove_state(el);
   }
}

// Define a function to display an error if email is NOT valid
// It takes in the element to set the error on and the error message
function set_error_state(el, message) {
   const control_el = el.parentElement;
   const error_icon = control_el.querySelector(".error-icon");

   control_el.querySelector("small").innerText = message;
   control_el.querySelector("small").classList.add("error");
   error_icon.classList.add("error");
}

// Define a function that will show success message
function set_success_state(el, message) {
   const control_el = el.parentElement;

   control_el.querySelector("small").innerText = message;
   control_el.querySelector("small").classList.add("error");

   // Reset the forms
   form_el.reset();
}

// Define a function to remove the error after 2s
function remove_state(el) {
   const control_el = el.parentElement;
   const error_icon = control_el.querySelector(".error-icon");
   setTimeout(() => {
      control_el.querySelector("small").classList.remove("error");
      error_icon.classList.remove("error");
   }, 2000);
}

// Define a function that uses regular expressions to check if the email is valid
function is_email(email) {
   return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
   );
}
