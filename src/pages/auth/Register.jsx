import { useState, useEffect } from 'react';
import InputField from '../../components/auth/InputField.jsx';
import Logo from '../../components/auth/Logo.jsx'
import ButtonAccount from '../../components/auth/ButtonAccount.jsx';
import HeaderAuth from '../../components/auth/HeaderAuth.jsx';
import Line from '../../components/auth/Line.jsx';
import BannerFooter from '../../components/auth/BannerFooter.jsx';
import Button from '../../components/auth/Button.jsx';
import SyaratKebijakan from '../../components/auth/SyaratKebijakan.jsx'

export default function Register() {

function ListLeft (props) {
    return (
        <div className="flex gap-3 w-full">
            <div className="bg-[#FFFFFF33] rounded-[999px] w-[20px] h-[20px] grid place-items-center">
                <img className="aspect-square" src="/assets/auth/register/ceklis.svg" alt="Ceklist"/>
            </div>
            <span className="text-[14px] text-[#FFFFFFCC]">{props.show}</span>
        </div>
    )
}

function AsideLeft () {
    return (
      <aside className="relative bg-[url(/assets/auth/register/Shopping_bags.svg)] bg-cover bg-center hidden md:flex flex-col justify-between w-full h-full p-12 bg-[#193CB8]">
        <Logo />
        <div className="z-10 flex flex-col gap-4">
            <span className="font-bold text-[32px] text-white">Bergabung dengan<br />500.000+ pelanggan<br />puas</span>
            <div className="flex flex-col gap-3">
                {<ListLeft show="Akses ribuan produk dengan harga terbaik"/>}
                {<ListLeft show="Lacak pesanan secara real-time"/>}
                {<ListLeft show="Simpan wishlist & alamat favorit"/>}
                {<ListLeft show="Dapatkan notifikasi promo eksklusif"/>}
            </div>
        </div>
        <BannerFooter/>
      </aside>
    )
  }

  const AsideRight = (
    <aside className="flex p-[10px] md:p-[20%] items-center">
        <div className="flex flex-col w-full gap-8 m-auto">
          {<HeaderAuth
            Header="Buat Akun Baru"
            SubHeader="Sudah punya akun?"
            SubHeaderLink="Masuk di sini"
            Src="/"
          />}          
          <div className="grid grid-cols-2 gap-3 text-[14px] font-medium text-[#6B7280]">
            {<ButtonAccount result="Daftar via Google"/>}
            {<ButtonAccount result="Daftar via Facebook"/>}
          </div>

          {<Line line="atau daftar dengan email"/>}

          <form 
            onSubmit="" 
            className="flex flex-col gap-5">
            <InputField
              src="/assets/auth/register/person.svg"
              label="NamaLengkap"
              name="NamaLengkap"
              type="text"
              placeholder="Nama lengkap kamu"
            />

            <InputField
              src="/assets/auth/login/email.svg"
              label="Email"
              name="email"
              type="email"
              placeholder="email@contoh.com"
            />

            <InputField
              src="/assets/auth/login/lock.svg"
              label="Kata Sandi"
              name="sandi"
              type="password"
              placeholder="Masuk kata sandi"
            />

            <InputField
              src="/assets/auth/login/lock.svg"
              label="Konfirmasi Kata Sandi"
              name="confirmSandi"
              type="password"
              placeholder="Masuk kata sandi"
            />

            <div className="flex gap-2 text-[14px]">
              <input 
                type="checkbox" 
                name="time_access" 
                />
              {<SyaratKebijakan first="Saya menyetujui" last="BeliMudah"/>}
            </div>

            {<Button 
                src="/assets/auth/register/pintu.svg" 
                action="Daftar Sekarang" 
                order="1"
                color="#F97316"/>
            }

          </form>
            <span class="self-center text-[12px] text-[#6B7280]">🔒 Data kamu aman dan terenkripsi</span>
        </div>
      </aside>
  )

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 w-full h-screen font-sans">
      <AsideLeft />
      {AsideRight}
    </main>
  );
}