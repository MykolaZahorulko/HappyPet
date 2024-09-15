import { useSelector } from 'react-redux'

export const useSelectorValue = (selector) => {
  const value = useSelector(selector)
  return { value }
}