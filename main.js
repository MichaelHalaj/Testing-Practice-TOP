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

export { capitalize, reverseString, Calculator };