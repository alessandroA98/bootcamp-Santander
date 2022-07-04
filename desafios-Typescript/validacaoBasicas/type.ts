type input = number | string;

function somarValores(input1:input, input2:input){
    if(typeof input1 === 'string' || input2 === 'string' ){
        return input1.toString() + input2.toString()
    } else {
        return input1 + input1
    } 
}
console.log(somarValores(5, 9))
console.log(somarValores('oi',9))
console.log(somarValores('oi', 'string'))

// ~~~~~~ metodo1 ~~~~~~

// function somarValores(input1:number | string, input2:string | number){
// if(typeof input1 === 'string' || typeof input2 === 'string'){
//     return input1.toString() + input1.toString();
// }else {
//     return(input1 + input2)
// }
// }