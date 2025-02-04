// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useAppDispatch, useAppSelector } from './redux/hooks'
import { increment, incrementByAmount, selectCount } from './redux/features/counter/counterSlice'
import Layout from './layout/Layout'

function App() {

  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  console.log(count);
  return (
    <>
      <Layout />
    </>
  )
}

export default App
