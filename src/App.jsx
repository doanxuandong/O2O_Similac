import { useState } from 'react'
import bgr from './Images/KV_Promotion_Vulan.png'
import bgrMobileJpg from './Images/bgrmobile.jpg'
import bigcLogo from './Images/central.png'
import coopLogo from './Images/coop.png'
import gtLogo from './Images/GT.png'
import bigcLogoDesktop from './Images/central_desktop.png'
import coopLogoDesktop from './Images/coop_desktop.png'
import gtLogoDesktop from './Images/GT_desktop.png'
import rose from './Images/rose.png'
import mokup from './Images/mokup.png'
import pic_lion from './Images/pic_lion.png'
import COV from './Images/COV.png'
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
          <img src={pic_lion} alt="Lion" className="w-full h-auto" />
        </div>
        
        {/* COV dưới lion */}
        <div className="w-full flex justify-center z-10">
          <img src={COV} alt="COV" className="w-full h-auto" />
        </div>
        
        {/* Table 3 ô logo - MOBILE */}
        <div className="w-full flex justify-center z-10">
          <table className="bg-transparent border-separate border-spacing-4">
            <tbody>
              <tr>
                <td colSpan="3" className="pb-0 text-center">
                  <span className="font-bold text-sm sm:text-2xl border-2 border-blue-900 p-1 pl-2 pr-2 rounded-[999px] bg-[#fff] text-[#315bb7]">THAM GIA NGAY TẠI CÁC ĐIỂM BÁN</span>
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
        </div>
        
        {/* Mokup mobile */}
        <div className="w-full flex justify-center z-10 mt-auto">
          <img src={mokup} alt="Mokup" className="w-[45%] h-auto" />
        </div>
        
        {/* Hoa hồng góc trái dưới mobile */}
        <div className="absolute bottom-0 left-0 z-0">
          <img src={rose} alt="Rose" className="w-200 h-auto opacity-80" />
        </div>
      </div>
      <div className="relative w-full h-full">
        {/* Hiệu ứng mờ 2 bên ảnh nền */}
        {/* <div className="absolute top-0 left-0 w-[10vw] h-full z-10 pointer-events-none hidden sm:block" style={{background: 'linear-gradient(to right, #fffbe7 65%, transparent)'}} />
        <div className="absolute top-0 right-0 w-[10vw] h-full z-10 pointer-events-none hidden sm:block" style={{background: 'linear-gradient(to left, #fffbe7 65%, transparent)'}} /> */}
        {/* Desktop */}
        <img
          src={bgr}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-[1] pointer-events-none select-none hidden sm:block"
        />
        {/* Hiệu ứng mờ 2 bên ảnh nền desktop */}
        {/* <div
          className="absolute top-0 left-0 w-[10vw] h-full z-10 pointer-events-none hidden sm:block"
          style={{
            background: 'linear-gradient(to right, #fffbe7 65%, transparent)',
            filter: 'blur(8px)'
          }}
        />
        <div
          className="absolute top-0 right-0 w-[10vw] h-full z-10 pointer-events-none hidden sm:block"
          style={{
            background: 'linear-gradient(to left, #fffbe7 65%, transparent)',
            filter: 'blur(8px)'
          }}
        /> */}
        
        {/* Rose ở góc trái dưới desktop */}
        {/* <div className="absolute bottom-0 left-0 z-0 hidden sm:block">
          <img src={rose} alt="Rose" className="w-64 h-auto opacity-80" />
        </div> */}
        
        {/* Rose ở góc phải dưới desktop */}
        {/* <div className="absolute bottom-0 right-0 z-0 hidden sm:block">
          <img src={rose} alt="Rose" className="w-64 h-auto opacity-80 transform scale-x-[-1]" />
        </div> */}
        
        {/* Table 3 ô logo - DESKTOP */}
        <div className="relative w-full flex justify-center sm:absolute sm:left-[68%] sm:-translate-x-1/2 sm:bottom-[13%] sm:z-10 sm:mt-0">
          <table className="hidden sm:table bg-transparent border-separate border-spacing-4 sm:border-spacing-x-10 mt-0">
            <tbody>
              <tr>
                <td colSpan="3" className="pb-2 text-center">
                  <span className="font-bold text-xl border-2 border-blue-900 p-1 pl-2 pr-2 rounded-[999px] bg-[#154da1] sm:text-xl text-[#fff]">NHẤN ĐỂ MUA HÀNG TẠI CÁC ĐIỂM BÁN</span>
                </td>
              </tr>
              <tr>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-[6px] shadow-lg w-24 h-24 sm:w-[168px] sm:h-[96px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_#fff]">
                  <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                    {/* <img src={bigcLogo} alt="BigC" className="w-full h-full object-contain hidden sm:block" /> */}
                    <img src={bigcLogoDesktop} alt="BigC Desktop" className="w-full h-full object-contain sm:block" />
                  </a>
                </td>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-[6px] shadow-lg w-24 h-24 sm:w-[168px] sm:h-[96px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_#fff]">
                  <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                    {/* <img src={coopLogo} alt="Co.op" className="w-full h-full object-contain hidden sm:block" /> */}
                    <img src={coopLogoDesktop} alt="Co.op Desktop" className="w-full h-full object-contain sm:block" />
                  </a>
                </td>
                <td className="bg-gradient-to-br from-[#fffbe7] to-[#f7e09e] border-2 border-[#f7c948] rounded-[6px] shadow-lg w-24 h-24 sm:w-[168px] sm:h-[96px] align-middle text-center p-0 overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_40px_#fff]">
                  <a href="https://zalo.me/s/886890990835804119/" target="_blank" rel="noopener noreferrer">
                    {/* <img src={gtLogo} alt="GT" className="w-full h-full object-contain hidden sm:block" /> */}
                    <img src={gtLogoDesktop} alt="GT Desktop" className="w-full h-full object-contain sm:block" />
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
