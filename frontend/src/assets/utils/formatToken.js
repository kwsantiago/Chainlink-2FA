import { token } from "./smartContract"

async function genToken(){
    var newToken = await token();
    return newToken.join('').replace(/(...)(.*)/, '$1 $2');
}

export { genToken };
