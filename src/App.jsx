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
          className="flex flex-col items-center w-full mt-4 sm:mt-0 sm:absolute sm:left-[67%] sm:-translate-x-1/2 sm:bottom-[20%] sm:flex-col sm:items-center sm:z-[2]"
        >
          <div className="flex flex-col gap-4 w-full px-4 sm:flex-row sm:gap-12 sm:w-auto sm:px-0">
            <a
              href="https://zalo.me/2516594959299658555" // Link BigC
              className="px-10 py-4 h-[90px] min-w-[120px] text-center bg-gradient-to-r from-[#ffe082] to-[#f7c948] text-[#7a4f01] font-bold text-xl border-none rounded-[5px] shadow-[0_4px_16px_0_rgba(247,201,72,0.25)] cursor-pointer no-underline transition-colors duration-300 outline-none flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-[#ffd54f] hover:to-[#f7b801]"
            >
              BigC
              <div
                className="mt-2 inline-block bg-[#315bb7] text-white rounded-[5px] px-3 py-0.1 text-[0.5rem] font-medium tracking-wide whitespace-nowrap"
              >
                Tham gia ngay
              </div>
            </a>
            <a
              href="https://zalo.me/2516594959299658555" // Link Co.op
              className="px-10 py-4 h-[90px] min-w-[120px] text-center bg-gradient-to-r from-[#ffe082] to-[#f7c948] text-[#7a4f01] font-bold text-xl border-none rounded-[5px] shadow-[0_4px_16px_0_rgba(247,201,72,0.25)] cursor-pointer no-underline transition-colors duration-300 outline-none flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-[#ffd54f] hover:to-[#f7b801]"
            >
              Co.op
              <div
                className="mt-2 inline-block bg-[#315bb7] text-white rounded-[5px] px-3 py-0.1 text-[0.5rem] font-medium tracking-wide whitespace-nowrap"
              >
                Tham gia ngay
              </div>
            </a>
            <a
              href="https://zalo.me/2516594959299658555" // Link GT
              className="px-10 py-4 h-[90px] min-w-[120px] text-center bg-gradient-to-r from-[#ffe082] to-[#f7c948] text-[#7a4f01] font-bold text-xl border-none rounded-[5px] shadow-[0_4px_16px_0_rgba(247,201,72,0.25)] cursor-pointer no-underline transition-colors duration-300 outline-none flex flex-col items-center justify-center hover:bg-gradient-to-r hover:from-[#ffd54f] hover:to-[#f7b801]"
            >
              GT
              <div
                className="mt-2 inline-block bg-[#315bb7] text-white rounded-[5px] px-3 py-0.1 text-[0.5rem] font-medium tracking-wide whitespace-nowrap"
              >
                Tham gia ngay
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
