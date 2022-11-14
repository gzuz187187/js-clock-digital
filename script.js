let yearHtml = document.getElementById("year");
let dateHtml = document.getElementById("date");
let timeHtml = document.getElementById("time");
let hoursHtml = document.getElementById("hours");
let minutesHtml = document.getElementById("minutes");
let secondsHtml = document.getElementById("seconds");

let monthNames = {0: "January",
                  1: "February",
                  2: "March",
                  3: "April",
                  4: "May",
                  5: "June",
                  6: "July",
                  7: "August",
                  8: "September",
                  9: "October",
                  10: "November",
                  11: "December"}

let displayTime = () => {
    setInterval(() => {
        let tempDate = createNewDate();

        yearHtml.innerHTML = tempDate.year;
        dateHtml.innerHTML = tempDate.date;
        hoursHtml.innerHTML = tempDate.hours;
        minutesHtml.innerHTML = tempDate.minutes;
        secondsHtml.innerHTML = tempDate.seconds;

    }, 250);
}

let createNewDate = () => {
    let currentDate = new Date();

    let dateObj = {
        seconds: formatTime(currentDate.getSeconds()),
        minutes: formatTime(currentDate.getMinutes()),
        hours: formatTime(currentDate.getHours()),
        date: `${formatMonth(currentDate.getMonth())} ${formatDay(currentDate.getDate())}`,
        year: String(currentDate.getFullYear())
    }

    // dateObj[seconds] = formatTime(currentDate.getSeconds());
    // dateObj[minutes] = formatTime(currentDate.getMinutes());
    // dateObj[hours] = formatTime(currentDate.getHours());
    // // dateObj[day] = formatDay(currentDate.getDate());
    // // dateObj[month] = formatMonth(currentDate.getMonth());
    // dateObj[fullDate] = `${formatDay(currentDate.getDate())} ${formatMonth(currentDate.getMonth())}`;
    // dateObj[year] = String(currentDate.getFullYear());

    return dateObj;
}

let formatTime = (n) => {
    let nStr = String(n);

    if (nStr.length == 1) { return `0${nStr}`; }

    return nStr;
}

let formatDay = (day) => {
    let dayStr = String(day);

    if (dayStr.length == 1) { dayStr = `0${dayStr}`}

    if (dayStr == "01" || dayStr == "21" || dayStr == "31") { return `${dayStr}st`; }
    if (dayStr == "02" || dayStr == "22") { return `${dayStr}nd`; }
    if (dayStr == "03" || dayStr == "23") { return `${dayStr}rd`; }

    return `${dayStr}th`;
}

let formatMonth = (month) => {
    if (month == 0) { return monthNames[0] }
    if (month == 1) { return monthNames[1] }
    if (month == 2) { return monthNames[2] }
    if (month == 3) { return monthNames[3] }
    if (month == 4) { return monthNames[4] }
    if (month == 5) { return monthNames[5] }
    if (month == 6) { return monthNames[6] }
    if (month == 7) { return monthNames[7] }
    if (month == 8) { return monthNames[8] }
    if (month == 9) { return monthNames[9] }
    if (month == 10) { return monthNames[10] }
    if (month ==110) { return monthNames[11] }
}

displayTime();