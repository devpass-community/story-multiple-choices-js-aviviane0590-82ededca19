function chooseProduct(segment) {    
    const segmento = segment.toLowerCase()
    if(segmento === "bebida") return "Soda" 
    if(segmento === "fruta") return "Apple"
    if(segmento === "higiene")return "Soap"
    
}

module.exports = chooseProduct;


