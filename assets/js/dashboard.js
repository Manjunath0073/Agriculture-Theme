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

            sidebar.classList.toggle(
                "show-sidebar"
            );

            const icon =
            toggle.querySelector("i");

            if(
                sidebar.classList.contains(
                    "show-sidebar"
                )
            ){

                icon.classList.remove(
                    "ri-menu-line"
                );

                icon.classList.add(
                    "ri-close-line"
                );

            }

            else{

                icon.classList.remove(
                    "ri-close-line"
                );

                icon.classList.add(
                    "ri-menu-line"
                );

            }

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

            if(toggle){

                const icon =
                toggle.querySelector("i");

                icon.classList.remove(
                    "ri-close-line"
                );

                icon.classList.add(
                    "ri-menu-line"
                );

            }

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

            if(pageTitle){

                pageTitle.textContent =
                link.querySelector(
                    "span"
                ).textContent;

            }

            /* Auto close sidebar on mobile */

            sidebar.classList.remove(
                "show-sidebar"
            );

            if(toggle){

                const icon =
                toggle.querySelector("i");

                icon.classList.remove(
                    "ri-close-line"
                );

                icon.classList.add(
                    "ri-menu-line"
                );

            }

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


if(
    document.getElementById(
        "yieldChart"
    )
){

    new Chart(

        document.getElementById(
            "yieldChart"
        ),

        {

            type:"bar",

            data:{

                labels:[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"
                ],

                datasets:[{

                    label:"Yield (tons)",

                    data:[
                        20,
                        25,
                        30,
                        28,
                        35,
                        40
                    ],

                    backgroundColor:[
                        "#A5D6A7",
                        "#81C784",
                        "#66BB6A",
                        "#4CAF50",
                        "#43A047",
                        "#2E7D32"
                    ],

                    borderColor:"#2E7D32",

                    borderWidth:1,

                    borderRadius:8

                }]

            },
            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        }

    );

    new Chart(

        document.getElementById(
            "performanceChart"
        ),

        {

            type:"line",

            data:{

                labels:[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"
                ],

                datasets:[{

                    label:"Farm Score",

                    data:[
                        60,
                        65,
                        70,
                        72,
                        80,
                        90
                    ],

                    borderColor:"#4CAF50",

                    backgroundColor:
                        "rgba(76,175,80,.15)",

                    fill:true,

                    tension:.4,

                    pointBackgroundColor:
                        "#2E7D32",

                    pointBorderColor:
                        "#fff",

                    pointRadius:5,

                    pointHoverRadius:7

                }]

            },
            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        }

    );

}

const userChart =
document.getElementById(
    "userChart"
);

if(userChart){

    new Chart(
        userChart,
        {

            type:"line",

            data:{

                labels:[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"
                ],

                datasets:[{

                    label:
                        "Users",

                    data:[
                        50,
                        65,
                        80,
                        95,
                        110,
                        124
                    ],

                    borderColor:
                        "#4CAF50",

                    backgroundColor:
                        "rgba(76,175,80,.15)",

                    fill:true,

                    tension:.4

                }]

            },
            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        }

    );

}

const roleChart =
document.getElementById(
    "roleChart"
);

if(roleChart){

    new Chart(
        roleChart,
        {

            type:"doughnut",

            data:{

                labels:[
                    "Farmers",
                    "Admins"
                ],

                datasets:[{

                    data:[
                        98,
                        26
                    ],

                    backgroundColor:[

                        "#A5D6A7",
                        "#4CAF50"

                    ]

                }]

            },
            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        }

    );

}

const revenueChart =
document.getElementById(
    "revenueChart"
);

if(revenueChart){

    new Chart(
        revenueChart,
        {

            type:"bar",

            data:{

                labels:[

                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"

                ],

                datasets:[{

                    label:
                        "Revenue",

                    data:[

                        20000,
                        30000,
                        45000,
                        55000,
                        85000,
                        120000

                    ],

                    backgroundColor:[
                        "#A5D6A7",
                        "#81C784",
                        "#66BB6A",
                        "#4CAF50",
                        "#43A047",
                        "#2E7D32"
                    ],

                    borderRadius:8

                }]

            },
            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        }

    );

}

const userTrendChart =
document.getElementById(
    "userTrendChart"
);

if(userTrendChart){

    new Chart(
        userTrendChart,
        {

            type:"line",

            data:{

                labels:[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun"
                ],

                datasets:[{

                    label:
                        "Users",

                    data:[
                        40,
                        55,
                        70,
                        85,
                        100,
                        124
                    ],

                    borderColor:
                        "#4CAF50",

                    backgroundColor:
                        "rgba(76,175,80,.15)",

                    fill:true,

                    tension:.4

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        }

    );

}