/*=============== SIDEBAR ===============*/

const sidebar =
document.querySelector(
    ".sidebar"
);

const toggle =
document.querySelector(
    ".dashboard__toggle"
);

const closeBtn =
document.querySelector(
    ".sidebar__close"
);

if(toggle){

    toggle.addEventListener(
        "click",
        ()=>{

            sidebar.classList.add(
                "show-sidebar"
            );

        }
    );

}

if(closeBtn){

    closeBtn.addEventListener(
        "click",
        ()=>{

            sidebar.classList.remove(
                "show-sidebar"
            );

        }
    );

}


/*=============== MENU SWITCHING ===============*/

const links =
document.querySelectorAll(
    ".sidebar__link"
);

const pages = {

    dashboard:
    document.getElementById(
        "dashboardPage"
    ),

    menu2:
    document.getElementById(
        "menu2Page"
    ),

    menu3:
    document.getElementById(
        "menu3Page"
    ),

    profile:
    document.getElementById(
        "profilePage"
    )

};

const pageTitle =
document.getElementById(
    "pageTitle"
);

links.forEach(link=>{

    link.addEventListener(
        "click",
        (e)=>{

            e.preventDefault();

            links.forEach(item=>{

                item.classList.remove(
                    "active"
                );

            });

            link.classList.add(
                "active"
            );

            Object.values(
                pages
            ).forEach(page=>{

                if(page){

                    page.hidden =
                    true;

                }

            });

            const pageName =
            link.dataset.page;

            if(
                pages[pageName]
            ){

                pages[pageName]
                .hidden = false;

            }

            pageTitle.textContent =
            link.querySelector(
                "span"
            ).textContent;

            /* Auto close sidebar on mobile */

            sidebar.classList.remove(
                "show-sidebar"
            );

        }
    );

});


/*=============== USER DETAILS ===============*/

const userName =
document.getElementById(
    "userName"
);

const userRole =
document.getElementById(
    "userRole"
);

const user =
JSON.parse(
    localStorage.getItem(
        "user"
    )
);

if(user){

    if(userName){

        userName.textContent =
            user.name ||
            "User";

    }

    if(userRole){

        userRole.textContent =
            user.role ||
            "Farmer";

    }

}


/*=============== LOGOUT ===============*/

const logoutBtn =
document.querySelector(
    ".sidebar__logout"
);

if(logoutBtn){

    logoutBtn.addEventListener(
        "click",
        ()=>{

            localStorage.removeItem(
                "user"
            );

            window.location.href =
                "login.html";

        }
    );

}

const profileName =
document.getElementById(
    "profileName"
);

const profileRole =
document.getElementById(
    "profileRole"
);

const profileEmail =
document.getElementById(
    "profileEmail"
);

if(user){

    if(profileName)
        profileName.textContent =
            user.name;

    if(profileRole)
        profileRole.textContent =
            user.role;

    if(profileEmail)
        profileEmail.textContent =
            user.email;
}

if(user){

    document.getElementById(
        "profileName"
    ).textContent =
        user.name;

    document.getElementById(
        "profileRole"
    ).textContent =
        user.role;

    document.getElementById(
        "profileEmail"
    ).textContent =
        user.email;
}