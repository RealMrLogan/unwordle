import { Keyboard } from './Keyboard'

const Wordle = () => (
  <section className="p-3 h-screen bg-sky-lightest flex flex-col">
    <h1 className="font-inter text-3xl font-bold">
      <span className="text-purple-light">un</span>
      wordle
    </h1>
    <div className="mt-auto">
      <Keyboard />
    </div>
  </section>
)

export { Wordle }
