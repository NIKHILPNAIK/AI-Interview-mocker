import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (
    <div className="h-screen flex flex-col">
      <Header/>
      <div className="flex-1 overflow-y-auto mx-5 md:mx-20 lg:mx-36" style={{
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout