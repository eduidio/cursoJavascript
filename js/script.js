 
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
console.log(calculadora(7,3,"+"));



