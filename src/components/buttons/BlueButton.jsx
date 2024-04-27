import { Button } from '@material-tailwind/react'
import React from 'react'

const BlueButton = ({text, setShowPopup}) => {
  return (
    <Button className='bg-blue flex justify-center items-center h-10 focus:outline-none w-auto md:w-40 m-2' onClick={() => setShowPopup(prev => !prev)}>
    
    <p className="font-Nunitoo font-medium text-14 text-white">{text}</p>
    </Button>
  )
}

export default BlueButton
