const KeyboardLetter = ({
  children, className, onKeyClick, disabled,
}) => {
  const disabledClasses = disabled ? 'bg-ink-dark text-sky-dark border-0' : ''
  const onClick = () => {
    let letter = children
    if (typeof children !== 'string') {
      letter = children.key
    }
    onKeyClick(letter)
  }

  return (
    <button
      disabled={disabled}
      className={`text-xl uppercase text-purple-light border-2 border-purple-light rounded-lg w-8 h-12 grid place-content-center ${className} ${disabledClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export { KeyboardLetter }
