document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        const reveals =
        document.querySelectorAll(

            ".reveal-up,.reveal-left,.reveal-right,.reveal-scale"

        );

        const observer =
        new IntersectionObserver(

            entries=>{

                entries.forEach(
                    entry=>{

                        if(
                            entry.isIntersecting
                        ){

                            entry.target
                            .classList.add(
                                "show"
                            );

                        }

                    }
                );

            },

            {
                threshold:.15
            }

        );

        reveals.forEach(
            item=>observer.observe(item)
        );

    }
);