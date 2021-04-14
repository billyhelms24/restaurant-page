import { contact } from "./contact.js";
import { home } from "./home.js";
import { menu } from "./menu.js";

const navbar = (...navItems) => {
    const content = document.querySelector("#content");
    const clearElement = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };

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
            navItem.addEventListener("click", () => {
                clearElement(main);
                home();
            });
        } else if (item === "MENU") {
            navItem.addEventListener("click", () => {
                clearElement(main);
                menu();
            });
        } else if (item === "CONTACT") {
            navItem.addEventListener("click", () => {
                clearElement(main);
                contact();
            });
        }
        navLink.addEventListener("click", (e) => {
            toggleActive(e);
        });
        navItem.appendChild(navLink);
        navbar.appendChild(navItem);
    });

    nav.appendChild(navbar);
    content.appendChild(nav);
    const main = document.createElement("main");
    content.appendChild(main);

    home();
};

export { navbar };
