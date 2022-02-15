import { Children } from 'react'
import { LetterGuess } from './LetterGuess'
import { WORD_LENGTH } from '../../CONSTANTS'

const GuessBoard = ({ currentWord, numGuess, previousGuesses }) => (
  <>
    {Children.toArray([...new Array(6)].map((_, rowIndex) => (
      <div className="flex gap-1.5 mb-1.5">
        {Children.toArray([...new Array(WORD_LENGTH)].map((__, colIndex) => (
          <LetterGuess type={previousGuesses[rowIndex]?.[colIndex]?.type}>
            {/* show previous guesses */}
            {rowIndex < numGuess && previousGuesses[rowIndex][colIndex]?.letter}
            {/* show current guess */}
            {rowIndex === numGuess && (currentWord[colIndex]?.letter || '')}
          </LetterGuess>
        )))}
      </div>
    )))}
  </>
)

export { GuessBoard }
