export const fetchRandomFullName = async (): Promise<string> => {
  const response = await fetch('https://randommer.io/api/Name?nameType=fullname&quantity=1', {
    method: 'GET',
    headers: {
      'X-Api-Key': process.env.API_KEY as string,
    },
  });
  return (await response.json())[0];
};
