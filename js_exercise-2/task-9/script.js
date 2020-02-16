const timeStamp = document.querySelector('.timeStamp');
const outputBtn = document.querySelector('.outputBtn');
const output = document.querySelector('.output');

outputBtn.addEventListener('click', () => {
  let a = new Date(+timeStamp.value * 1000)
  output.innerHTML = a.toDateString();
})

// Created timeStamp by own

// let start = {
//   day: 4,
//   date: 1,
//   month: 0,
//   year: 1970,
//   hour: 0,
//   min: 0,
//   sec: 0
// }

// function convert(time) {
//   for (let i = 1; i <= time; i++) {
//     changeSec();
//   }
//   return start;
// }

// function changeSec() {
//   start.sec++;
//   if (start.sec === 60) {
//     start.sec = 0;
//     changeMin();
//   }
// }

// function changeMin() {
//   start.min++;
//   if (start.min === 60) {
//     start.min = 0;
//     changeHour();
//   }
// }

// function changeHour() {
//   start.hour++;
//   if (start.hour === 24) {
//     start.hour = 0;
//     changeDay();
//     changeDate();
//   }
// }

// function changeDay() {
//   start.day++;
//   if (start.day === 7) {
//     start.day = 0;
//   }
// }

// function changeDate() {
//   start.date++;
//   if (start.month === 0 || start.month == 2 || start.month == 4 || start.month == 6 || start.month == 7 || start.month == 9 || start.month == 11) {
//     if (start.date === 32) {
//       start.date = 1;
//       changeMonth();
//     }
//   } else if (start.month === 1) {
//     let leapYear = checkLeapYear(start.year);
//     if (leapYear) {
//       if (start.date === 30) {
//         start.date = 1;
//         changeMonth();
//       }
//     } else {
//       if (start.date === 29) {
//         start.date = 1;
//         changeMonth();
//       }
//     }
//   } else {
//     if (start.date === 31) {
//       start.date = 1;
//       changeMonth();
//     }
//   }
// }

// function changeMonth() {
//   start.month++;
//   if (start.month === 12) {
//     start.month = 0;
//     changeYear();
//   }
// }

// function changeYear() {
//   start.year++;
// }

// function checkLeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if ((year % 4 == 0) && (year % 100 !== 0)) {
//     return true
//   } else {
//     return false
//   }
// }