import React, { useEffect } from 'react'

interface NarradorProps {
  isActive: boolean
}

const Narrador: React.FC<NarradorProps> = ({ isActive }) => {
  useEffect(() => {
    const synth = window.speechSynthesis
    if (!synth) {
      console.warn('Web Speech API not supported')
      return
    }

    const narrateElement = (element: HTMLElement) => {
      const textToNarrate =
        element.getAttribute('data-narration') || element.innerText
      const utterance = new SpeechSynthesisUtterance(textToNarrate)
      synth.cancel()
      synth.speak(utterance)
    }

    const handleFocusOrHover = (event: Event) => {
      if (!isActive) return
      const target = event.target as HTMLElement
      narrateElement(target)
    }

    const elementsToRead = document.querySelectorAll(
      'h1, h2, h3, h4, p, a, button, .narrable-icon'
    )
    elementsToRead.forEach((element) => {
      element.addEventListener('focus', handleFocusOrHover)
      element.addEventListener('mouseenter', handleFocusOrHover)
    })

    return () => {
      elementsToRead.forEach((element) => {
        element.removeEventListener('focus', handleFocusOrHover)
        element.removeEventListener('mouseenter', handleFocusOrHover)
      })
      synth.cancel()
    }
  }, [isActive])

  return null
}

export default Narrador
