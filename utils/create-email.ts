export const createEMail = (
  firstName: string,
  lastName: string,
): string => `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
