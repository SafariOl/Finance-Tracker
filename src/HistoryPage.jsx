import React from 'react'
import { useSelector } from 'react-redux'

export default function HistoryPage() {
    const history = useSelector(state => state.money.history)

    const clearhistory = () => {
        localStorage.removeItem('history')
        window.location.reload()
    }

  return (
    <div className='history-page'>
        <button onClick={clearhistory} className='clear'>CLEAR HISTORY</button>
        <h1>HISTORY</h1>
        <div className="history-page__content">
            {history.length === 0 ? <h3 className='empty'>Empty...</h3> : null}
            {history.map(el => 
                <div className='history-page__block' key={el.id}>
                    <h2>{el.purchase}</h2>
                    {el.status === 'get' ? 
                    <div className="price green">{el.cash}<sup>$</sup></div>
                    :
                    <div className="price red">{el.cash}<sup>$</sup></div>
                    }
                </div>
            )}
        </div>
    </div>
  )
}
