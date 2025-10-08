import React from 'react'

export default function JoinNow() {
  return (
    <div>
         <button className='bg-[#FACC15] px-6 py-4 m'>JOIN NOW</button>
    </div>
  )
}
export function Buttons() {
  return (
    <div className="flex justify-center gap-2">
      <button className="bg-[#FACC15] px-9 py-2 rounded-md hover:opacity-90 transition">
        Find Rooms
      </button>

      <button className="bg-[#FACC15] px-9 py-2 rounded-md hover:opacity-90 transition">
        Find Roomie
      </button>
    </div>
  );
}



