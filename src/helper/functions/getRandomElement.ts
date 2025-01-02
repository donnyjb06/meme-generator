import memeData from "@helper/interfaces/memeData";

export const getRandomItem = (array: memeData[]): memeData => {
  const randomIndex: number = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

