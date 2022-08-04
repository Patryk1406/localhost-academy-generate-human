import { StatesApiResponse } from '../../types';

export const extractStatesNames = (statesApiResponse: StatesApiResponse): string[] => (
  Object.entries(
    statesApiResponse.data,
  )
    .map((keyValuePair) => keyValuePair[1].country));
