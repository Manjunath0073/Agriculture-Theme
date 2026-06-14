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