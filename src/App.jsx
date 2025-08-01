import { useState } from 'react'
import bgr from './Images/KV_Promotion_Vulan_12.png'
import bgrMobileJpg from './Images/bg.jpg'
import bigcLogo from './Images/central.png'
import coopLogo from './Images/coop.png'
import gtLogo from './Images/GT.png'
import bigcLogoDesktop from './Images/central_notes.png'
import coopLogoDesktop from './Images/coop_notes.png'
import gtLogoDesktop from './Images/stores_notes.png'
import rose from './Images/rose.png'
import element from './Images/picmb.png'
import button from './Images/button_title.png'
import centralMobile from './Images/central_mb.png'
import coopMobile from './Images/coop_mb.png'
import banleMobile from './Images/gt_mb.png'
import logoAbbott from './Images/logo_abott.png'
import hdtext from './Images/instructiontext.png'
import './App.css'

function App() {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-[-1] m-0 p-0 bg-gradient-to-b from-[#fffbe7] to-[#f7e09e]"
    >
      {/* Mobile Container - Gom tất cả thành phần mobile */}
      <div className="flex sm:hidden flex-col w-full h-screen pb-0">
        {/* Mobile background layer */}
        <div
          className="absolute top-0 left-0 w-full h-full z-0 object-cover"
          style={{
            backgroundImage: `url(${bgrMobileJpg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* 3 logo */}
        <div className='flex flex-col items-center w-full mt-[310px] px-4 z-10 space-y-3'>
          <a href="https://zalo.me/s/886890990835804119?c=abbott-gt" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full">
            <img src={banleMobile} alt="Bán lẻ" className="w-[95%] h-[95%] rounded-lg" />
          </a>

          <a href="https://zalo.me/s/886890990835804119?c=abbott-vu-lan-bigc" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full">
            <img src={centralMobile} alt="Central Retail" className="w-[95%] h-[95%] rounded-lg" />
          </a>
          
          <a href="https://zalo.me/s/886890990835804119?c=abbott-vu-lan-coop" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full">
            <img src={coopMobile} alt="Co.opmart" className="w-[95%] h-[95%] rounded-lg" />
          </a>
        </div>
        
         {/* Hoa hồng */}
         <div className="absolute bottom-0 left-0 z-0">
           <img src={rose} alt="Rose" className="w-200 h-auto opacity-80" />
         </div>
         
         {/* Logo Abbott góc phải dưới mobile */}
         <div className="absolute bottom-9 right-4 z-10">
           <img src={logoAbbott} alt="Abbott Logo" className="w-16 h-auto opacity-90" />
         </div>
      </div>
      <div className="relative w-full h-full">
        {/*------------------------*/}
        {/* Desktop */}
        <img
          src={bgr}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-[1] pointer-events-none select-none hidden sm:block"
        />
        
        {/* Table 3 ô logo - DESKTOP */}
        <div className="relative w-full flex justify-center sm:absolute sm:left-[69%] sm:-translate-x-1/2 sm:bottom-[18%] sm:z-10 sm:mt-0">
          <table className="hidden sm:table bg-transparent border-separate border-spacing-0 sm:border-spacing-x-6 mt-0">
            <tbody>
              <tr>
                  <td colSpan="3" className="pb-2 text-center">
                    <span className="font-brandon font-bold text-[19px] text-[#93175b] ">Vui lòng bấm chọn điểm bán hàng bên dưới để tìm hiểu danh sách cửa hàng và thể lệ tham gia</span>
                  </td>
              </tr>
              <tr>
                  <td className="sm:w-[270px] h-auto align-middle text-center p-0 overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] rounded-lg hover:bg-white/10">
                    <a href="https://zalo.me/s/886890990835804119?c=abbott-gt" target="_blank" rel="noopener noreferrer">
                      <img src={banleMobile} alt="Bán lẻ" className="w-[270px] h-auto object-contain sm:block" />
                    </a>
                  </td>
                  <td className="sm:w-[270px] h-auto align-middle text-center p-0 overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] rounded-lg hover:bg-white/10">
                    <a href="https://zalo.me/s/886890990835804119?c=abbott-vu-lan-bigc" target="_blank" rel="noopener noreferrer">
                      <img src={centralMobile} alt="Central Retail" className="w-[270px] h-auto object-contain sm:block" />
                    </a>
                  </td>
                  <td className="sm:w-[270px] h-auto align-middle text-center p-0 overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] rounded-lg hover:bg-white/10">
                    <a href="https://zalo.me/s/886890990835804119?c=abbott-vu-lan-coop" target="_blank" rel="noopener noreferrer">
                      <img src={coopMobile} alt="Co.opmart" className="w-[270px] h-auto object-contain sm:block" />
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