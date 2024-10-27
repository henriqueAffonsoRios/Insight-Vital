import React, { useEffect, useRef, useState } from 'react'

interface NarradorProps {
  isActive: boolean
  language: string
}

const Narrador: React.FC<NarradorProps> = ({ isActive, language }) => {
  const previousIsActive = useRef(isActive)
  const synth = window.speechSynthesis
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])

  useEffect(() => {
    if (!synth) {
      console.warn('Web Speech API not supported')
      return
    }

    const loadVoices = () => {
      const availableVoices = synth.getVoices()
      setVoices(availableVoices)
    }

    if (voices.length === 0) {
      loadVoices()
      synth.addEventListener('voiceschanged', loadVoices)
    }

    const getVoice = (language: string): SpeechSynthesisVoice | null => {
      return voices.find((voice) => voice.lang.startsWith(language)) || null
    }

    const activationStatus = (message: string) => {
      const utterance = new SpeechSynthesisUtterance(message)
      utterance.voice = getVoice(language)
      synth.cancel()
      synth.speak(utterance)
    }

    if (previousIsActive.current !== isActive) {
      const message = isActive
        ? language === 'en'
          ? 'Narrator mode activated'
          : 'Modo narrador ativado'
        : language === 'en'
        ? 'Narrator mode deactivated'
        : 'Modo narrador desativado'
      activationStatus(message)
      previousIsActive.current = isActive
    }

    const narrateElement = (element: HTMLElement) => {
      const textToNarrate =
        element.getAttribute('data-narration') || element.innerText
      const utterance = new SpeechSynthesisUtterance(textToNarrate)
      utterance.voice = getVoice(language)
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
      synth.removeEventListener('voiceschanged', loadVoices)
    }
  })

  return null
}

export default Narrador
