import { useEffect, useState } from 'react'
import { GuessBoard } from './GuessBoard'
import { Keyboard } from './Keyboard'
import { WORD_LENGTH, TYPES } from './CONSTANTS'
import fiveWordDictionary from '../dictionaries/dictionary_5.json'

const getLetterType = (letter, index) => {
  const wordToSolve = localStorage.getItem('unwordle.word')

  if ([...wordToSolve].some((control, i) => control === letter && i === index)) {
    return TYPES.RIGHT_LETTER_RIGHT_SPOT
  }
  if (wordToSolve.includes(letter)) {
    return TYPES.RIGHT_LETTER_WRONG_SPOT
  }
  return TYPES.WRONG_LETTER
}

/**
 * Writes a word to localStorage, or overwrites the existing one if the time has expired
 * @param {string} word The word to store
 * @param {number} timeToStore How long to store the word in MS
 */
const storeWordInLocalStorage = (word, timeToStore) => {
  const endTimeToStore = localStorage.getItem('unwordle.timeToStore.end')
  const currentMs = Date.now()
  // set a new word in storage if the old word is expired
  if (currentMs > endTimeToStore) {
    localStorage.setItem('unwordle.word', word)
    localStorage.setItem('unwordle.timeToStore.end', currentMs + timeToStore)
  }
}

const Wordle = () => {
  const [previousGuesses, setPreviousGuesses] = useState([])
  const [currentWord, setCurrenWord] = useState([])
  const [numGuess, setNumGuess] = useState(0)

  useEffect(() => {
    const wordToSolve = localStorage.getItem('unwordle.word')
    console.log('the word to solve is', wordToSolve)
  }, [])

  useEffect(() => {
    // choose a random word
    const randomIndex = Math.floor(Math.random() * fiveWordDictionary.length)
    const word = fiveWordDictionary[randomIndex]
    // store for an hour
    storeWordInLocalStorage(word, 1000 * 60 * 60)
  }, [])

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
      if (currentWord.length === WORD_LENGTH) {
        // TODO: make sure word is valid
        // TODO: what to do if the word is correct
        //  ^^ set numGuess to 6?
        // TODO: disable keys that are incorrect
        setPreviousGuesses(
          (guesses) => [...guesses, currentWord.map((obj, index) => {
            const letterType = getLetterType(obj.letter, index)
            return ({ ...obj, type: letterType })
          })],
        )
        setNumGuess((num) => num + 1)
        setCurrenWord([])
      }
    } else if (currentWord.length < WORD_LENGTH) {
      setCurrenWord((word) => [...word, { letter }])
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
