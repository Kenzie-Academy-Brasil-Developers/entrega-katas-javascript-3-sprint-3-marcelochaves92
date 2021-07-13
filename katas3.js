const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(valor){
    let newElement = document.createElement('p');
    let newText = document.createTextNode('');
    newElement.appendChild(newText);
    let destination = document.getElementsByClassName('body');
    destination.appendChild(newElement);
}


function kata1() {
    let result = [];
    for(let i = 1; i <= 25; i++){
        result.push(i);
    }
    return result;
}
console.log(kata1())


function kata2() {
    let result = [];
    for(let i = 25; i > 0; i--){
        result.push(i);
    }
    return result;
}
console.log(kata2())

function kata3() {
    let result = [];
    for(let i = -1; i >= -25; i--){
        result.push(i)
    }
    return result;
}
console.log(kata3())

function kata4() {
    let result = [];
    for(let i = -25; i <= -1; i++){
        result.push(i);
    }
    return result;
}
console.log(kata4())

function kata5() {
    let result = [];
    for(let i = 25; i >= -25; i--){
        if(i % 2 !== 0){
            result.push(i);
        }
    }
    return result;
}
console.log(kata5())

function kata6() {
    let result = [];
    for(let i = 3; i < 100; i++){
        if(i % 3 === 0){
            result.push(i);
        }
    }
    return result;
}
console.log(kata6())

function kata7() {
    let result = [];
    for(let i = 7; i < 100; i++){
        if(i % 7 === 0){
            result.push(i);
        }
    }
    return result;
}
console.log(kata7())

function kata8() {
    let result = [];
    for(let i = 100; i > 0; i--){
        if(i % 3 === 0 || i % 7 === 0){
            result.push(i);
        }
    }
    return result;
}
console.log(kata8())

function kata9() {
    let result = [];
    for(let i = 1; i < 100; i++){
        if(i % 2 !== 0 && i % 5 === 0){
            result.push(i);
        }
    }
    return result;
}
console.log(kata9())

function kata10() {
    console.log(sampleArray)
}
console.log(kata10())

function kata11() {
    let result = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            result.push(sampleArray[i]);
        }
    }
    return result;
}
console.log(kata11())

function kata12() {
    let result = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 !== 0){
            result.push(sampleArray[i]);
        }
    }
    return result;
}
console.log(kata12())

function kata13() {
    let result = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            result.push(sampleArray[i]);
        }
    }
    return result;
}
console.log(kata13())

function kata14() {
    let result = [];
    for(let i = 0; i < sampleArray.length; i++){
        result[i] = sampleArray[i] * sampleArray[i];
    }
    return result;
}
console.log(kata14())

function kata15() {
    let soma = 0;
    for(let i = 1; i <= 20; i++){
        soma += i;
    }
    return soma
}
console.log(kata15())

function kata16() {
    let soma = 0;
    for(let i = 0; i < sampleArray.length; i++){
        soma += sampleArray[i];
    }
    return soma;
}
console.log(kata16())

function kata17() {
    let menor = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < menor){
            menor = sampleArray[i];
        }
    }
    return menor
}
console.log(kata17())

function kata18() {
    let maior = 0;
    for (let i = 0; i < sampleArray.length; i++) {
       if (sampleArray[i] > maior) {
          maior = sampleArray[i];
        }
    }
    return maior
}
console.log(kata18())



/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
