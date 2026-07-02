import React from 'react'
import { LuShield } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";

function StepThird() {
  function MetodePayment (props) {
    return (
      <div className="border border-gray-400 p-3 rounded-lg flex items-center w-full gap-2">
        <input 
          id={props.metode}
          name="metodePayment"
          type="radio" 
          value={props.metode}
        />
        <label htmlFor={props.type} className="flex flex-row items-center gap-1">
          {props.thumb}
          <span className="text-xs font-medium">{props.metode}</span>
        </label>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-[80%] m-auto px-4 py-8 gap-10 ">
    <div className="flex flex-col w-full px-[17%] gap-10">
      {/* Stepper */}
      <div className="flex items-center justify-center h-20">
        <div className="flex items-center w-fit">
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
              <span className="text-md text-white">1</span>
            </div>
            <span className="text-sm text-blue-700">Pengiriman</span>
          </div>
        </div>
          <div className="flex px-2 pb-6 w-[50%]">
            <div className="self-start border border-red-600 w-full"></div>
          </div>

        <div className="flex items-center w-fit">
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
              <span className="text-md text-white">2</span>
            </div>
            <span className="text-sm text-gray-500">Pembayaran</span>
          </div>
        </div>
          <div className="flex px-2 pb-6 w-[50%]">
            <div className="self-start border border-red-600 w-full"></div>
          </div>

        <div className="flex items-center w-fit">
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
              <span className="text-md text-white">3</span>
            </div>
            <span className="text-sm text-gray-500">Konfirmasi</span>
          </div>
        </div>
      </div>
    </div>

    {/* Main */}
    <div className="w-full grid grid-cols-[2fr_1fr] gap-8 ">
      {/* Metode Payment */}
      <div className="border border-gray-200 flex flex-col bg-white shadow-xs rounded-xl p-4 self-start gap-6 ">
        <span className="text-md font-bold">Metode Pembayaran</span>
        <div className="flex flex-col w-full h-fit items-start gap-1 bg-gray-100 p-4 rounded-lg shadow-sm">
          <span className="text-md">Alamat Pengiriman</span>
          <span className="text-sm text-gray-500">Budi Santoso · 0812-3456-7890</span>
          <span className="text-sm text-gray-500">Jl. Kebon Jeruk No. 15, Jakarta Barat, DKI Jakarta 11530</span>
        </div>
        <div className="flex flex-col w-full h-fit items-start gap-1 bg-gray-100 p-4 rounded-lg shadow-sm">
          <span className="text-md">Metode Pengiriman</span>
          <span className="text-sm text-gray-500">JNE Reguler · 3-5 hari kerja</span>
        </div>
        <div className="flex flex-col w-full h-fit items-start gap-2 bg-gray-100 p-4 rounded-lg shadow-sm">
          <span className="text-md">Produk yang Dipesan</span>
          <div className="w-full flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10">
                <img
                  src="/assets/products/Headphone Wireless Premium.svg"
                  alt="Headphone Wireless Premium"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-600 ">Headphone Wireless Premium</span>
                <span className="text-xs text-gray-500 ">x1</span>
              </div>
            </div>
            <span className="justify-self-end text-blue-500 font-medium text-xl">Rp 450.000</span>
          </div>   
        </div>

        <div className=" flex gap-3 p-4 items-start bg-blue-100 rounded-md">
          <LuShield color='blue' siz={12} />
          <span className="text-xs text-gray-400">Dengan menekan "Bayar Sekarang", kamu menyetujui Syarat & Ketentuan kami. Pembayaran baru akan
diproses setelah kamu mengkonfirmasi di langkah ini.</span>
        </div>

        <div className="grid w-full grid-cols-[1fr_4fr] gap-3">
          <button
            className="border border-gray-200 text-gray-400 font-medium items-center w-full py-3 px-5 rounded-xl"
          >Kembali</button>
          <button 
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-orange-500 text-white font-medium"
          >
            <IoLockClosedOutline color="white" />
            <span className="text-white font-medium">Bayar Rp {(450000).toLocaleString()} Sekarang</span></button>
        </div>
        {/* Input FIeld */}
        
      </div>
      {/* Ringkasan */}
      <div className="border border-gray-200 flex flex-col bg-white shadow-xs rounded-xl p-4 self-start gap-6 ">
        <span className="text-md font-semibold">Ringkasan Pesanan</span>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <div className="w-10 h-10">
              <img
                src="/assets/products/Headphone Wireless Premium.svg"
                alt="Headphone Wireless Premium"
                className="rounded-md"
              />
            </div>
            <span className="text-xs text-gray-600 ">Headphone Wireless Premium</span>
          </div>
          <span className="text-xs font-semibold ">x1</span>
        </div>
        <div className="grid grid-cols-2 w-full border-t gap-2 border-gray-300 py-2">
          <span className="text-gray-500 text-md">Subtotal</span>
          <span className="justify-self-end text-gray-500 text-md">Rp 450.000</span>
          <span className="text-gray-500 text-md">Ongkir</span>
          <span className="justify-self-end text-green-600 text-md ">Gratis</span>
          <div className="border-t border-gray-300 col-span-2 w-full flex justify-between items-center py-1">
            <span className="text-md text-gray-700">Total</span>
            <span className="justify-self-end text-blue-500 font-bold text-xl">Rp 450.000</span>
          </div>
        </div>
        <span className="flex items-center justify-center text-xs text-gray-500">🔒 Pembayaran aman dan terenkripsi</span>
      </div>
    </div>
    </div>
  )
}

export default StepThird