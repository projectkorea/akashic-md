import { useEffect, useRef } from 'react'

const Container = () => {
  const inputBox = useRef()
  useEffect(() => {
    const clickInterval = setInterval(() => {
      inputBox.current.click()
    }, 500)
    // return clearInterval(clickInterval)
  }, [])
  return (
    <>
      <input type='checkbox' style={{ width: '100px' }} ref={inputBox} />
    </>
  )
}

export default Container
