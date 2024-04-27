import React from 'react'

const SearchFiels = ({setValue, Bg, Placeholder, PlaceholderColor, iconn}) => {
  return (
    <div className={`flex items-center border border-blue3 bg-${Bg} rounded-md p-1 md:p-2 w-40 sm:w-60 md:w-80`}>
    <img src={iconn} className='mr-2 w-4 h-4 md:w-5 md:h-5' />
       <input
      className={` bg-${Bg} w-full focus:outline-none  placeholder-${PlaceholderColor} placeholder-text-10 sm:placeholder-text-14`}
      placeholder = {Placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
    </div>
  )
}

export default SearchFiels
