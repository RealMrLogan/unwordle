const LetterGuess = ({ children, type = -1 }) => {
  let classes = 'w-14 h-14 rounded-lg text-4xl uppercase grid place-content-center font-bold'
  switch (type) {
    case 0: // wrong letter
      classes += ' bg-ink-dark text-sky-dark'
      break
    case 1: // right letter, wrong spot
      classes += ' bg-yellow-darkest text-yellow-base'
      break
    case 2: // right letter, right spot
      classes += ' bg-green-darkest text-green-light'
      break
    case -1: // either unguessed or currently guessing
    default:
      classes += ' border-2 border-sky-dark text-purple-base'
  }
  return <div className={classes}>{children}</div>
}

export { LetterGuess }
