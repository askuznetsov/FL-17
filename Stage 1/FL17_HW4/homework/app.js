function reverseNumber(num) {
    if (typeof(num) !== 'number') {
        return (false);
    }
    if (num === 0)
        return 0;
    if (num < 0) {
        var sign = true;
        num = num * -1;
    }
    let x = Math.pow(10, (num + '').length - 1);
    if (!sign)
        return (num % 10) * x + reverseNumber(Math.floor(num / 10));
    else
        return ((num % 10) * x + reverseNumber(Math.floor(num / 10))) * -1;
}

function forEach(arr, func) {
    for (el of arr) {
        func(el);
    }
}

function map(arr, func) {
    let mapArr = [];
    forEach(arr, (item) => {
        mapArr.push(func(item))
    })
    return (mapArr);
}

function filter(arr, func) {
    let filterArr = [];
    forEach(arr, (item) => {
        if (func(item)) {
            filterArr.push(item);
        }
    })
    return (filterArr);
}

function getAdultAppleLovers(data) {
    var filteredUsers = [];

    map(filter(data,
            (element) => element.age >= 18 && element.favoriteFruit === 'apple'),
        (element) => filteredUsers.push(element.name));

    return (filteredUsers);
}

function getKeys(obj) {
    var keys = [];
    var i = 0;

    for (key in obj) {
        keys[i] = key;
        i++;
    }

    return (keys);
}

function getValues(obj) {
    var values = [];
    var i = 0;

    for (key in obj) {
        values[i] = obj[key];
        i++;
    }

    return (values);
}

function showFormattedDate(dateObj) {
    const year = dateObj.getFullYear();
    const month = dateObj.toLocaleString('en', { month: "short" });
    const date = dateObj.getDate();
    let formattedDate = date + " of " + month + ", " + year;
    return `'It is ${formattedDate}'`;
}