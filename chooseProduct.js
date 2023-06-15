function chooseProduct(segment) {    
    const segmento = segment.toLowerCase()
    let sabor;
    if(segmento === "bebida") sabor = "Soda" 
    if(segmento === "fruta") sabor = "Apple"
    if(segmento === "higiene")sabor = "Soap"    
    
    console.log(sabor)
}

module.exports = chooseProduct;


