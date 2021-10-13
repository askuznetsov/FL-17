function getAge(date) {
    let today = new Date();
    let birthDate = new Date(date);

    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || month === 0 && today.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
}

function getWeekDay(date) {
    return new Date(date).toLocaleString('en-us', { weekday: 'long' });
}

function getAmountDaysToNewYear() {
    let today = new Date();
    let year = today.getFullYear();

    let monthVariable = 11;
    let dayVariable = 31;
    let dayMilliseconds = 86400000;

    let newYearDate = new Date(year, monthVariable, dayVariable);

    let remainingDays = Math.ceil(
        (newYearDate.getTime() - today.getTime()) /
        dayMilliseconds
    );
    return remainingDays;
}

function getProgrammersDay(year) {
    let lVariable1 = 3;
    let lVariable2 = 25;
    let lVariable3 = 15;
    let lDay = 12;
    let month = 8;
    let leapYear = function(year) {
        return !(year & lVariable1 || !(year % lVariable2) && year & lVariable3);
    };

    let day = 13;
    if (leapYear(year) === true) {
        day = lDay;
    }
    let programmersDay = new Date(year, month, day);
    let weekDay = getWeekDay(programmersDay);
    let result = +day + ' Sep, ' + year + ' (' + weekDay + ')';
    return result;
}

function howFarIs(string) {
    let lowerString = string.toLowerCase();
    let arrayOfWeekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    let check = arrayOfWeekdays.includes(lowerString);
    if (!check) {
        return 'Invalid input';
    }

    let i = 0;
    let weekdayNumber;
    let result;
    let today = new Date();

    while (arrayOfWeekdays[i]) {
        if (lowerString === arrayOfWeekdays[i]) {
            weekdayNumber = i;
        }
        i++;
    }

    if (today.getDay() < weekdayNumber) {
        result = weekdayNumber - today.getDay();
    } else if (today.getDay() > weekdayNumber) {
        result = weekdayNumber + today.getDay() + 1;
    } else {
        result = 0;
    }

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    if (result === 0) {
        return 'Hey, today is ' + capitalizeFirstLetter(lowerString) + ' =)';
    } else {
        return `It's ` + result + ` day(s) left till ` + capitalizeFirstLetter(lowerString) + ``;
    }
}

function isValidIdentifier(str) {
    return /^(^\D)+[\w$]+$/g.test(str);
}

function capitalize(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}

function isValidAudioFile(str) {
    return /^[a-z]+\.(flac|mp3|alac|aac)$/i.test(str);
}

function getHexadecimalColors(str) {
    if (str.match(/#([a-f0-9]{3}){1,2}\b/gi) === null) {
        return [];
    } else {
        return str.match(/#([a-f0-9]{3}){1,2}\b/gi);
    }
}

function isValidPassword(str) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(str);
}

function addThousandsSeparators(strOrNum) {
    return strOrNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getAllUrlsFromText(s) {
    try {
        let urlRegex = /(https?:\/\/[^\s]+)/g;
        let links = s.match(urlRegex);
        if (links === null) {
            return [];
        } else {
            return links;
        }
    } catch (error) {
        error.message = 'error';
        return error.message;
    }
}