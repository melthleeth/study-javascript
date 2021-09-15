// Dates & Times
const now = new Date();
console.log(now);
console.log(typeof now);

// year, months, day, times
console.log("getFullYear", now.getFullYear());
console.log("getMonth", now.getMonth());
console.log("getDate", now.getDate());
console.log("getDay", now.getDay());
console.log("getHours", now.getHours());
console.log("getMinutes", now.getMinutes());
console.log("getSeconds", now.getSeconds());

// timestamps
console.log("timestamp", now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// data object보다 timestamp를 쓰는게 편하다
const before = new Date("September 13 2021 16:36:23");

console.log(now.getTime(), before.getTime());
const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(mins, hours, days);

console.log(`The blog was written ${days} days ago`);

// converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp)); // 오우 신기!
