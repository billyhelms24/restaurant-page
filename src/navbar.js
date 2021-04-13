const navbar = (...navItems) => {
    const content = document.querySelector("#content");

    const toggleActive = (e) => {
        document.querySelector(".active").classList.toggle("active");
        e.target.classList.toggle("active");
    };

    const nav = document.createElement("nav");
    const navbar = document.createElement("ul");
    navItems.forEach((item) => {
        const navItem = document.createElement("li");
        const navLink = document.createElement("a");
        navLink.innerHTML = item;
        navLink.href = "#";
        if (item === "HOME") {
            navLink.className = "active";
        }
        navLink.addEventListener("click", (e) => {
            toggleActive(e);
        });
        navItem.appendChild(navLink);
        navbar.appendChild(navItem);
    });

    nav.appendChild(navbar);
    content.appendChild(nav);
};

export { navbar };
