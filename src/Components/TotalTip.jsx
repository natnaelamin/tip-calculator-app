import React from 'react'

function TotalTip({handleReset,tipAmount, totalAmount, resetBg}) {

    const handleResetButton = () => {
        handleReset()
    }
  return (
    <div>
        <div className='flex justify-between mb-6'>
        <div>
            <p className='text-white font-bold text-base'>Tip Amount</p>
            <p className='text-slate-400 font-bold text-start text-sm'>/ person</p>
        </div>
        <p className='text-teal-300 text-3xl font-bold'>${tipAmount.toFixed(2)}</p>
        </div>
        <div className='flex justify-between mb-10'>
        <div>
            <p className='text-white font-bold text-base'>Total</p>
            <p className='text-slate-400 font-bold text-start text-sm'>/ person</p>
        </div>
        <p className='text-teal-300 text-3xl font-bold'>${totalAmount.toFixed(2)}</p>
        </div>
        <button onClick={handleResetButton}
        className={`${resetBg ? 'bg-teal-300 hover:bg-teal-100' : 'bg-teal-900' }
        ${resetBg ? 'bg-teal-300 hover:bg-teal-100' : 'bg-teal-900' }
         px-10 text-teal-950 font-bold
         text-lg w-full rounded-md py-2 mt-10 md:mt-16`}>RESET</button>
    </div>
  )
}

export default TotalTip
