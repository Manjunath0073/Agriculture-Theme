const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;
        const suffix = counter.dataset.suffix || "";

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            count += increment;

            if (count < target) {

                counter.innerText =
                    Math.ceil(count) + suffix;

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText =
                    target + suffix;
            }
        };

        updateCounter();

    });

};

startCounters();

const faqItems =
document.querySelectorAll(".faq__item");

faqItems.forEach(item => {

    const header =
    item.querySelector(".faq__header");

    header.addEventListener("click",()=>{

        faqItems.forEach(faq=>{

            if(faq !== item){

                faq.classList.remove(
                    "active"
                );

            }

        });

        item.classList.toggle(
            "active"
        );

    });

});


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