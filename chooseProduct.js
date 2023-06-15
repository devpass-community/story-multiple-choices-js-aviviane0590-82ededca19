function chooseProduct(segment) {    
    const segmento = segment.toLowerCase()
    let sabor;
    if(segmento === "beverage") sabor = "Soda" 
    if(segmento === "fruit") sabor = "Apple"
    if(segmento === "hygiene")sabor = "Soap"   
    
    return sabor;
    
}


module.exports = chooseProduct;


