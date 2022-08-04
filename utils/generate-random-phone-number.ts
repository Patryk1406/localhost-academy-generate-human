export function generateRandomPhoneNumber(length: number) {
  let phoneNumber = '';
  for (let i = 0; i < length; i++) {
    phoneNumber += Math.floor(Math.random() * 10);
  }
  return phoneNumber;
}
