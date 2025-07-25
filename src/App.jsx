import { useState } from 'react'
import bgr from './Images/KV_Promotion_Vulan.png'
import bgrMobile from './Images/KV_Promotion_Vulan_2.jpg'
import './App.css'

function App() {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden m-0 p-0 bg-gradient-to-b from-[#fffbe7] to-[#f7e09e]"
    >
      {/* Mobile*/}
      <img
        src={bgrMobile}
        alt=""
        className="block sm:hidden w-full object-contain z-[1] pointer-events-none select-none"
        style={{ position: 'relative' }}
      />
      <div className="relative w-full h-full">
        {/* Desktop */}
        <img
          src={bgr}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-contain z-[1] pointer-events-none select-none hidden sm:block"
        />
        {/* 3 button vàng gold */}
        <div
          className="flex flex-col items-center w-full mt-4 sm:mt-0 sm:absolute sm:left-[67%] sm:-translate-x-1/2 sm:bottom-[15%] sm:flex-col sm:items-center sm:z-[2]"
        >
          <div className="flex flex-col gap-4 w-full px-4 sm:flex-row sm:gap-12 sm:w-auto sm:px-0">
            {/* BigC button */}
            <div className="relative bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-full max-w-[220px] min-h-[120px] flex flex-col items-center justify-end pb-8 pt-8 px-6 mx-auto">
              {/* Label */}
              <div className="w-full flex justify-start items-center h-8 mb-2">
                <div className="bg-gradient-to-r from-[#ffe082] to-[#f7c948] text-[#222] font-bold px-4 py-1 rounded-tl-lg rounded-br-lg text-sm shadow h-8 flex items-center">BigC</div>
              </div>
              {/* Content */}
              <button className="bg-[#315bb7] text-white rounded-[5px] px-4 py-2 text-sm font-semibold tracking-wide shadow hover:bg-[#244a99] transition">Tham gia ngay</button>
            </div>
            {/* Co.op button */}
            <div className="relative bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-full max-w-[220px] min-h-[120px] flex flex-col items-center justify-end pb-8 pt-8 px-6 mx-auto">
              <div className="w-full flex justify-start items-center h-8 mb-2">
                <div className="bg-gradient-to-r from-[#ffe082] to-[#f7c948] text-[#222] font-bold px-4 py-1 rounded-tl-lg rounded-br-lg text-sm shadow h-8 flex items-center">Co.op</div>
              </div>
              <button className="bg-[#315bb7] text-white rounded-[5px] px-4 py-2 text-sm font-semibold tracking-wide shadow hover:bg-[#244a99] transition">Tham gia ngay</button>
            </div>
            {/* GT button */}
            <div className="relative bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-full max-w-[220px] min-h-[120px] flex flex-col items-center justify-end pb-8 pt-8 px-6 mx-auto">
              <div className="w-full flex justify-start items-center h-8 mb-2">
                <div className="bg-gradient-to-r from-[#ffe082] to-[#f7c948] text-[#222] font-bold px-4 py-1 rounded-tl-lg rounded-br-lg text-sm shadow h-8 flex items-center">GT</div>
              </div>
              <button className="bg-[#315bb7] text-white rounded-[5px] px-4 py-2 text-sm font-semibold tracking-wide shadow hover:bg-[#244a99] transition">Tham gia ngay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default App
