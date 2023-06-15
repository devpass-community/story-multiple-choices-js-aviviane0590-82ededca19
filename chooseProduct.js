function chooseProduct(segment) {    
    const segmento = segment.toLowerCase()
    let sabor;
    if(segmento === "Beverage") sabor = "Soda" 
    if(segmento === "Fruit") sabor = "Apple"
    if(segmento === "Hygiene")sabor = "Soap"    
    
    return sabor
}

module.exports = chooseProduct;


