import Logo from '../auth/Logo'
import { Image } from '../../assets/index.js'
import { Outlet } from 'react-router'

export default function Header() {
    function Navimg (props) {
        const color = {
            default: "text-[14px] text-[#6B7280]",
            promo: "text-[14px] text-[#DC2626]"
        }
        return (
            <div className="flex items-center gap-1.5 px-4 py-2.5 w-fit ">
                <span className="text-[14px] text-[#6B7280]">{props.img}</span>
                <span className={color[props.style] || color.default}>{props.text}</span>
            </div>
        )
    }

  return (
    <div className='flex flex-col width full max-w-432 mx-auto items-center'>
        <div className="flex items-center justify-center w-full max-w-432 bg-[#1A73E8]">
            <div className='flex items-center justify-between w-full max-w-7xl pl-4 pr-4'>
                <div className='flex items-center gap-1'>
                    <img
                    src="/assets/main/landingpage/map.svg"
                    alt="Gps"
                    className="size-2.75"
                    />
                    <span className="text-[12px] text-[#FFFFFF]">Kirim ke: Jakarta Selatan</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-[#FFFFFF] text-[12px]">
                    <span>📞 0800-1234-5678 (Gratis)</span>
                    <span>🚀 Gratis ongkir di atas Rp 100.000</span>
                </div>
            </div>

        </div>
        <div className="flex items-center justify-center w-full max-w-432 bg-[#FFFFFF01]">
            <div className="flex flex-col md:flex-row items-center justify-start w-full max-w-7xl pl-4 gap-4">
                <Logo style="#1A73E8" text="black"/>
                <div className="flex items-center w-full border border-[#0000001A] rounded-xl">
                    <input 
                        type="text" 
                        className='flex px-3 py-4 outline-none w-full text-[12px]'
                        placeholder="Cari produk, merek, kategori..." 
                    />
                    <button className='right-0 bg-[#1A73E8] px-3 py-4 border border-[#1A73E8] rounded-r-xl'>
                        <img 
                            src="/assets/main/landingpage/search.svg" 
                            alt="Search" 
                            className="size-4" 
                        />
                    </button>
                </div>
                <div className="flex gap-1 w-full">
                    <img 
                        src="/assets/main/landingpage/bell.svg" 
                        alt="Bell" 
                        className='p-[10px]'
                    />
                    <div className="flex p-[10px] gap-2 items-center">
                        <img 
                            src="/assets/main/landingpage/person.svg" 
                            alt="person" 
                        />
                        <span className='text-[14px] text-[#111827'>Budi</span>
                    </div>
                    <img
                        src="/assets/main/landingpage/love.svg"
                        alt="Love"
                            className='p-[10px]'
                    />
                    <img 
                        src="/assets/main/landingpage/chart.svg" 
                        alt="Chart" 
                        className='p-[10px]'
                    />
                </div>
            </div>
        </div>
        <div className="border border-[#0000001A] border-x-0 flex items-center justify-center w-full max-w-432 bg-[#FFFFFF01]">
            <div className="flex  flex-col md:flex-row items-start md:items-center justify-start w-full max-w-7xl p-1">
                <div className="flex items-center  px-4 py-2.5 gap-1">
                    <img src="/assets/main/landingpage/menu.svg" alt="Menu" />
                    <span className="text-[14px] text-[#111827]">Semua Kategori</span>
                    <Image.Down className="self-center size-[14px]"/>
                </div>
                <Navimg img="💻" text="Elektronik" />
                <Navimg img="👗" text="Fashion" />
                <Navimg img="🏠" text="Rumah & Dapur" />
                <Navimg img="💄" text="Kecantikan" />
                <Navimg img="⚽" text="Olahraga" />
                <Navimg img="📚" text="Buku & Alat Tulis" />
                <Navimg img="🔥" text="Promo" style="promo" />
            </div>
        </div>
        <main className='flex flex-col items-center w-full h-screen'>
            <Outlet />
        </main>
    </div>
  )
}
