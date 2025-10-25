import { useState } from 'react'
import { useInterval } from 'ahooks'

export const useNow = () => {
  const [date, setDate] = useState<Date>(new Date())
  useInterval(() => setDate(new Date()), 1000, { immediate: true })
  return date
}
