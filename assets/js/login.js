const password =
document.getElementById(
    "password"
);

const confirmPassword =
document.getElementById(
    "confirmPassword"
);

const togglePassword =
document.getElementById(
    "togglePassword"
);

const toggleConfirmPassword =
document.getElementById(
    "toggleConfirmPassword"
);

const form =
document.querySelector(
    ".auth__form"
);

const message =
document.querySelector(
    ".auth__message"
);

const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


/* Password Toggle */

if(
    password &&
    togglePassword
){

    togglePassword
    .addEventListener(
        "click",
        ()=>{

            password.type =
                password.type ===
                "password"
                ? "text"
                : "password";

            togglePassword
            .classList.toggle(
                "ri-eye-line"
            );

            togglePassword
            .classList.toggle(
                "ri-eye-off-line"
            );

        }
    );

}


/* Confirm Password Toggle */

if(
    confirmPassword &&
    toggleConfirmPassword
){

    toggleConfirmPassword
    .addEventListener(
        "click",
        ()=>{

            confirmPassword.type =
                confirmPassword.type ===
                "password"
                ? "text"
                : "password";

            toggleConfirmPassword
            .classList.toggle(
                "ri-eye-line"
            );

            toggleConfirmPassword
            .classList.toggle(
                "ri-eye-off-line"
            );

        }
    );

}


/* Real-time Password Validation */

if(password){

    password.addEventListener(
        "input",
        ()=>{

            const value =
                password.value.trim();

            if(value === ""){

                password.classList.remove(
                    "valid",
                    "invalid"
                );

                return;
            }

            if(
                passwordRegex.test(
                    value
                )
            ){

                password.classList.add(
                    "valid"
                );

                password.classList.remove(
                    "invalid"
                );

            }

            else{

                password.classList.add(
                    "invalid"
                );

                password.classList.remove(
                    "valid"
                );

            }

        }
    );

}


/* Form Submit Validation */

if(form){

    form.addEventListener(
        "submit",
        (e)=>{

            e.preventDefault();

            message.classList.remove(
                "success",
                "error"
            );

            const value =
                password.value.trim();

            /* Password Strength */

            if(
                !passwordRegex.test(
                    value
                )
            ){

                message.classList.add(
                    "error"
                );

                message.textContent =
                    "Password must contain 8+ characters, uppercase, lowercase, number and special character.";

                password.focus();

                return;
            }

            /* Confirm Password */

            if(confirmPassword){

                if(
                    password.value !==
                    confirmPassword.value
                ){

                    message.classList.add(
                        "error"
                    );

                    message.textContent =
                        "Passwords do not match.";

                    confirmPassword.focus();

                    return;
                }

            }

            /* Success */

            /* Success */

const role =
document.querySelector(
    'input[name="role"]:checked'
).value;

const email =
document.getElementById(
    "email"
).value;

const user = {

    name:

        document.getElementById(
            "name"
        )?.value ||

        email.split(
            "@"
        )[0],

    email: email,

    role: role

};

localStorage.setItem(

    "user",

    JSON.stringify(
        user
    )

);

message.classList.add(
    "success"
);

message.textContent =
    "Validation successful.";

setTimeout(()=>{

    if(role === "admin"){

        window.location.href =
            "admin-dashboard.html";

    }

    else{

        window.location.href =
            "farmer-dashboard.html";

    }

}, 1000);

        }
    );

}

const nameInput =
document.getElementById(
    "name"
);

if(nameInput){

    nameInput.addEventListener(
        "input",
        ()=>{

            nameInput.value =
            nameInput.value
            .replace(
                /[^A-Za-z ]/g,
                ""
            )
            .replace(
                /^\s+/,
                ""
            );

        }
    );

}
