function chooseProduct(segment) {
    const sabor = "";
    if(segment === "Beverage"){sabor = "Soda" }
    if(segment === "Fruit"){sabor = "Apple" }
    if(segment === "Hygiene"){sabor = "Soap" }

    return sabor
}

module.exports = chooseProduct;


