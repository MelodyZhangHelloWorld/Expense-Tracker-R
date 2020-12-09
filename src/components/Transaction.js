import React from 'react'

export const Transaction = ({transaction}) => {
    const sign = transaction.amount > 0? '+':'-';
    let plusMinus = transaction.amount>0?'plus':'minus';

    return (
        <div>
            <li className={plusMinus}>
                      {transaction.text} 
                      <span> {sign}${Math.abs(transaction.amount)} </span> 
                      <button className="delete-btn">X</button> 
                  </li>
        </div>
    )
}
