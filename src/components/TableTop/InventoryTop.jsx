import React, { useState } from 'react'
import SearchFiels from '../inputFields/SearchFiels'
import Searchh from '../../assets/search.svg'
import BlueButton from '../buttons/BlueButton'

const TableTop = ({selectedNo,  setShowPopup, type, button, heading}) => {
    const [search, setSearch] = useState('')
  return (
    <div className='py-1 pb-3 flex items-center justify-between'>
    <div className='flex items-center'>
    <p className="font-Nunitoo font-medium text-20 md:text-24 mr-1 md:mr-3">{heading}</p>
    {/* <div  className='hover:border-transparent '> */}
    <BlueButton text={button} setShowPopup={setShowPopup}/>
    {/* </div> */}
    {selectedNo > 0 && (
      <p className="font-Nunitoo font-medium text-12 md:text-15 ml-3">{selectedNo} {type} selected</p>
    )}
          
    </div>
        <SearchFiels
            setValue={setSearch}
            Bg="white"
            Placeholder="Search"
            PlaceholderColor="darkGray2"
            iconn={Searchh}
          />
    </div>
  )
}

export default TableTop
