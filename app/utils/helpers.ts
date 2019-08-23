export const getFirstWord = (words: string) => {
  return words.split(' ')[0]
}

export const getMatchProgress = (elapsed: string) => {
  return Number(elapsed) / 90
}
