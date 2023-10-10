import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Box from './components/Box'
import Box2 from './components/Box2'

function App() {

  return (
    <>
      <h1>Hello I am learning typescript!</h1>
      <Box heading='In the box' />
      <Box2 message='come here to learn' count={23} />
    </>
  )
}

export default App
