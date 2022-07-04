"use strict";
let valorN;
valorN = true;
let valorString = 'teste';
valorString = valorN; //mesmo valorN sendo um boleano e se fosse sem o valorn ele nao aceitaria um valor boleano. no caso isso é meio que uma falha.
let valorString2 = 'textao';
valorString2 += valorN;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
