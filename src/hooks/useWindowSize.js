import { useEffect, useState } from 'react'
import ExecutionEnvironment from './ExecutionEnvironment'

const desktopThresholdWidth = 996

const windowSizes = {
  desktop: 'desktop',
  mobile: 'mobile',
}

const useWindowSize = () => {
  const isClient = ExecutionEnvironment.canUseDOM

  const getSize = () => {
    if (!isClient) {
      return undefined
    }

    return window.innerWidth > desktopThresholdWidth
      ? windowSizes.desktop
      : windowSizes.mobile
  }
  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return undefined
    }

    const handleResize = () => {
      setWindowSize(getSize)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowSize
}

export { windowSizes }
export default useWindowSize
