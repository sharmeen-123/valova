import React, { useState } from 'react'
import SelectService from '../inputFields/SelectService'

const AddServiceLeftForm = ({name}) => {
  const [services, setServices] = useState([

    {
      name: "Electrical Service",
      selected: false
    },
    {
      name: "Painting Service",
      selected: false
    },
    {
      name: "Maintenance and Repairs",
      selected: false
    },
    {
      name: "Commercial Electrical Services",
      selected: false
    },
    {
      name: "Residential Electrical Services",
      selected: false
    },
    {
      name: "Circuit Breaker Repair Service",
      selected: false
    },
    {
      name: "Surge Protector Repair Service",
      selected: false
    },
  ])
  return (
    <div className='w-auto sm:w-80'>
      <div className="flex flex-col mb-2 ">
          <p className="font-Nunitoo text-16 sm:text-24 font-medium p-0.5 sm:py-2 text-black">
            {name}
          </p>
          <p className="font-Nunitoo text-12 sm:text-16  font-bold text-black">
          Services
          </p>

          <div className="h-20 sm:h-full w-full flex w-full">
                <div className="overflow-y-auto w-full">
            {services.map((val, ind) => {
              return <SelectService value={val} key={ind}/>
            })}
          </div>
          </div>
          </div>
    </div>
  )
}

export default AddServiceLeftForm
