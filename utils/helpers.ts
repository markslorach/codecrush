export function getDay() {
    let day = new Date().getDay();
    day = ((day + 6) % 7) + 1;
    return day;
  }

  export function capitaliseString(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1) 
  }
  