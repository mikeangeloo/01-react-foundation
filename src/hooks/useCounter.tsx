import { useState } from 'react'

interface Options {
  initialValue: number;
}

export const useCounter = ({initialValue}: Options) => {

  const [count, setCount] = useState<number>(initialValue)

  const increaseBy = (value: number) => {
    const newValue = count + value
    if(newValue < 0) return
    setCount(count + value)
  }
  
  return {
    count,
    increaseBy,
  }
}
