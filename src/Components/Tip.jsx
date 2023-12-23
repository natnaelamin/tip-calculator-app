import React from 'react'

function Tip({onCustomChange, handleTip, customTip}) {

  const handleCustomTip=(e)=>{
    const value= e.target.value
    onCustomChange(value)
  } 

  const handleButtonClick = (percentage) =>{
    handleTip(percentage)
  }
  
  const data=[5, 10, 15, 25, 50]
  return (
    <div>
      <h3 className='mt-6 text-teal-900  pb-1'>Select Tip %</h3>
          <div className='grid grid-cols-3 mb-5 gap-4'>
            {data.map((percentage)=>(
                <button
                key={percentage}
                onClick={() => handleButtonClick(percentage)}
                className='bg-teal-950 hover:bg-teal-300 hover:text-teal-950
                 focus:bg-teal-600 focus:text-teal-950 text-white font-bold px-5 py-2 rounded'>
                {percentage}%
              </button>
            ))}
            <input value={customTip} type='number' className='bg-white  text-teal-950  font-normal md:font-black px-2 py-2 rounded '
             onChange={handleCustomTip} placeholder='Custom'/>
          </div>
    </div>
  )
}

export default Tip
