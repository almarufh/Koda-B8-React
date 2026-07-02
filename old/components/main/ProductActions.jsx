import React from 'react';

function ProductActions(props) {
  return (
    <div className="flex items-center gap-3 w-full bg-[#F8F9FA] p-2">
      <button 
          type="button"
          onClick={props.onAddToCart}
          className="flex gap-2 items-center justify-center border-2 border-[#F97316] rounded-[16px] py-[14px] bg-[#F8F9FA] hover:bg-[#F97316]/5 transition-colors w-[53%]"
        >
        <img 
          src="/assets/main/landingpage/craft.svg" 
          alt="Keranjang" 
          className="w-5 h-5" 
        />
        <span className="text-[16px] font-medium text-[#F97316]">
          Tambah ke Keranjang
        </span>
      </button>

      <button 
        type="button"
        onClick={props.onBuyNow}
        className="flex items-center justify-center bg-[#F97316] hover:bg-[#EA580C] rounded-[16px] py-[15px] transition-colors w-[47%]"
      >
        <span className="text-[16px] font-medium text-white">
          Beli Sekarang
        </span>
      </button>
    </div>
  );
}

export default ProductActions;