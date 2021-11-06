// Select input

// Name input
const name = document.getElementById("name")

// Password input
const password = document.getElementById("password")

// Get form id
// Catch error before submitted, default click submit will auto refresh page.
const form = document.getElementById("form")

// E2. Error that set earlier
const errorElement = document.getElementById ("error")

// In order to cancel form submitting
form.addEventListener("submit", (e) => {
    // Create if have error
    // Create error message
    // Check for first error
    let messages = [] 

    if ((name.value === "" || name.value == null) && (password.value === "" || password.value == null)) { 
    // Add validations
    //If do not pass in any name, error message will prompt
    messages.push("Please enter your Digital Services Password.")
    }

    if ((name.value === "" || password.value == null)) { 
        // Add validations
        //If do not pass in any name, error message will prompt
        messages.push("Please enter your Digital Services Password.")
        }

    // Check password with different requirement
    if (password.value.length <= 6) {
        messages.push("Password must be between 8 to 12 characters.")
    }

    // Check some form of error that prevent actual form from submitting
    if (messages.length > 0) {
           // Prevent page from submitting
           e.preventDefault()
           // E1. Send error to error create another variable errorElement
           // E3. Separate by ,
           errorElement.innerText = messages.join(", ")
    }
})