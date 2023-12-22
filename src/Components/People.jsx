import React from 'react'


function People({handlePeople, People, tip, customTip, bill}) {
    

    const handlePeopleInput = (e) =>{
        const value= e.target.value
        handlePeople(value)
    }

    const showError = People === '' && (bill !== '' && (tip !== '' || customTip !== ''));
    
  return (
    <div>
        <div className='flex justify-between'>
            <p className='text-teal-900 pb-1'>Number of People</p>
            {showError && <p className='text-red-500 pb-1'>Can't be zero</p>}
        </div>
        <div className='relative '>
            <input type='number' value={People} onChange={handlePeopleInput} 
            className='w-full p-2 py-3 text-right  rounded-lg text-teal-950 font-bold' placeholder='0' />
            <img className='absolute top-4 left-4' src="images/icon-person.svg" alt="person-icon" />
        </div>
    </div>
  )
}

export default People
