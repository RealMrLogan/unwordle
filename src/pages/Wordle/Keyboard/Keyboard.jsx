import { Children } from 'react'
import { KeyboardLetter } from './KeyboardLetter'

const qwertyAlphabet = 'qwertyuiop,asdfghjkl,zxcvbnm'

const Keyboard = () => (
  <div>
    {Children.toArray(qwertyAlphabet.split(',').map((row, rowIndex) => (
      <div className="flex gap-1.5 mb-1.5 justify-center">
        {Children.toArray([...row].map((letter, index) => (
          <>
            {rowIndex === 2 && index === 0 && 'enter'}
            <KeyboardLetter>{letter}</KeyboardLetter>
            {rowIndex === 2 && index === row.length - 1 && 'delete'}
          </>
        )))}
      </div>
    )))}
  </div>
)

export { Keyboard }
