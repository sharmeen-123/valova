import React, { useState } from 'react'
import SearchFiels from '../inputFields/SearchFiels'
import Searchh from '../../assets/search.svg'
import BlueButton from '../buttons/BlueButton'

const TableTopWith2Buttons = ({selectedNo,  setShowPopup1,  setShowPopup2, type, button1, button2}) => {
    const [search, setSearch] = useState('')
  return (
    <div className='py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between'>
    <div className='flex flex-col xm:flex-row xm:items-center'>
    {/* <div  className='hover:border-transparent '> */}
    <div>
    <BlueButton text={button1} setShowPopup={setShowPopup1}/>
    </div>
    <div className='ml-0 sm:ml-2'>
    <BlueButton text={button2} setShowPopup={setShowPopup2}/>
    </div>
    {/* </div> */}
    {selectedNo > 0 && (
      <p className="font-Nunitoo font-medium text-15 ml-3">{selectedNo} {type} selected</p>
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

export default TableTopWith2Buttons
