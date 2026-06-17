document.addEventListener("DOMContentLoaded", () => {

    const reveals = document.querySelectorAll(
    ".reveal-left,.reveal-right,.reveal-up,.reveal-scale"
    );

    const revealObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });

    reveals.forEach(item => {

        revealObserver.observe(item);

    });

});

const contactForm =
document.querySelector(
    ".contact__form"
);

const contactMessage =
document.querySelector(
    ".contact__message"
);

if(contactForm){

    contactForm.addEventListener(
        "submit",
        (e)=>{

            e.preventDefault();

            const name =
            contactForm.name.value.trim();

            const email =
            contactForm.email.value.trim();

            const subject =
            contactForm.subject.value.trim();

            const message =
            contactForm.message.value.trim();
            if(
                message.length < 20
            ){

                contactMessage.className =
                    "contact__message error";

                contactMessage.textContent =
                    "Message must contain at least 20 characters.";

                contactForm.message.focus();

                return;
            }

            if(
                !name ||
                !email ||
                !subject ||
                !message
            ){

                contactMessage.className =
                    "contact__message error";

                contactMessage.textContent =
                    "Please fill all fields.";

            }

            else if(
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(email)
            ){

                contactMessage.className =
                    "contact__message error";

                contactMessage.textContent =
                    "Enter a valid email.";

            }

            else{

                contactMessage.className =
                    "contact__message success";

                contactMessage.textContent =
                    "Message sent successfully!";

                contactForm.reset();

            }

            setTimeout(()=>{

                contactMessage.textContent =
                    "";

                contactMessage.classList.remove(
                    "success",
                    "error"
                );

            }, 4000);

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
