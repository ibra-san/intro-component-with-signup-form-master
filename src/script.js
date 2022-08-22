const form = document.getElementById("form"); 
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");


form.addEventListener("submit", (e)=> { 
    
    checkInputs(e); 
})

function checkInputs(e) { 
    // get the values of the input and check them

    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(firstNameValue === "" || firstNameValue === undefined || firstNameValue === null) { 
        // Add error class and style 
        // show error message 
        // prevent submittal
        setError(e, firstName, "First Name cannot be empty");
    } else { 
        // Add success class that is all
        setSuccess (firstName);
    }

    if(lastNameValue === "" || lastNameValue === undefined || lastNameValue === null) { 
        setError(e, lastName, "Last Name cannot be empty");
    } else { 
        setSuccess (lastName);
    }

    if(emailValue === "" || emailValue === undefined || emailValue === null) { 
        setError(e, email, "email cannot be empty");
    } else if (!isEmail(emailValue)) { 
        setError(e, email, "Email is not valid");
    }
     else { 
        setSuccess (email);
    }

    if(passwordValue === "" || passwordValue === undefined || passwordValue === null) { 
        setError(e, password, "Password cannot be empty");
    } else if (passwordValue === "password" || passwordValue === "Password") { 
        setError(e, password, "Your password cannot be just password nor Password");
    } else if (passwordValue.length < 6) { 
        setError(e, password, "Your password is too short");
    } else if (passwordValue.length > 20) { 
        setError(e, password, "Your password is too long");
    }
    else { 
        setSuccess (password);
    }
    
}

function setError(e, input, message) { 
    e.preventDefault(e);
    const formControl = input.parentElement; // This the parent element of the input
    const small = formControl.querySelector("small"); // Selecting the element to display the error

    // adding the error
    small.innerText = message; 

    // adding the error class 
    formControl.className = "form_control w-full mb-10 relative error"
}

function setSuccess (input) { 
    const formControl = input.parentElement; 

    formControl.className = "form_control w-full mb-10 relative success"
}

function isEmail (email) { 
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email) // tests the given regex agains the email value. Note, validating emails basd on regex is really dangerous as you could block valid emails from been regested. The best way is to use the authentication email method. By sending an email to the mentioned email and recognize the response from it. Read more on stackover flow.
}

