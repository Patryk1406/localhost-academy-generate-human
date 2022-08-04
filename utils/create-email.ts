export function createEMail(firstName: string, lastName: string) {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
}
