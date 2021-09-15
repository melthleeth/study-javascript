const now2 = new Date();
// console.log(dateFns.isToday(now2));

//formatting options
console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMMM"));
console.log(dateFns.format(now, "dddd"));
console.log(dateFns.format(now, "Do"));
console.log(dateFns.format(now, "dddd, Do, MMMM, YYYY"));

// comparing dates
const before2 = new Date("June 9 2021 17:00:00");
console.log(dateFns.distanceInWords(now2, before2, { addSuffix: true }));
