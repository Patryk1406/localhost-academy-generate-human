import { StatesApiResponse } from '../../types';

export const fetchStates = async (): Promise<StatesApiResponse> => {
  const response = await fetch(
    'https://api.first.org/data/v1/countries',
    {
      method: 'GET',
    },
  );
  return response.json();
};
