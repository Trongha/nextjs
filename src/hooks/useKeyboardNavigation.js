import { useEffect } from 'react'
import './styles.css'

// This hook detect keyboard focus indicator to not show outline for mouse users
// Inspired by https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
const useKeyboardNavigation = () => {
  useEffect(() => {
    const keyboardFocusedClassName = 'navigation-with-keyboard'

    const handleOutlineStyles = e => {
      if (e.type === 'keydown' && e.key === 'Tab') {
        document.body.classList.add(keyboardFocusedClassName)
      }

      if (e.type === 'mousedown') {
        document.body.classList.remove(keyboardFocusedClassName)
      }
    }
    document.addEventListener('keydown', handleOutlineStyles)
    document.addEventListener('mousedown', handleOutlineStyles)

    return () => {
      document.body.classList.remove(keyboardFocusedClassName)
      document.removeEventListener('keydown', handleOutlineStyles)
      document.removeEventListener('mousedown', handleOutlineStyles)
    }
  }, [])
}

export default useKeyboardNavigation
