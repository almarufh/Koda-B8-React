import { useState, useEffect } from 'react';
import InputField from '../../components/auth/InputField.jsx';
import Logo from '../../components/auth/Logo.jsx'
import ButtonAccount from '../../components/auth/ButtonAccount.jsx';
import HeaderAuth from '../../components/auth/HeaderAuth.jsx';
import Line from '../../components/auth/Line.jsx';
import BannerFooter from '../../components/auth/BannerFooter.jsx';
import Button from '../../components/auth/Button.jsx';
import SyaratKebijakan from '../../components/auth/SyaratKebijakan.jsx'
import { Link } from 'react-router';

export default function Forgot() {
  const [email, setEmail] = useState('');

function List (props) {
    return (
        <span className="text-[14px] text-[#FFFFFFCC]">{props.show}</span>
    )
}

function ListRight (props) {
    return (
        <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>{props.show}</span>
        </li>
    )
}

function AsideLeft () {
    return (
      <aside className="relative bg-[url(/assets/auth/forgot/Security.svg)] bg-cover bg-center hidden md:flex flex-col justify-between w-full h-full p-12 bg-[#193CB8]">
        {<Logo />}
        <div className="z-10 flex flex-col gap-4">
            <span className="flex justify-center items-center bg-[#FFFFFF1A] rounded-[12px] w-fit h-fit px-3 py-2 text-[12px] text-[#FFFFFF]">🔐</span>
            <span className="font-bold text-[32px] text-white">Akun kamu aman<br />bersama kami</span>
            <span className="text-[16px] text-[#FFFFFFB2]">Kami menggunakan enkripsi tingkat militer<br/>untuk menjaga keamanan data dan transaksimu.</span>
            <List show="🔒 Enkripsi SSL 256-bit"/>
            <List show="🛡️ Perlindungan data pribadi"/>
            <List show="📧 Verifikasi dua langkah"/>
        </div>
        <BannerFooter/>
      </aside>
    )
  }

  const AsideRight = (
    <aside className="flex p-[10px] md:p-[20%] items-center">
        <div className="flex flex-col w-full gap-8 m-auto">
          {<HeaderAuth
            Header="Masuk ke Akun"
            SubHeader="Tidak perlu khawatir. Masukkan email yang terdaftar dan kami akan mengirimkan tautan untuk membuat kata sandi baru."
          />} 

          <form className="flex flex-col gap-5">
            <InputField
              src="/assets/auth/login/email.svg"
              label="Alamat Email"
              name="AlamatEmail"
              type="email"
              placeholder="email@contoh.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {<Button 
                src="/assets/auth/forgot/send.svg" 
                action="Kirim Tautan Reset" 
                order="none" 
                color="#1A73E8"/>}
          </form>
          
            <div className="flex flex-col bg-[#E5E7EB80] gap-3 p-5 rounded-[16px]">
                <span className="font-bold text-[14px]">💡 Tips keamanan:</span>
                <ul className="flex flex-col gap-[6px] list-none text-[#6B7280] text-[12px]">
                    <ListRight show="Pastikan kamu memeriksa folder spam/junk email"/>
                    <ListRight show="Tautan reset hanya berlaku selama 30 menit"/>
                    <ListRight show="Jangan bagikan tautan reset kepada siapapun"/>
                </ul>
            </div>
            <div className="text-[14px] text-[#6B7280] flex justify-center gap-1">
                <span>Ingat katasandi kamu?</span>
                <Link 
                    to="/" 
                    className="text-[#1A73E8]"
                    >
                        Masuk Sekarang
                </Link>
            </div>
        </div>
      </aside>
  )

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 w-full h-screen font-sans">
      {<AsideLeft />}
      {AsideRight}
    </main>
  );
}