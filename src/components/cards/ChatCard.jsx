import React from 'react'

const ChatCard = ({data}) => {
  return (
    <div className='flex items-center justify-between'>
    <div className='flex items-center'>
    {/* img div */}
    <div className='flex justify-center items-center w-10 h-10 m-2 rounded-full'>
        <img src={data.image} className='object-cover h-full w-full rounded-full' />
    </div>
    {/* name msg div */}
    <div className='flex flex-col'>
    <p className="font-Nunitoo font-regular text-18 text-black ml-2">
              {data.name}
            </p>
            <p className="font-Nunitoo font-regular text-12  text-black text-opacity-60 ml-2">
              {data.message}
            </p>
    </div>
    </div>

    {/* date + unread */}
    <div className='flex flex-col justify-center'>
        {data.unread > 0 && (
            <div className='flex items-center justify-center bg-blue h-5 w-5 m-1 rounded-full'>
            <p className="font-Nunitoo font-regular text-10 text-white ">
              {data.unread}
            </p>
            </div>
            
        )}
        <p className="font-Nunitoo font-regular text-12 text-black ">
              {data.date}
            </p>
    </div>
      
    </div>
  )
}

export default ChatCard
