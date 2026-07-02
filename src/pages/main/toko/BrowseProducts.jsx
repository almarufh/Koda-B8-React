import React from 'react'
import PathProduct from '../../../components/main/PathProduct'
import { GetStar } from '../../../components/main/Star';
import FilterPrice from '../../../components/main/toko/FilterPrice';

function BrowseProducts() {
  const path = ['Beranda', 'Toko'];

  function ListCheckBOx (props) {
    return (
      <div className="flex gap-2">
        <input 
          type="checkbox" 
          id={props.text}
        />
        <label htmlFor={props.text} className="text-sm text-gray-500">{props.text}</label>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-[80%] m-auto px-4 py-6 gap-6 ">
      <PathProduct 
        paths={path}
      />
      <span className="text-lg font-bold">Semua Product</span>
      <div className="grid grid-cols-[3fr_7fr] gap-6">
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-3 justify-between">            
            <span htmlFor="harga" className="font-semibold text-md">Harga</span>
            <FilterPrice />
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-md">Merek</span>
            <form className="flex flex-col gap-2">
              <ListCheckBOx 
                text="TechMaster"
              />
              <ListCheckBOx 
                text="TechMaster"
              />
              <ListCheckBOx 
                text="TechMaster"
              />
              <ListCheckBOx 
                text="TechMaster"
              />
              <ListCheckBOx 
                text="TechMaster"
              />
              <ListCheckBOx 
                text="TechMaster"
              />
              <ListCheckBOx 
                text="TechMaster"
              />
              <ListCheckBOx 
                text="TechMaster"
              />
            </form>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-md">Rating Minimum</span>
            <form 
              action="" 
              className="flex flex-col gap-2"
            >
              <div className="flex gap-2">
                <input 
                  id="starUp4"
                  type="radio" 
                />
                <label htmlFor="starUp4" className="flex gap-2">
                  <GetStar 
                    ratingValue={4}
                  />
                  <span className="text-sm text-gray-500">ke atas</span>
                </label>
              </div>
              <div className="flex gap-2">
                <input 
                  id="starUp3"
                  type="radio" 
                />
                <label htmlFor="starUp3" className="flex gap-2">
                  <GetStar 
                    ratingValue={3}
                  />
                  <span className="text-sm text-gray-500">ke atas</span>
                </label>
              </div>
              <div className="flex gap-2">
                <input 
                  id="starUp2"
                  type="radio" 
                />
                <label htmlFor="starUp2" className="flex gap-2">
                  <GetStar 
                    ratingValue={2}
                  />
                  <span className="text-sm text-gray-500">ke atas</span>
                </label>
              </div>
            </form>
          </div>
          <form className="flex flex-col gap-3 justify-between">
            <span className="font-semibold text-md">Ketersediaan</span>
            <ListCheckBOx 
                text="Stok tersedia"
              />
          </form>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">18 produk ditemukan</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Urutkan:</span>
              <button 
                className="flex items-center justify-center text-xs font-semibold px-4 py-2 bg-white shadow-sm rounded-lg border border-[#0000001A]"
                >Paling Populer</button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="border w-full h-40"></div>
          </div>
          <div className="flex justify-center items-end pt-1">
            <button className="flex items-center justify-center py-2 px-8 bg-white shadow-sm border border-blue-500 rounded-lg">
              <span className="text-blue-500 text-sm">Muat Lebih Banyak ({"6 produk lagi"})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseProducts