// Your code goes here

function isEquals(num1, num2) {
    return num1 === num2;
}

function isBigger(num1, num2) {
    return num1 >= num2;
}

function storeNames(...arg) {
    return arg;
}

function getDifference(a, b) {
    if (a < b) {
        return b - a;
    } else {
        return a - b;
    }
}

function negativeCount(arr) {
    let i = 0;
    let count = 0;

    while (i < arr.length) {
        if (arr[i] < 0) {
            count++;
        }
        i++;
    }
    return count;
}

function letterCount(letter1, letter2) {
    let re = new RegExp(letter2, 'g');
    let rez = letter1.match(re);
    if (rez === null) {
        return 0;
    } else {
        return rez.length;
    }
}

function countPoints(arr) {
    let i = 0;
    let j = 0;
    let newArray = [];
    let counter = 0;
    let scoresForWin = 3;
    let scoresForDraw = 1;

    while (arr[j]) {
        while (arr[i]) {
            newArray = arr[i].split(':');
            if (+newArray[0] > +newArray[1]) {
                counter += scoresForWin;
            } else if (+newArray[0] === +newArray[1]) {
                counter += scoresForDraw;
            }
            i++;
        }
        j++;
    }
    return counter;
}