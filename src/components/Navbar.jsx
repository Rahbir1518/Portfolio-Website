import React from 'react'

const Navbar = () => {
  return (
    <div className="div1 bg-[#B98C73] col-span-4 md:col-span-2 sm:col-span-1 flex items-center justify-between rounded-2xl p-3">
      <a className="text-black font-primary text-2xl">{"<-"}MRM{"->"}</a>
      <div className="flex gap-3">
        <button className="text-black font-bold hover:text-gray-700 cursor-none font-secondary pr-3">Home</button>
        <button className="text-black font-bold hover:text-gray-700 cursor-none font-secondary">Contact Me</button>
      </div>
    </div>
  )
}

export default Navbar
