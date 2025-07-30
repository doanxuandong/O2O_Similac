import { useState } from 'react'
import bgr from './Images/KV_Promotion_Vulan_12.png'
import bgrMobileJpg from './Images/bg.png'
import bigcLogo from './Images/central.png'
import coopLogo from './Images/coop.png'
import gtLogo from './Images/GT.png'
import bigcLogoDesktop from './Images/central_notes.png'
import coopLogoDesktop from './Images/coop_notes.png'
import gtLogoDesktop from './Images/stores_notes.png'
import rose from './Images/rose.png'
import mokup from './Images/mokup.png'
import pic_lion from './Images/pic_lion.png'
import element from './Images/KV_Promotion_Vulan_2.jpg'
import COV from './Images/COV.png'
import button from './Images/button_title.png'
import centralMobile from './Images/central_mobile.png'
import coopMobile from './Images/coop_mobile.png'
import banleMobile from './Images/banle_mobile.png'
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
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(${bgrMobileJpg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Lion ở đầu mobile */}
        <div className="w-full flex justify-center z-10">
          <img src={element} alt="Lion" className="w-full h-auto" />
        </div>
        
        {/* text hướng dẫn */}
        <div className='flex justify-center mt-1 px-4 z-10'>
          <span className='text-black text-left text-sm font-medium italic'>Vui lòng bấm chọn điểm bán hàng bên dưới để tìm hiểu danh sách cửa hàng và thể lệ tham gia</span>
        </div>
        
        {/* 3 ảnh mobile mới */}
        <div className='flex flex-col items-center mt-8 px-4 z-10 space-y-7'>
          <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
            <img src={centralMobile} alt="Central Retail" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
          </a>
          
          <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
            <img src={banleMobile} alt="Bán lẻ" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
          </a>
          
          <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
            <img src={coopMobile} alt="Co.opmart" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
          </a>
        </div>
        
        {/* COV dưới lion */}
        {/* <div className="w-full flex justify-center z-10">
          <img src={COV} alt="COV" className="w-[95%] h-auto" />
        </div> */}
        
        {/* Table 3 ô logo - MOBILE */}
        {/* <div className="w-full flex justify-center z-10">
          <table className="bg-transparent border-separate border-spacing-4">
            <tbody>
              <tr>
                <td colSpan="3" className="pb-0 text-center">
                  <span className="font-bold text-[10px] sm:text-2xl border-2 border-blue-900 p-1 pl-2 pr-2 rounded-[999px] bg-[#fff] text-[#154da1]">CHỌN ĐIỂM BÁN BÊN DƯỚI ĐỂ THAM GIA CHƯƠNG TRÌNH</span>
                </td>
              </tr>
              <tr>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-24 h-24 sm:w-[80px] sm:h-[80px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_#fff]">
                  <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                    <img src={bigcLogo} alt="BigC" className="w-full h-full object-contain" />
                  </a>
                </td>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-24 h-24 sm:w-[80px] sm:h-[80px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_#fff]">
                  <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                    <img src={coopLogo} alt="Co.op" className="w-full h-full object-contain" />
                  </a>
                </td>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-xl shadow-lg w-24 h-24 sm:w-[80px] sm:h-[80px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_#fff]">
                  <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                    <img src={gtLogo} alt="GT" className="w-full h-full object-contain" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
        
        {/* Mokup mobile */}
        {/* <div className="w-full flex justify-center z-10 mt-auto">
          <img src={mokup} alt="Mokup" className="w-[50%] h-auto" />
        </div> */}
        
        {/* Hoa hồng góc trái dưới mobile */}
        {/* <div className="absolute bottom-0 left-0 z-0">
          <img src={rose} alt="Rose" className="w-200 h-auto opacity-80" />
        </div> */}
      </div>
      <div className="relative w-full h-full">
        {/* Desktop */}
        <img
          src={bgr}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-[1] pointer-events-none select-none hidden sm:block"
        />
        
        {/* Table 3 ô logo - DESKTOP */}
        <div className="relative w-full flex justify-center sm:absolute sm:left-[68%] sm:-translate-x-1/2 sm:bottom-[14%] sm:z-10 sm:mt-0">
          <table className="hidden sm:table bg-transparent border-separate border-spacing-0 sm:border-spacing-x-2  mt-0">
            <tbody>
              {/* <tr>
                  <td colSpan="3" className="pb-2 text-center">
                    <span className="font-brandon font-bold text-xl border-2 border-blue-900 p-1 pl-2 pr-2 rounded-[999px] bg-[#fff] sm:text-sm text-[#154da1] shadow-[0_4px_8px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-all duration-300 text-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">CHỌN ĐIỂM BÁN BÊN DƯỚI ĐỂ THAM GIA CHƯƠNG TRÌNH</span>
                  </td>
              </tr> */}
              <tr>
                  <td className="sm:w-[182px] sm:h-[104px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110">
                    <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                      {/* <img src={bigcLogo} alt="BigC" className="w-full h-full object-contain hidden sm:block" /> */}
                      <img src={bigcLogoDesktop} alt="BigC Desktop" className="w-full h-full object-contain sm:block" />
                    </a>
                  </td>
                  <td className="sm:w-[182px] sm:h-[104px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110">
                    <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                      {/* <img src={coopLogo} alt="Co.op" className="w-full h-full object-contain hidden sm:block" /> */}
                      <img src={coopLogoDesktop} alt="Co.op Desktop" className="w-full h-full object-contain sm:block" />
                    </a>
                  </td>
                  <td className="sm:w-[182px] sm:h-[104px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110">
                    <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                      {/* <img src={gtLogo} alt="GT" className="w-full h-full object-contain hidden sm:block" /> */}
                      <img src={gtLogoDesktop} alt="GT Desktop" className="w-full h-full object-contain sm:block" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="pt-2 justify-center align-top">
                    {/* <span className="font-brandon font-bold text-xl border-2 border-blue-900 p-1 pl-2 pr-2 rounded-[999px] bg-[#fff] sm:text-sm text-[#154da1] shadow-[0_4px_8px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-all duration-300 text-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">CHỌN ĐIỂM BÁN BÊN DƯỚI ĐỂ THAM GIA CHƯƠNG TRÌNH</span> */}
                    <img src={button} alt="button title" className='w-full h-[55px] object-contain sm:block'/>
                  </td>
              </tr>
                {/* <tr>
                  <td className="pt-0 align-top text-center">
                    <span className="text-xs font-medium text-[#315bb7] leading-tight -mt-1 block">Chuỗi siêu thị BigC, Go!, Tops Market</span>
                  </td>
                  <td className="pt-0 align-top text-center">
                    <span className="text-xs font-medium text-[#315bb7] leading-tight -mt-1 block">Chuỗi siêu thị Co.op, Co.op Extra, Co.op Food, Finelife</span>
                  </td>
                  <td className="pt-0 align-top text-center">
                    <span className="text-xs font-medium text-[#315bb7] leading-tight -mt-1 block">Hệ thống cửa hàng <br></br> bán lẻ</span>
                  </td>
                </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App