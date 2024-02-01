import React from 'react'
import Form from './Form'
import History from './History'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

export default function Main() {
    const cash = useSelector(state => state.money.current)
    const money = useRef('')
  return (
    <main>
        <h1 ref={money} className='total'>{cash}<sup>$</sup></h1>
        <Form />
        <History />
    </main>
  )
}
