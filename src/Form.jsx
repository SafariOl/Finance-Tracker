import React, { useState } from 'react'
import { GET_MONEY, WASTE_MONEY } from './moneyReducer'
import { useDispatch } from 'react-redux'


export default function Form() {
    const [purchase, setPurchase] = useState('')
    let [cash, setCash] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (status) => {
        if(purchase === '' || cash === '') return
        if(status === 'get') dispatch(GET_MONEY({id: Date.now(), purchase: purchase, cash: Number(cash), status: 'get'}))
        else dispatch(WASTE_MONEY({id: Date.now(), purchase: purchase, cash: -Number(cash), status: 'waste'}))
        setCash('')
        setPurchase('')
    }

  return (
    <form>
        <label>Purchase or Income</label>
        <input onChange={e => setPurchase(e.target.value)} value={purchase} type="text" />
        <input onChange={e => setCash(e.target.value)} value={cash} placeholder='0' type="number" />
        <div className="money-btns">
            <button type='button' className='btn income' onClick={() => handleSubmit('get')}>INCOME</button>
            <button type='button' className='btn purchase' onClick={() =>handleSubmit('waste') }>PURCHASE</button>
        </div>
    </form>
  )
}
