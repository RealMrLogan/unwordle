import { useForm } from 'react-hook-form'
import { Input, MultiInput } from './Input'
import { Button } from './Button'
import { WORD_LENGTH } from '../../CONSTANTS'

const isIncludes = (word, array) => array.every(
  (letter, i) => (letter ? word[i] === letter.toLowerCase() : true),
)
const isContains = (str1, str2) => str2.split('').every((letter) => str1.includes(letter.toLowerCase()))
const isNotContains = (str1, str2) => str2.split('').every((letter) => !str1.includes(letter.toLowerCase()))

export const getWordsFromForm = async (data) => {
  const {
    numLetters, contains, doesNotContain, ...includesInputs
  } = data
  const includes = Object.entries(includesInputs).map(([, value]) => value)

  const moduleValues = Object.values(await import(`../../dictionaries/dictionary_${numLetters}.json`))
  const dictionary = moduleValues.splice(0, moduleValues.length - 2)

  // search the dictionary
  const possibleWords = dictionary
    .filter((word) => {
      const doesInclude = includes.length ? isIncludes(word, includes) : true
      if (!doesInclude) return false

      const doesContain = contains ? isContains(word, contains) : true
      if (!doesContain) return false

      const isDoesNotContain = doesNotContain ? isNotContains(word, doesNotContain) : true
      if (!isDoesNotContain) return false
      return true
    })
  return (possibleWords)
}

const Form = ({ onSubmit }) => {
  const includesArray = [...new Array(WORD_LENGTH)].map((_, i) => [`includes_${i}`, ''])
  const includesDefaults = Object.fromEntries(includesArray)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      numLetters: WORD_LENGTH,
      ...includesDefaults,
      contains: '',
      doesNotContain: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Number of Letters"
        name="numLetters"
        type="number"
        control={control}
        placeholder="Placeholder Text"
      />
      {/* <Input
        label="Starts With"
        name="startsWith"
        control={control}
        placeholder="Placeholder Text"
      /> */}
      <MultiInput
        label="Includes"
        names={includesArray.map(([name]) => name)}
        control={control}
        numInputs={WORD_LENGTH}
      />
      <Input
        label="Contains"
        name="contains"
        control={control}
        placeholder="Placeholder Text"
      />
      {/* <Input
        label="Ends With"
        name="endsWith"
        control={control}
        placeholder="Placeholder Text"
      /> */}
      <Input
        label="Does Not Contain"
        name="doesNotContain"
        control={control}
        placeholder="Placeholder Text"
      />

      <div className="m-auto w-fit">
        <Button type="submit">Get Words</Button>
      </div>
    </form>
  )
}

export { Form }
