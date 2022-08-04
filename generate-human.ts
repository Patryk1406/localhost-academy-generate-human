import 'dotenv/config';
import { v4 as uuid } from 'uuid';
import { createEMail } from './utils/create-email';
import { fetchRandomFullName } from './utils/fetch-random-full-name';
import { generateRandomAge } from './utils/generate-random-age';
import { generateRandomPhoneNumber } from './utils/generate-random-phone-number';
import { drawRandomState } from './utils/states/draw-random-states';
import { extractStatesNames } from './utils/states/extract-states-name';
import { fetchStates } from './utils/states/fetch-states';

async function generateHuman() {
  const [firstName, lastName] = (await fetchRandomFullName()).split(' ');
  const statesInfo = await fetchStates();
  const statesNames = extractStatesNames(statesInfo);
  return {
    firstName,
    lastName,
    email: createEMail(firstName, lastName),
    age: generateRandomAge(18, 85),
    phoneNumber: generateRandomPhoneNumber(9),
    country: drawRandomState(statesNames),
    id: uuid(),
  };
}

(async () => {
  console.log(await generateHuman());
})();
