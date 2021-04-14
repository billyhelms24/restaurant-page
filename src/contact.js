const contact = () => {
    const main = document.querySelector("main");

    const logo = document.createElement("img");
    logo.src = "assets/logo.png";
    logo.classList.add("logo");
    main.appendChild(logo);

    const brand = document.createElement("h1");
    brand.classList.add("brand");
    brand.textContent = "BIERGARTEN";
    main.appendChild(brand);

    const contactInfo = document.createElement("p");
    contactInfo.classList.add("mission");
    contactInfo.textContent =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    main.appendChild(contactInfo);
};

export { contact };
