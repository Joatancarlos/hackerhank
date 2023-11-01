function timeConversion(s) {
  const period = s.substr(8);
  let hour = Number(s.substr(0, 2));
  const minAndSec = s.substr(3, 5)
  if(period === 'PM') {
    hour >= 12 ? hour : hour += 12;
  } else {
    hour >= 12 ? hour -= 12 : hour;
  }
  console.log(`${hour < 10 ? `0${hour}` : hour}:${minAndSec}`)
  return `${hour < 10 ? `0${hour}` : hour}:${minAndSec}`;
}

timeConversion('12:40:03PM');