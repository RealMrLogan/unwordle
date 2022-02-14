import { useForm } from 'react-hook-form'
import { Input } from './Input'
import { Button } from './Button'

const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      numLetters: 5,
      startsWith: '',
      contains: '',
      endsWith: '',
      doesNotContain: '',
    },
  })

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Number of Letters"
        name="numLetters"
        type="number"
        control={control}
        placeholder="Placeholder Text"
      />
      <Input
        label="Starts With"
        name="startsWith"
        control={control}
        placeholder="Placeholder Text"
      />
      <Input
        label="Contains"
        name="contains"
        control={control}
        placeholder="Placeholder Text"
      />
      <Input
        label="Ends With"
        name="endsWith"
        control={control}
        placeholder="Placeholder Text"
      />
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
