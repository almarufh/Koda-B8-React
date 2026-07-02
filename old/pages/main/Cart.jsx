import React, { useState, useContext } from 'react';
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";
import { IoPricetagOutline } from "react-icons/io5";
import { HiOutlineHeart } from "react-icons/hi";
import CartContext from '../../contexts/CartContext.jsx';

export default function CartPage() {
  const { cart, setCart } = useContext(CartContext);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  if (!cart || !cart.id) {
    return (
      <div className="w-full max-w-7xl mx-auto px-6 py-16 text-center bg-[#F8F9FA]">
        <h2 className="text-[20px] font-medium text-[#6B7280]">Keranjang belanja Anda masih kosong.</h2>
      </div>
    );
  }

  const subtotal = cart.price * cart.quantity;
  const total = subtotal - discount;

  const handleDecrease = () => {
    if (cart.quantity > 1) {
      setCart(prev => ({ ...prev, quantity: prev.quantity - 1 }));
    }
  };

  const handleIncrease = () => {
    if (cart.quantity < cart.stock) {
      setCart(prev => ({ ...prev, quantity: prev.quantity + 1 }));
    }
  };

  const handleRemoveItem = () => {
    setCart({});
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.toUpperCase().trim();
    
    if (code === 'HEMAT10') {
      setDiscount(50000);
      alert('Promo HEMAT10 berhasil dipasang! Potongan Rp 50.000');
    } else if (code === 'BELIMUDAH' || code === 'NEWUSER') {
      setDiscount(25000);
      alert(`Promo ${code} berhasil dipasang! Potongan Rp 25.000`);
    } else {
      setDiscount(0);
      alert('Kode promo tidak valid.');
    }
  };

  const handleCheckout = () => {
    const payload = {
      items: [
        {
          name: cart.title,
          color: cart.color,
          price: cart.price,
          quantity: cart.quantity
        }
      ],
      subtotal,
      discount,
      totalPayment: total
    };
    alert(JSON.stringify(payload, null, 2));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8 font-sans bg-[#F8F9FA] flex flex-col gap-6">
      <h1 className="text-[24px] font-bold text-[#111827]">
        Keranjang Belanja ({cart.quantity} item)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          <div className="flex items-center justify-between border border-[#E5E7EB] rounded-2xl p-5 bg-white shadow-sm gap-4">
            <div className="flex gap-4 items-center">
              <div className="w-24 h-24 border border-[#E5E7EB] rounded-xl overflow-hidden p-2 bg-white flex items-center justify-center">
                <img src={cart.imageSrc} alt={cart.title} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[16px] font-semibold text-[#111827]">{cart.title}</h3>
                <span className="text-[14px] text-[#6B7280]">{cart.color}</span>
                
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center rounded-xl border border-[#E5E7EB] bg-white overflow-hidden">
                    <button type="button" onClick={handleDecrease} className="px-3 py-2 text-[#4B5563]">
                      <FaMinus size={10} />
                    </button>
                    <span className="px-3 text-[14px] font-semibold text-[#111827] min-w-[20px] text-center">
                      {cart.quantity}
                    </span>
                    <button type="button" onClick={handleIncrease} className="px-3 py-2 text-[#4B5563]">
                      <FaPlus size={10} />
                    </button>
                  </div>

                  <button type="button" className="flex items-center gap-1 text-[13px] text-[#6B7280]">
                    <HiOutlineHeart size={16} />
                    <span>Simpan ke Wishlist</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between h-24 py-1">
              <button type="button" onClick={handleRemoveItem} className="text-[#9CA3AF] hover:text-[#DC2626]">
                <FaTrashCan size={16} />
              </button>
              <span className="text-[16px] font-bold text-[#1A73E8]">
                Rp {subtotal.toLocaleString('id-ID')}
              </span>
            </div>
          </div>

          <div className="border border-[#E5E7EB] rounded-2xl p-6 bg-white shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[16px] font-bold text-[#111827]">
              <IoPricetagOutline size={18} className="text-[#1A73E8]" />
              <h2>Kode Promo</h2>
            </div>
            <form onSubmit={handleApplyPromo} className="flex gap-3 w-full">
              <input 
                type="text" 
                placeholder="Masukkan kode promo"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] outline-none"
              />
              <button type="submit" className="bg-[#1A73E8] text-white text-[14px] font-semibold px-6 py-3 rounded-xl">
                Terapkan
              </button>
            </form>
          </div>
        </div>

        <div className="border border-[#E5E7EB] rounded-2xl p-6 bg-white shadow-sm flex flex-col gap-4">
          <h2 className="text-[18px] font-bold text-[#111827]">Ringkasan Pesanan</h2>
          <div className="flex flex-col gap-3 text-[14px] text-[#6B7280] border-b border-[#F3F4F6] pb-4">
            <div className="flex justify-between">
              <span>Subtotal ({cart.quantity} item)</span>
              <span className="text-[#111827] font-medium">Rp {subtotal.toLocaleString('id-ID')}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-[#DC2626]">
                <span>Diskon Promo</span>
                <span>-Rp {discount.toLocaleString('id-ID')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Ongkos Kirim</span>
              <span className="text-[#00A63E] font-bold text-[12px]">GRATIS</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[16px] font-bold text-[#111827]">
            <span>Total</span>
            <span className="text-[#1A73E8] text-[18px]">Rp {total.toLocaleString('id-ID')}</span>
          </div>

          <button type="button" onClick={handleCheckout} className="w-full bg-[#F97316] text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2">
            <span>Checkout Aman</span>
          </button>
        </div>
      </div>
    </div>
  );
}