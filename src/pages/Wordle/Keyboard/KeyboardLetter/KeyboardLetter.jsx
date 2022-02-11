const KeyboardLetter = ({ children, className, onKeyClick }) => {
  const onClick = () => {
    let letter = children
    if (typeof children !== 'string') {
      letter = children.key
    }
    onKeyClick(letter)
  }
  return (
    <button
      className={`text-xl uppercase text-purple-light border-2 border-purple-light rounded-lg w-8 h-12 grid place-content-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export { KeyboardLetter }
