import Logo from '../auth/Logo.jsx'
import { Image } from '../../assets/index.js'
import { useNavigate } from 'react-router'
import React from 'react';
import { LuLogOut } from "react-icons/lu";

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
        const activeData = localStorage.getItem("userActived");
        if (activeData) {
            const parsedData = JSON.parse(activeData);
            if (parsedData.status && parsedData.user) {
            setCurrentUser(parsedData.user);
            }
        }
    }, []);

    const handleAuthAction = () => {
        if (currentUser) {
            const loggedOutState = { status: false, user: null };
            localStorage.setItem("userActived", JSON.stringify(loggedOutState));
            setCurrentUser(null);
            alert("Logout Berhasil!");
        } else {
            navigate("/auth/login");
        }
    };

    function Navimg (props) {
        const color = {
            default: "text-[12px] xl:text-[14px] text-[#6B7280]",
            promo: "text-[12px] xl:text-[14px] text-[#DC2626]"
        }
        return (
            <div className="flex items-center gap-1.5 p-2 xl:px-4 py-2.5 w-fit ">
                <span className="text-[12px] xl:text-[14px] text-[#6B7280]">{props.img}</span>
                <span className={color[props.style] || color.default}>{props.text}</span>
            </div>
        )
    }

  return (
    <div className='sticky bg-white top-0 z-50 flex flex-col w-full items-center'>
        <div className="flex items-center justify-center w-full hidden md:flex bg-[#1A73E8]">
            <div className='flex items-center justify-between w-full md:w-[95%] xl:w-[90%] 2xl:w-[80%] pl-4 pr-4'>
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
        <div className="flex items-center justify-center w-full bg-[#FFFFFF01]">
            <div className="grid grid-cols-2 md:grid-cols-[auto_1fr_auto] items-center justify-start w-full md:w-[95%] xl:w-[90%] 2xl:w-[80%] pl-4 py-1 gap-4 xl:gap-10">
                <Logo style="#1A73E8" text="black"/>
                <div className="order-3 md:order-0 col-span-2 md:col-span-1 flex items-center w-full border border-[#0000001A] rounded-md">
                    <input 
                        type="text" 
                        className='flex px-3 outline-none w-full text-[12px]'
                        placeholder="Cari produk, merek, kategori..." 
                    />
                    <button className='right-0 bg-[#1A73E8] px-3 py-1.5 border border-[#1A73E8] rounded-r-md'>
                        <img 
                            src="/assets/main/landingpage/search.svg" 
                            alt="Search" 
                            className="size-4" 
                        />
                    </button>
                </div>
                <div className="order-2 md:order-0 justify-end flex gap-1 w-full">
                    <img 
                        src="/assets/main/landingpage/bell.svg" 
                        alt="Bell" 
                        className='p-2.5'
                    />
                    <div className="flex items-center gap-3">
                        <div 
                            onClick={!currentUser ? handleAuthAction : handleAuthAction}
                            className="flex p-[10px] gap-2 items-center cursor-pointer"
                        >
                        {currentUser ? (
                            <LuLogOut size={16} className="text-[#DC2626]" />
                        ) : (
                            <img 
                                src="/assets/main/landingpage/person.svg" 
                                alt="person" 
                            />
                        )}
                        <span 
                            className='text-[14px] text-[#111827] font-medium'
                        >
                            {currentUser ? currentUser.nama : "Login"}
                        </span>
                    </div>
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

        <div className="flex flex-col md:flex-row items-start md:items-center justify-start w-full md:w-[95%] xl:w-[90%] 2xl:w-[80%] p-1 rounded-lg">
            <div 
            className="flex items-center px-2 xl:px-4 py-2.5 gap-1 cursor-pointer hover:bg-gray-50 rounded-md w-full md:w-auto justify-between md:justify-start"
            onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-1">
                    <img src="/assets/main/landingpage/menu.svg" alt="Menu" />
                    <span className="text-[12px] xl:text-[14px] text-[#111827] font-medium">Semua Kategori</span>
                </div>
                <Image.Down 
                    className={`self-center size-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto items-start md:items-center mt-2 md:mt-0 gap-1 md:gap-0`}>
                <Navimg img="💻" text="Elektronik" />
                <Navimg img="👗" text="Fashion" />
                <Navimg img="🏠" text="Rumah & Dapur" />
                <Navimg img="💄" text="Kecantikan" />
                <Navimg img="⚽" text="Olahraga" />
                <Navimg img="📚" text="Buku & Alat Tulis" />
                <Navimg img="🔥" text="Promo" style="promo" />
            </div>

        </div>
    </div>
  )
}
