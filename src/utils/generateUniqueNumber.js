const arr = [];

export default function generateRandomNumber() {
  let found;
  do {
    let uniqueNumber = Math.floor(Math.random() * 1000);
    if (arr.includes(uniqueNumber)) {
      found = true;
    } else {
      found = false;
      arr.push(uniqueNumber);
      return uniqueNumber;
    }
  } while (found);
}
