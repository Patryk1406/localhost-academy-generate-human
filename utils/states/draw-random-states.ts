export function drawRandomState(statesNames: string[]) {
  return statesNames[Math.floor(Math.random() * statesNames.length)];
}
