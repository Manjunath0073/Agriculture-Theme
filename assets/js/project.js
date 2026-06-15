const slides =
document.querySelectorAll(
    ".testimonial__card"
);

const dots =
document.querySelectorAll(
    ".dot"
);

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove(
            "active"
        );

    });

    dots.forEach(dot => {

        dot.classList.remove(
            "active"
        );

    });

    slides[index].classList.add(
        "active"
    );

    dots[index].classList.add(
        "active"
    );

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

/* Only run slider if testimonials exist */

if(slides.length > 0){

    let sliderInterval =
    setInterval(nextSlide, 4000);

    dots.forEach((dot,index)=>{

        dot.addEventListener(
            "click",
            ()=>{

                currentSlide = index;

                showSlide(currentSlide);

                clearInterval(
                    sliderInterval
                );

                sliderInterval =
                setInterval(
                    nextSlide,
                    4000
                );

            }
        );

    });

    const slider =
    document.querySelector(
        ".testimonial__slider"
    );

    if(slider){

        slider.addEventListener(
            "mouseenter",
            ()=>clearInterval(
                sliderInterval
            )
        );

        slider.addEventListener(
            "mouseleave",
            ()=>{

                sliderInterval =
                setInterval(
                    nextSlide,
                    4000
                );

            }
        );

    }

}

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

const categoryPills =
document.querySelectorAll(
    ".category__pill"
);

categoryPills.forEach(pill => {

    pill.addEventListener(
        "click",
        () => {

            categoryPills.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });

            pill.classList.add(
                "active"
            );

        }
    );

});