import React from 'react'
import { useSelector } from 'react-redux'

export default function History() {

    let history = useSelector(state => state.money.history)

  return (
    <div className='history'>
        {history.map(el => 
            <div key={el.id} className='history-block'>
                <h3>{el.purchase}</h3>
                {el.status === 'get' ? 
                    <div className="price green">{el.cash}<sup>$</sup></div>
                    :
                    <div className="price red">{el.cash}<sup>$</sup></div>
                }
            </div>
        )}
    </div>
  )
}
