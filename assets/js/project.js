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

let sliderInterval =
setInterval(nextSlide, 5000);

dots.forEach((dot,index)=>{

    dot.addEventListener(
        "click",
        ()=>{

            currentSlide = index;

            showSlide(
                currentSlide
            );

            clearInterval(
                sliderInterval
            );

            sliderInterval =
            setInterval(
                nextSlide,
                5000
            );

        }
    );

});
const slider =
document.querySelector(
    ".testimonial__slider"
);

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
            5000
        );

    }
);