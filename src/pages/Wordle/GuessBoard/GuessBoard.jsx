import { Children } from 'react'
import { LetterGuess } from './LetterGuess'

const GuessBoard = ({ currentWord, numGuess, previousGuesses }) => (
  <>
    {Children.toArray([...new Array(6)].map((_, rowIndex) => (
      <div className="flex gap-1.5 mb-1.5">
        {Children.toArray([...new Array(5)].map((__, colIndex) => (
          <LetterGuess>
            {/* show previous guesses */}
            {rowIndex < numGuess && previousGuesses[rowIndex][colIndex]}
            {/* show current guess */}
            {rowIndex === numGuess && (currentWord[colIndex] || '')}
          </LetterGuess>
        )))}
      </div>
    )))}
  </>
)

export { GuessBoard }
