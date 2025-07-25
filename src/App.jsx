import { useState } from 'react'
import bgr from './Images/KV_Promotion_Vulan_3.png'
import bgrMobile from './Images/KV_Promotion_Vulan_2.jpg'
import bgrMobileJpg from './Images/bgrmb.png'
import bigcLogo from './Images/bigc.png'
import coopLogo from './Images/coop.png'
import gtLogo from './Images/GT.png'
import milk1 from './Images/element-19.png'
import milk2 from './Images/element-21.png'
import rose from './Images/rose.png'
import './App.css'

function App() {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden m-0 p-0 bg-gradient-to-b from-[#fffbe7] to-[#f7e09e]"
    >
      {/* Mobile background layer */}
      <div
        className="block sm:hidden absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${bgrMobileJpg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Mobile foreground image
      <img
        src={bgrMobile}
        alt=""
        className="block sm:hidden w-full object-contain z-[1] pointer-events-none select-none"
        style={{ position: 'relative' }}
      /> */}
      {/* 2 lon sữa dưới đáy mobile */}
      <div className="block sm:hidden absolute bottom-0 left-0 w-full flex justify-center z-10">
        <img src={milk1} alt="Sữa 1" className="w-24 h-auto mx-2 transform transition-transform duration-300 hover:scale-110" />
        <img src={milk2} alt="Sữa 2" className="w-24 h-auto mx-2 transform transition-transform duration-300 hover:scale-110" />
      </div>
      {/* Hoa hồng góc trái dưới mobile */}
      <div className="block sm:hidden absolute bottom-0 left-0 z-0">
        <img src={rose} alt="Rose" className="w-300 h-auto opacity-80" />
      </div>
      <div className="relative w-full h-full">
        {/* Hiệu ứng mờ 2 bên ảnh nền */}
        {/* <div className="absolute top-0 left-0 w-[10vw] h-full z-10 pointer-events-none hidden sm:block" style={{background: 'linear-gradient(to right, #fffbe7 65%, transparent)'}} />
        <div className="absolute top-0 right-0 w-[10vw] h-full z-10 pointer-events-none hidden sm:block" style={{background: 'linear-gradient(to left, #fffbe7 65%, transparent)'}} /> */}
        {/* Desktop */}
        <img
          src={bgr}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-contain z-[1] pointer-events-none select-none hidden sm:block"
        />
        {/* Table 3 ô logo - MOBILE */}
        <div className="relative w-full flex justify-center sm:absolute sm:left-[67%] sm:-translate-x-1/2 sm:bottom-[15%] sm:z-10 sm:mt-0">
          <table className="block sm:hidden bg-transparent border-separate border-spacing-4 mt-80 sm:mt-0">
            <tbody>
              <tr>
                <td colSpan="3" className="pb-2 text-center">
                  <span className="font-bold text-xl sm:text-2xl text-[#315bb7]">Xem chi tiết chương trình</span>
                </td>
              </tr>
              <tr>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-24 h-24 sm:w-[100px] sm:h-[100px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_#faecc0]">
                  <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                    <img src={bigcLogo} alt="BigC" className="w-full h-full object-contain" />
                  </a>
                </td>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-24 h-24 sm:w-[100px] sm:h-[100px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_#002a8f]">
                  <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                    <img src={coopLogo} alt="Co.op" className="w-full h-full object-contain" />
                  </a>
                </td>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-24 h-24 sm:w-[100px] sm:h-[100px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_#fff]">
                  <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                    <img src={gtLogo} alt="GT" className="w-full h-full object-contain" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          {/* Table 3 ô logo - DESKTOP */}
          <table className="hidden sm:table bg-transparent border-separate border-spacing-4 sm:border-spacing-x-10 mt-0 ">
            <tbody>
              <tr>
                <td colSpan="3" className="pb-2 text-center">
                  <span className="font-bold text-xl sm:text-2xl text-[#315bb7]">Xem chi tiết chương trình</span>
                </td>
              </tr>
              <tr>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-24 h-24 sm:w-[100px] sm:h-[100px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_#faecc0]">
                  <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                    <img src={bigcLogo} alt="BigC" className="w-full h-full object-contain" />
                  </a>
                </td>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-24 h-24 sm:w-[100px] sm:h-[100px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_#002a8f]">
                  <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                    <img src={coopLogo} alt="Co.op" className="w-full h-full object-contain" />
                  </a>
                </td>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-24 h-24 sm:w-[100px] sm:h-[100px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_#fff]">
                  <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
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
