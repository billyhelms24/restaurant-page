const home = () => {
    const content = document.querySelector("#content");

    const logo = document.createElement("img");
    logo.src = "../assets/logo.png";
    logo.classList.add("logo");
    content.appendChild(logo);

    const brand = document.createElement("h1");
    brand.classList.add("brand");
    brand.textContent = "BIERGARTEN";
    content.appendChild(brand);

    const mission = document.createElement("p");
    mission.classList.add("mission");
    mission.innerHTML =
        "At the end of the day, Beirgarten is all about being a wonderful place to eat, drink and hangout. Not too rowdy, not too laid back, just a good old fashioned good time.</br></br>Homemade sausage, craft beer, pig roasts, beef jerky, pickled vegetables, spring days in Texas, Sunday brunch, and all forms of Americana & country music are a few of our favorite things.</br></br>We understand that the best way isn't always the fastest or easiest way, and we're ok with that. We believe that quality food, made from scratch, can still be sold at an honest price.</br></br>We have a commitment to excellence and deeply believe in the principle of hospitality.</br></br>We truly look forward to being of service. We'll see you when you get here.";
    content.appendChild(mission);
};

export { home };
