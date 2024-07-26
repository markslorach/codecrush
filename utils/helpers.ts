export function getDay() {
    let day = new Date().getDay();
    day = ((day + 6) % 7) + 1;
    return day;
  }
  