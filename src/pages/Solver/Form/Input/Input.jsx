import { Children } from 'react'
import { Controller } from 'react-hook-form'
// import { WORD_LENGTH } from '../../../CONSTANTS'

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

// tailwind needs to have the complete rule in a template literal;
//    partials will get removed from the prod build
//    https://tailwindcss.com/docs/content-configuration#class-detection-in-depth
// const gridColumns = `grid-cols-${WORD_LENGTH}`
const MultiInput = ({
  label, caption, names, control, type = 'text', numInputs,
}) => (
  <div className="flex flex-col font-inter gap-1 mb-6">
    <label htmlFor="REPLACE_ME" className="font-bold">{label}</label>
    <div className="grid gap-0.5 grid-cols-5">
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
