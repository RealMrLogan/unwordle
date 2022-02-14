import { Controller } from 'react-hook-form'

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

export { Input }
