import { vrfNumber } from "./smartContract"

function formatVRF(vrfNum){
    const result = vrfNum % 100000000;
    if(result.length == 6)
        return result;
    const arrayOfDigits = Array.from(String(result), Number);
    while(arrayOfDigits.length > 7)
        arrayOfDigits.pop();
    arrayOfDigits[Math.floor(arrayOfDigits.length / 2)] = ' ';
    return arrayOfDigits;
}

async function genToken(){
    //var vrfNum = await vrfNumber();
    var vrfNum = 92271226132278005394432530392718590936766961242647985129799698783821279431819;
    return formatVRF(vrfNum);
}

export { genToken };
