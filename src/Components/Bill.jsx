import React from 'react'

function Bill({onBillChange, bill}) {

    const handleInputChange = (e) => {
       const value = e.target.value
        onBillChange(value)
    }
  return (
    <div className='relative'>
        <h3 className=' text-teal-900 pb-1'>Bill</h3>
        <input type='number' value={bill}  
        className=' rounded-lg w-full px-2 py-3 text-right font-bold text-teal-950 '
        onChange={handleInputChange} placeholder='0' />
        <img className='absolute  left-3 top-10' src="/images/icon-dollar.svg" alt="tydolla$ign" />
    </div>
  )
}

export default Bill
