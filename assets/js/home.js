const words = [
    "Innovation",
    "Sustainability",
    "Technology",
    "Smart Farming",
    "AgriTech"
];

const colors = [
    "#2F6B3B",
    "#8BC34A",
    "#FFB703",
    "#4CAF50",
    "#2E7D32"
];

const heroText = document.getElementById("hero-text");

let index = 0;

setInterval(() => {

    index = (index + 1) % words.length;

    heroText.style.opacity = 0;

    setTimeout(() => {

        heroText.textContent = words[index];
        heroText.style.color = colors[index];
        heroText.style.opacity = 1;

    }, 300);

}, 2500);


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

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounters();

            observer.disconnect();
        }

    });

});

observer.observe(
    document.querySelector(".hero__stats")
);

document.addEventListener("DOMContentLoaded", () => {

    const reveals = document.querySelectorAll(
        ".reveal-left, .reveal-right, .reveal-up"
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