import React from 'react'

const MesRecieved = ({data}) => {
  return (
    <div className="flex m-2 justify-end">
    <div className="flex max-w-2/3 items-end gap-4 p-2 bg-blue rounded-lg w-auto">
      <p className="font-Nunitoo font-regular text-white text-16">
        {data.msgRecieved}
      </p>
      <p className="font-Nunitoo font-regular text-white text-10">
        {data.time}
      </p>
    </div>
  </div>
  )
}

export default MesRecieved
