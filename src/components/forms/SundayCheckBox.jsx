import React, { useRef, useState } from 'react'
import { CheckboxLabel } from '../checkbox/CheckBoxBlue'

const SundaySchedualForm = ({day}) => {
    const [isChecked, setIsChecked]= useState("")
  return (
    <div>
    {/* day + checkbox */}
    <div className='flex'>
    <CheckboxLabel isChecked={isChecked} setIsChecked={setIsChecked} />
        <p className='font-Nunitoo text-14 text-blue font-medium ml-1'>{day}</p>
    </div>
     
    </div>
  )
}

export default SundaySchedualForm
