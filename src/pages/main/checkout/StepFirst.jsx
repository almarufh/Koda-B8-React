import React from 'react'
import { LuTruck } from "react-icons/lu";
import Input from '../../../components/Input'

function StepFirst() {
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
      {/* Addres */}
      <form className="border border-gray-200 flex flex-col bg-white shadow-xs rounded-xl p-4 self-start gap-6 ">
        <div className="flex w-full h-fit items-center gap-2">
          <LuTruck color='#1A73E8' />
          <span className="text-md font-semibold">Alamat Pengiriman</span>
        </div>
        {/* Input FIeld */}
        <div className="grid grid-cols-2 w-full h-fit gap-4"
        >
          <Input
            type="text"
            field="name"
            label="Nama Penerima *"
            placeholder="Nama Lengkap" 
          />
          <Input
            type="number"
            field="telepon"
            label="Nomoor Telepon *"
            placeholder="082393468568" 
          />
          <div className="col-span-2">
            <Input
              type="email"
              field="email"
              label="Email *"
              placeholder="contoh@gmail.com" 
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              field="alamat"
              label="Alamat Lengkap *"
              placeholder="Jl. Salak No.18" 
            />
          </div>
          <Input
            type="text"
            field="kota"
            label="Kota *"
            placeholder="Bone" 
          />
          <Input
            type="text"
            field="provinsi"
            label="Provinsi *"
            placeholder="Sulawesi Selatan" 
          />
          <Input
            type="text"
            field="pos"
            label="Kode Pos *"
            placeholder="92963" 
          />
          <Input
            type="text"
            field="catatan"
            label="Catatan (opsional)"
            placeholder="Warna pagar, dll" 
          />
        </div>
        <span className="text-md font-semibold">Metode Pengiriman</span>

        {/* Metode Pengiriman */}
        <div className="flex flex-col gap-3">
          <div className="border border-gray-300 flex justify-between gap-3 p-4 rounded-xl">
            <input
              type="radio"
              id="ekspedisi"
              name="ekspedisi"
              className="flex w-fit"
            />
            <div className="w-full flex justify-between items-center">
              <label
                htmlFor="ekspedisi"
                className="flex flex-col"
              >
                <span className="text-sm font-semibold">JNE Reguler</span>
                <span className="text-xs text-gray-500">3-5 hari kerja</span>
              </label>
              <span className="text-green-500 text-xs font-semibold">GRATIS</span>
            </div>
          </div>

          <div className="border border-gray-300 flex justify-between gap-3 p-4 rounded-xl">
            <input
              type="radio"
              id="ekspedisi"
              name="ekspedisi"
              className="flex w-fit"
            />
            <div className="w-full flex justify-between items-center">
              <label
                htmlFor="ekspedisi"
                className="flex flex-col"
              >
                <span className="text-sm font-semibold">JNE Express</span>
                <span className="text-xs text-gray-500">3-5 hari kerja</span>
              </label>
              <span className="text-green-500 text-xs font-semibold">GRATIS</span>
            </div>
          </div>

          <div className="border border-gray-300 flex justify-between gap-3 p-4 rounded-xl">
            <input
              type="radio"
              id="ekspedisi"
              name="ekspedisi"
              className="flex w-fit"
            />
            <div className="w-full flex justify-between items-center">
              <label
                htmlFor="ekspedisi"
                className="flex flex-col"
              >
                <span className="text-sm font-semibold">Same Day Delivery</span>
                <span className="text-xs text-gray-500">3-5 hari kerja</span>
              </label>
              <span className="text-green-500 text-xs font-semibold">GRATIS</span>
            </div>
          </div>
          <button 
            className="flex items-center justify-center py-3.5 rounded-xl text-white text-md bg-blue-600"
          >Lanjut ke Pembayaran</button>
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

export default StepFirst