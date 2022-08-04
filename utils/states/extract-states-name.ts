import { StatesApiResponse } from '../../types';

export function extractStatesNames(statesApiResponse: StatesApiResponse) {
  return Object.entries(statesApiResponse.data)
    .map((keyValuePair) => keyValuePair[1].country);
}
