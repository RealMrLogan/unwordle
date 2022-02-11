import { Children } from 'react'
import { KeyboardLetter } from './KeyboardLetter'
import { enter, backspace } from './vectors'

const qwertyAlphabet = 'qwertyuiop,asdfghjkl,zxcvbnm'

const Keyboard = ({ onKeyClick, disable, disabledKeys }) => (
  <div className="w-fit m-auto">
    {Children.toArray(qwertyAlphabet.split(',').map((row, rowIndex) => (
      <div className="flex gap-1 mb-1 justify-center">
        {Children.toArray([...row].map((letter, index) => (
          <>
            {rowIndex === 2 && index === 0 && <KeyboardLetter onKeyClick={onKeyClick} className="grow px-3" disabled={disable}><img key="enter" src={enter} alt="" /></KeyboardLetter>}

            <KeyboardLetter
              onKeyClick={onKeyClick}
              disabled={disabledKeys.includes(letter) || disable}
            >
              {letter}
            </KeyboardLetter>

            {rowIndex === 2 && index === row.length - 1 && <KeyboardLetter onKeyClick={onKeyClick} className="grow px-1.5" disabled={disable}><img key="backspace" src={backspace} alt="" /></KeyboardLetter>}
          </>
        )))}
      </div>
    )))}
  </div>
)

export { Keyboard }
