import { useState } from 'react'
import bgr from './Images/KV_Promotion_Vulan.png'
import bgrMobile from './Images/KV_Promotion_Vulan_2.jpg'
import bigcLogo from './Images/bigc.jpg'
import coopLogo from './Images/coop.png'
import gtLogo from './Images/GT.png'
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
        {/* Hiệu ứng mờ 2 bên ảnh nền */}
        <div className="absolute top-0 left-0 w-[10vw] h-full z-10 pointer-events-none hidden sm:block" style={{background: 'linear-gradient(to right, #fffbe7 65%, transparent)'}} />
        <div className="absolute top-0 right-0 w-[10vw] h-full z-10 pointer-events-none hidden sm:block" style={{background: 'linear-gradient(to left, #fffbe7 65%, transparent)'}} />
        {/* Desktop */}
        <img
          src={bgr}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-contain z-[1] pointer-events-none select-none hidden sm:block"
        />
        {/* Table 3 ô logo */}
        <div className="relative mt-4 w-full flex justify-center sm:absolute sm:left-[67%] sm:-translate-x-1/2 sm:bottom-[11%] sm:z-10 sm:mt-0">
          <table className="bg-transparent border-separate border-spacing-3">
            <tbody>
              <tr>
                <td colSpan="3" className="pb-2 text-center">
                  <span className="font-bold text-xl text-[#315bb7]">Nhấp để tham gia chương trình:</span>
                </td>
              </tr>
              <tr>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-24 h-24 sm:w-[150px] sm:h-[150px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110">
                  <a href="https://zalo.me/2516594959299658555" target="_blank" rel="noopener noreferrer">
                    <img src={bigcLogo} alt="BigC" className="w-full h-full object-contain" />
                  </a>
                </td>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-24 h-24 sm:w-[150px] sm:h-[150px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110">
                  <a href="https://zalo.me/2516594959299658555" target="_blank" rel="noopener noreferrer">
                    <img src={coopLogo} alt="Co.op" className="w-full h-full object-contain" />
                  </a>
                </td>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-24 h-24 sm:w-[150px] sm:h-[150px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110">
                  <a href="https://zalo.me/2516594959299658555" target="_blank" rel="noopener noreferrer">
                    <img src={gtLogo} alt="GT" className="w-full h-full object-contain" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
