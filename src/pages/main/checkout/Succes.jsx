import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { BsBox } from "react-icons/bs";
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

function Succes() {
  return (
    <div className="mx-auto w-[40%] flex flex-col items-center py-12 px-4 gap-8">
      <div className="flex items-center justify-center p-5 bg-green-100 rounded-full">
        <IoMdCheckmarkCircleOutline color="green" size={48} />
      </div>
      <div className="flex flex-col w-full items-center gap-2">
        <span className="text-xl font-bold">Pesanan Berhasil! 🎉</span>
        <span className="text-sm text-gray-400">Terima kasih telah berbelanja di BeliMudah. Pesananmu sedang diproses.</span>
      </div>
      <div className="flex flex-col w-full gap-4 p-6 rounded-md bg-white shadow-md border border-gray-200 ">
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <div className="flex flex-col">
            <span className="text-md text-gray-400">Nomor Pesanan</span>
            <span className="text-lg font-medium text-blue-500">#BC230054567</span>
          </div>
          <div className="flex flex-col items-end ">
            <span className="text-md text-gray-400">Total Pembayaran</span>
            <span className="text-lg font-medium">Rp {(450000).toLocaleString()}</span>
          </div>
        </div>
        <div className="flex w-full items-start gap-3">
          <LiaTruckMovingSolid color='#1A73E8' size={20} />
          <div className="flex flex-col w-full p">
            <span className="text-md">JNE Reguler</span>
            <span className="text-xs text-gray-400">Estimasi tiba: 2-3 Juni 2026</span>
          </div>
        </div>
        <div className="flex w-full items-start gap-3">
          <CiLocationOn color='#1A73E8' size={20} />
          <div className="flex flex-col w-full p">
            <span className="text-md">Alamat Pengiriman</span>
            <span className="text-xs text-gray-400">Jl. Kebon Jeruk No. 15, Jakarta Barat, DKI Jakarta 11530</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 p-6 rounded-md bg-white shadow-md border border-gray-200 ">
        <span className="text-md w-full">Status Pesanan</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center p-2 bg-green-100 rounded-full">
            <IoMdCheckmarkCircleOutline color="green" size={14} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Pesanan Diterima</span>
            <span className="text-xs text-gray-400">Baru saja</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center p-2 bg-gray-200 rounded-full">
            <BsBox size={14} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Sedang Dikemas</span>
            <span className="text-xs text-gray-400">Estimasi 1-2 jam</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center p-2 bg-gray-200 rounded-full">
            <LiaTruckMovingSolid color='gray' size={14} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Dalam Pengiriman</span>
            <span className="text-xs text-gray-400">3-5 Hari</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center p-2 bg-gray-200 rounded-full">
            <CiLocationOn size={14} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Terkirim</span>
            <span className="text-xs text-gray-400">2-3 juni 2026</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full gap-4">
        <button className="flex items-center bg-blue-500 w-full py-3 justify-center rounded-xl gap-2">
          <BsBox color="white" size={12} />
          <span className="text-sm text-white">Lacak Pesanan</span>
        </button>
        <button className="flex items-center w-full py-3 justify-center rounded-xl border border-gray-200">
          <span className="text-sm text-gray-500">Lihat Riwayat Pesanan</span>
        </button>
        <Link
          to='#'
          className="flex items-center justify-center gap-2"
        >
          <span className="text-sm font-medium text-blue-600">Lanjut Belanja</span>
          <FaArrowRight size={12} color="#1A73E8" />
        </Link>
      </div>
    </div>
  )
}

export default Succes