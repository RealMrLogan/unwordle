import { Children, useState } from 'react'
import { Form, getWordsFromForm } from './Form'

const Solver = () => {
  const [results, setResults] = useState([])

  const onSubmit = async (data) => {
    const possibleWords = await getWordsFromForm(data)
    setResults(possibleWords)
  }

  return (
    <div className="m-auto w-96 pt-6 px-2">
      <h1 className=" text-5xl font-bold text-center">
        <span className="text-purple-light">un</span>
        wordle
      </h1>
      <h2 className="text-3xl font-bold text-sky-dark text-center mb-8">Solver</h2>

      <Form onSubmit={onSubmit} />

      <ul className="columns-3 mt-8">
        {Children.toArray(results.map((word) => <li className="p-1 text-center">{word}</li>))}
      </ul>
    </div>
  )
}

export { Solver }
