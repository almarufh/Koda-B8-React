import React from 'react'
import { FiCreditCard } from "react-icons/fi";
import { RiBankLine, RiBankCardLine } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";

function StepSecond() {
  function MetodePayment (props) {
    return (
      <div className="border border-gray-300 p-3 rounded-lg flex items-center w-full gap-2">
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
      <form className="border border-gray-200 flex flex-col bg-white shadow-xs rounded-xl p-4 self-start gap-6 ">
        <div className="flex w-full h-fit items-center gap-2">
          <FiCreditCard color='#1A73E8' />
          <span className="text-md font-semibold">Metode Pembayaran</span>
        </div>
        {/* Input FIeld */}
        <div className="grid grid-cols-3 gap-3">
          <MetodePayment 
            metode='QRIS'
            thumb={<BsQrCode color='green'/>}
            />
          
          <MetodePayment 
            metode='Virtual Account BCA'
            thumb={<RiBankLine color='green'/>}
          />
          
          <MetodePayment 
            metode='Kartu Kredit'
            thumb={<RiBankCardLine color='green'/>}
          />

          <MetodePayment 
            metode='GoPay'
            thumb={<MdPayments color='green'/>}
          />

          <MetodePayment 
            metode='OVO'
            thumb={<MdPayments color='green'/>}
          />

          <MetodePayment 
            metode='DANA'
            thumb={<MdPayments color='green'/>}
          />

        </div>
        <div className="flex items-center bg-blue-50 p-3 rounded-lg gap-1">
          <IoLockClosedOutline color='blue' />
          <span className="text-xs text-gray-400">Informasi pembayaranmu dienkripsi dengan SSL 256-bit. Kami tidak menyimpan data kartu kreditmu.</span>
        </div>
        <div className="grid grid-cols-[1fr_4fr] gap-3">
          <button
            className="border border-gray-200 text-gray-400 font-medium items-center w-full py-3 px-5 rounded-xl"
          >Kembali</button>
          <button 
            className="items-center w-full rounded-xl bg-blue-500 text-white font-medium"
          >Lanjut ke Konfirmasi</button>
        </div>
        
      </form>
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

export default StepSecond