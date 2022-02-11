import { useEffect, useState } from 'react'

const Snackbar = ({ message, resetMessage }) => {
  const [animationClasses, setAnimationClasses] = useState('opacity-0')
  useEffect(() => {
    if (!message) return
    // open animation
    setAnimationClasses('animate-fade-in opacity-100')
    // after 3 seconds, close animation
    setTimeout(() => {
      setAnimationClasses('animate-fade-out opacity-0')
      // this make the useEffect run as expected
      setTimeout(() => resetMessage(), 500)
    }, 3000)
  }, [message])

  return <div className={`absolute top-4 right-4 bg-ink-darkest w-72 p-4 rounded-lg ${animationClasses}`}><p className="text-sky-lightest">{message}</p></div>
}

export { Snackbar }
