/* calculadora*/ 
function calculadora(num1,num2,operador){
    if(operador === "+"){
        return num1 + num2;
    }else if (operador === "-"){
        return num1 - num2;
    }else if (operador === "*"){
        return num1 * num2;
    }else if(operador === "/"){
        if (num2!==0){
        return num1 / num2;
    }else{
        return "no se puede dividir por cero";
    }
}else{
    return "operador incorrecto";
}
}


/*producto con descuento "el ejercicio consta en hacer un descuento del 20% en un local superando los $1000 de compra*/

function ventaConDescuento(monto){
    if (monto>1000){
        return monto *0.8;
    }else{
        return monto;
    }
}

//calcular ventas "el ejercicio se basa en calcular las ventas de 2 productos"//

function ventas (productos1, productos2){
    const precioProducto1= 1000;
    const precioProducto2= 1500;

    return productos1 * precioProducto1 + productos2 * precioProducto2; 
}