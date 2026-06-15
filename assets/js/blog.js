
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

const blogCategories =
document.querySelectorAll(
    ".blog-category"
);

blogCategories.forEach(category => {

    category.addEventListener(
        "click",
        () => {

            blogCategories.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });

            category.classList.add(
                "active"
            );

        }
    );

});

const newsletterForm =
document.querySelector(
    ".newsletter__form"
);

const newsletterMessage =
document.querySelector(
    ".newsletter__message"
);

if(newsletterForm){

    newsletterForm.addEventListener(
        "submit",
        (e)=>{

            e.preventDefault();

            newsletterMessage.classList.remove(
                "success",
                "error"
            );

            newsletterMessage.classList.add(
                "success"
            );

            newsletterMessage.textContent =
                "Thank you for subscribing!";

            newsletterForm.reset();
            setTimeout(()=>{

                newsletterMessage.textContent = "";

            }, 4000);

        }
        
    );

}