import { TYPES } from '../../../CONSTANTS'

const LetterGuess = ({ children, type = -1 }) => {
  let classes = 'w-14 h-14 rounded-lg text-4xl uppercase grid place-content-center font-bold'
  switch (type) {
    case TYPES.WRONG_LETTER:
      classes += ' bg-ink-dark text-sky-dark'
      break
    case TYPES.RIGHT_LETTER_WRONG_SPOT:
      classes += ' bg-yellow-darkest text-yellow-base'
      break
    case TYPES.RIGHT_LETTER_RIGHT_SPOT:
      classes += ' bg-green-darkest text-green-light'
      break
    case TYPES.UNDETERMINED:
    default:
      classes += ' border-2 border-sky-dark text-purple-base'
  }
  return <div className={classes}>{children}</div>
}

export { LetterGuess }
