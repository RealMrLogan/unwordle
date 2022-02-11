import { Children } from 'react'
import { KeyboardLetter } from './KeyboardLetter'
import { enter, backspace } from './vectors'

const qwertyAlphabet = 'qwertyuiop,asdfghjkl,zxcvbnm'

const Keyboard = () => (
  <div className="w-fit m-auto">
    {Children.toArray(qwertyAlphabet.split(',').map((row, rowIndex) => (
      <div className="flex gap-1 mb-1 justify-center">
        {Children.toArray([...row].map((letter, index) => (
          <>
            {rowIndex === 2 && index === 0 && <KeyboardLetter className="grow px-2.5"><img src={enter} alt="" /></KeyboardLetter>}
            <KeyboardLetter>{letter}</KeyboardLetter>
            {rowIndex === 2 && index === row.length - 1 && <KeyboardLetter className="grow px-1.5"><img src={backspace} alt="" /></KeyboardLetter>}
          </>
        )))}
      </div>
    )))}
  </div>
)

export { Keyboard }
