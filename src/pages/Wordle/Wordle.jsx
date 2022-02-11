import { useState } from 'react'
import { GuessBoard } from './GuessBoard'
import { Keyboard } from './Keyboard'

const Wordle = () => {
  const [previousGuesses, setPreviousGuesses] = useState([])
  const [currentWord, setCurrenWord] = useState([])
  const [numGuess, setNumGuess] = useState(0)

  const onKeyClick = (letter) => {
    if (numGuess === 6) return

    if (letter === 'backspace') {
      // do not combine ifs so that if the user presses backspace with no words, nothing happens
      if (currentWord.length > 0) {
        setCurrenWord((word) => {
          const oldWord = [...word]
          oldWord.pop()
          return [...oldWord]
        })
      }
    } else if (letter === 'enter') {
      // same thing here as backspace
      if (currentWord.length === 5) {
        // TODO: submit
        setPreviousGuesses((guesses) => [...guesses, currentWord])
        setNumGuess((num) => num + 1)
        setCurrenWord([])
      }
    } else if (currentWord.length < 5) {
      setCurrenWord((word) => [...word, letter])
    }
  }

  return (
    <section className="p-3 h-screen bg-sky-lightest flex flex-col font-inter">
      <h1 className=" text-3xl font-bold">
        <span className="text-purple-light">un</span>
        wordle
      </h1>
      <div className="mx-auto mt-4">
        <GuessBoard
          currentWord={currentWord}
          numGuess={numGuess}
          previousGuesses={previousGuesses}
        />
      </div>
      <div className="mt-auto">
        <Keyboard onKeyClick={onKeyClick} />
      </div>
    </section>
  )
}

export { Wordle }
