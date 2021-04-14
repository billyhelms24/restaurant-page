const menu = () => {
    const main = document.querySelector("main");

    const menu = document.createElement("div");
    let products = [];
    class Product {
        constructor(name, abv, price, type, description, picture) {
            this.name = name;
            this.abv = abv;
            this.price = price;
            this.type = type;
            this.description = description;
            this.picture = picture;
            products.push(this);
            console.log(products);
        }
    }

    new Product(
        "Warheads Blue Raspberry",
        "5",
        "7.99",
        "Sour",
        "Imagine a blue raspberry warhead. Now imagine it's a beer. Drink that beer. You just drank our beer.",
        "assets/warheads-extreme-sour-blue.jpg"
    );

    new Product(
        "OG Haze Pineapple Express",
        "8.2",
        "5.99",
        "Double/Imperial IPA",
        "Hazy IPA infused with pineapple express hemp terpenes. Fruity and dank.",
        "assets/og-haze.jpg"
    );

    new Product(
        "Hell or High Watermelon Wheat",
        "4.9",
        "4.99",
        "Fruity",
        "This American wheat beer is brewed with real watermelon, for a flavor that’s surprisingly crisp, dry and refreshing—summer in a can.",
        "assets/hell-or-high-watermelon.jpg"
    );

    new Product(
        "Jammy Pants",
        "7",
        "8.99",
        "Sour",
        "This kettle sour was fermented with 'pantfulls' of Guava, Boysenberry and Black Currant puree.",
        "assets/jammy-pants.jpg"
    );

    new Product(
        "Tailpipin'",
        "6.5",
        "5.99",
        "IPA",
        "IPA brewed with Pilsner Malts and Hopped with Citra and Sirachi Ace",
        "assets/tailpipin.jpg"
    );

    new Product(
        "Peanut Butter Milkstout",
        "5.3",
        "4.99",
        "Stout",
        "Our Peanut Butter Milk Stout is simply irresistible. It’s like dark chocolate Reese’s in a glass!",
        "assets/peanut-butter-milkstout.jpg"
    );

    const grid = document.createElement("div");
    grid.classList.add("grid");
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const img = document.createElement("img");
        img.classList.add("product-img");
        img.src = product.picture;
        productCard.appendChild(img);

        const name = document.createElement("p");
        name.classList.add("product-name");
        name.innerHTML = product.name;
        productCard.appendChild(name);

        const level = document.createElement("div");
        level.classList.add("level");

        const price = document.createElement("p");
        price.classList.add("product-price");
        price.innerHTML = "$" + product.price;
        level.appendChild(price);

        const abv = document.createElement("p");
        abv.classList.add("product-abv");
        abv.innerHTML = product.abv + " ABV";
        level.appendChild(abv);

        productCard.appendChild(level);

        const description = document.createElement("p");
        description.classList.add("product-description");
        description.innerHTML = product.description;
        productCard.appendChild(description);

        const type = document.createElement("p");
        type.classList.add("product-type");
        type.innerHTML = product.type;
        productCard.appendChild(type);

        grid.appendChild(productCard);
    });
    main.appendChild(grid);
};

export { menu };
