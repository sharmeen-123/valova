import React from 'react'
import SupportLeft from './SupportLeft'
import TopBar from '../../components/bars/TopBar'
import SupportRight from './SupportRight'

const Support = () => {
  return (
    <div className='w-full h-screen' >
      {/* Content */}
      <TopBar title="App Support" />
      <div className='h-full flex flex-col sm:flex-row '>
        <div className='w-full sm:w-1/2 md:2/5 lg:w-1/3'>
          <SupportLeft />
        </div>
        <div className='w-full sm:1/2 md:3/5 lg:w-2/3'>
          <SupportRight />
        </div>
      </div>
    </div>
  )
}

export default Support
