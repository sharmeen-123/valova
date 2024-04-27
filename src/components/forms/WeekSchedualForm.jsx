import React, { useRef, useState } from 'react'
import { InputDefault } from '../inputFields/inputFiels'
import { CheckboxLabel } from '../checkbox/CheckBoxBlue'
import { CheckboxLabell } from '../checkbox/CheckBoxGray'

const WeekSchedualForm = ({day, handleKeyDown}) => {
    const [to, setTo] = useState('')
    const [from, setFrom] = useState('')
    const [isCheckedDay, setIsCheckedDay]= useState("")
    const [isChecked, setIsChecked]= useState("")

    const toInputRef = useRef(null)
    const fromInputRef = useRef(null)
  return (
    <div>
    {/* day + checkbox */}
    <div className='flex'>
    <CheckboxLabel isChecked={isChecked} setIsChecked={setIsChecked} />
        <p className='font-Nunitoo text-12 sm:text-14 text-blue font-medium ml-1'>{day}</p>
    </div>
      <div className='flex flex-col xm:flex-row items-end mt-0.5'>
      {/* to from */}
      <div className='mr-0 xm:mr-3'>
          <label className="font-Nunitoo font-medium text-blue text-12 sm:text-14 py-1 sm:py-2 mt-1">
            From
          </label>
          <InputDefault
            setValue={setFrom}
            handleKeyDown={handleKeyDown}
            inputRef={fromInputRef}
            nextRef={null}
            Placeholder="09:00 AM"
            bg={"white"}
          />
        </div>
      <div className='mr-3'>
          <label className="font-Nunitoo font-medium text-blue text-12 sm:text-14 py-1 sm:py-2 mt-1">
            To
          </label>
          <InputDefault
            setValue={setTo}
            handleKeyDown={handleKeyDown}
            inputRef={toInputRef}
            nextRef={fromInputRef}
            Placeholder="01:00 PM"
            bg={"white"}
          />
        </div>
        <div className='my-1'>
        <CheckboxLabell isChecked={isCheckedDay} setIsChecked={setIsCheckedDay} />
        </div>
      </div>
    </div>
  )
}

export default WeekSchedualForm
