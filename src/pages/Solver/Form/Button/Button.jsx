const Button = ({ children, onClick, type }) => (
  <button onClick={onClick} type={type} className="px-6 py-3 bg-purple-base font-inter text-sky-lightest rounded-full">{children}</button>
)

export { Button }
