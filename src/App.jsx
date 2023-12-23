import { useState } from 'react'
import Bill from './Components/Bill'
import Tip from './Components/Tip'
import People from './Components/People'
import TotalTip from './Components/TotalTip'

function App() {

  const [bill, setBill] = useState('')
  const [customTip, setCustomTip] = useState('')
  const [tip, setTip] = useState('')
  const [numberOfPeople, setNumberOfPeople] = useState('')
  

  const onBillChange = (value) =>{
    setBill(value)
  };

  const onCustomChange = (value) =>{
    setCustomTip(value)
  }

  const handleTip = (value)=> {
    setTip(value)
  }
  
  const handlePeople = (value) =>{
    setNumberOfPeople(value)
  }

  const handleReset = () =>{
    setBill('')
    setCustomTip('')
    setNumberOfPeople('')
    setTip('')
  }

  let tipAmount = 0.00;
  let totalAmount = 0.00;
  let tempTip = 0.00;

  if (bill !== '' && (tip !== '' || customTip!== '') && numberOfPeople !== '') {
    const parsedNumberOfPeople = Number(numberOfPeople);

    if (!isNaN(parsedNumberOfPeople) && parsedNumberOfPeople !== 0) {
      if(tip !== ''){
        tipAmount = (Number(bill) * (Number(tip) / 100)) / parsedNumberOfPeople;
        tempTip = Number(bill) * (Number(tip) / 100)
        totalAmount = (Number(bill) + tempTip) / parsedNumberOfPeople;
      }else{
        tipAmount = (Number(bill) * (Number(customTip) / 100)) / parsedNumberOfPeople;
        tempTip = Number(bill) * (Number(customTip) / 100)
        totalAmount = (Number(bill) + tempTip) / parsedNumberOfPeople;
      }
      
    } else {
      tipAmount = 0.00;
      totalAmount = 0.00;
    }
  } else {
    tipAmount = 0.00;
    totalAmount = 0.00;
  }

  const resetBg = (bill !== "" || customTip !== "" || tip !== "" || numberOfPeople !== "");

  
  return (
    <div className='flex flex-col justify-center text-center bg-blue-100
     h-screen bg-cover py-16 md:py-24 px-2  md:px-72 '>
      <div className='text-teal-700 font-semibold text-xl mt-16 md:my-10 '>
        <h1 >SPLITTER</h1>
      </div>
      <div className='grid md:grid-cols-2 mt-4 md:mt-8 gap-2 md:gap-5 bg-blue-300
       rounded-2xl px-5 md:px-10  py-10 mb-10'>
        <div className=' text-left' >
          <Bill bill={bill} onBillChange={onBillChange}/>
          <Tip onCustomChange={onCustomChange} handleTip={handleTip} customTip={customTip} />
          <People People={numberOfPeople} handlePeople={handlePeople}
           bill={bill} tip={tip} customTip={customTip}/>  
        </div>
        <div className='bg-teal-950 rounded-xl px-10 py-8'>
          <TotalTip tipAmount={tipAmount} totalAmount={totalAmount}
           resetBg={resetBg} handleReset={handleReset} />
        </div>
      </div>
    </div>
  )
}

export default App
