export const WORD_LENGTH = 5

export const TYPES = {
  UNDETERMINED: -1,
  WRONG_LETTER: 0,
  RIGHT_LETTER_WRONG_SPOT: 1,
  RIGHT_LETTER_RIGHT_SPOT: 2,
}

export const WORD = localStorage.getItem('unwordle.word')
