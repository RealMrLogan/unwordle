import { Children } from 'react'
import { Controller } from 'react-hook-form'
import { WORD_LENGTH } from '../../../CONSTANTS'

const Input = ({
  label, caption, name, control, type = 'text', placeholder,
}) => (
  <div className="flex flex-col font-inter gap-1 mb-6">
    <label htmlFor="REPLACE_ME" className="font-bold">{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => <input className="rounded-xl border-2 border-sky-light p-3 focus-visible:outline-purple-base" type={type} placeholder={placeholder} {...field} />}
    />
    {caption && <span>{caption}</span>}
  </div>
)

const MultiInput = ({
  label, caption, names, control, type = 'text', numInputs,
}) => (
  <div className="flex flex-col font-inter gap-1 mb-6">
    <label htmlFor="REPLACE_ME" className="font-bold">{label}</label>
    <div className={`grid gap-0.5 grid-cols-${WORD_LENGTH}`}>
      {Children.toArray([...new Array(numInputs)].map((_, i) => (
        <Controller
          name={names[i]}
          control={control}
          render={({ field }) => <input className="rounded-xl border-2 border-sky-light p-3 focus-visible:outline-purple-base text-center" type={type} {...field} />}
        />
      )))}
    </div>

    {caption && <span>{caption}</span>}
  </div>
)

export { Input, MultiInput }
