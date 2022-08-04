export const drawRandomState = (statesNames: string[]): string => statesNames[Math.floor(
  Math.random() * statesNames.length,
)];
