function capitalize(word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
}

function reverseString(word) {
    let array = new Array(word.length);
    let l = 0, r = word.length - 1;
    while(l <= r){
        array[l] = word.charAt(r);
        array[r] = word.charAt(l);
        l++;
        r--;
    }
    return array.join("");
}

class Calculator {
     static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        return a / b;
    }
}

function caesarCipher(word, shiftFactor) {
    let newWord = '';
    for(let i = 0; i < word.length; i++) {
        let character = word.charAt(i);
        let code = character.charCodeAt(0);
        let shiftedCode;
        if(character.toLowerCase() != character.toUpperCase()) {
            shiftedCode = code + shiftFactor;
            if(code <= 90) {
                if(shiftedCode > 90) {
                    let diff = shiftedCode - 90;
                    shiftedCode = 64 + diff;
                }
            } else {
                if(shiftedCode > 122) {
                    let diff = shiftedCode - 122;
                    shiftedCode = 96 + diff;
                }
            }
            newWord += String.fromCharCode(shiftedCode);
        } else {
            newWord += character;
        }
    }
    return newWord;
}

function analyzeArray(array) {
    const length = array.length;
    const average = array.reduce((prev, curr) => prev + curr, 0)/ length;
    const max = array.reduce((prev, curr) => Math.max(prev, curr), array[0]);
    const min = array.reduce((prev, curr) => Math.min(prev, curr), array[0]);

    return { 
        'average' : average,
        'min' : min,
        'max' : max,
        'length' : length,
    };
}

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };