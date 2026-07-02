import { useLocation } from 'react-router';
import Logo from '../../components/auth/Logo.jsx';
import BannerFooter from '../../components/auth/BannerFooter.jsx';

function ListLeft({ show }) {
  return (
    <div className="flex gap-3 w-full">
      <div className="bg-[#FFFFFF33] rounded-[999px] w-[20px] h-[20px] grid place-items-center">
        <img className="aspect-square" src="/assets/auth/register/ceklis.svg" alt="Ceklist" />
      </div>
      <span className="text-[14px] text-[#FFFFFFCC]">{show}</span>
    </div>
  );
}

export default function AuthSidebar() {
  const location = useLocation();
//   console.log("useLocation", location)
  const path = location.pathname;

  if (path.includes('/auth/login') || path === '/auth') {
    return (
      <aside className="relative bg-[url(/assets/auth/login/Shopping.svg)] bg-cover bg-center hidden md:flex flex-col justify-between w-full h-full p-12 bg-[#193CB8]">
        <Logo />
        <div className="z-10 flex flex-col gap-4">
          <span className="font-bold text-[32px] text-white">Belanja lebih<br />mudah, hidup lebih<br />praktis</span>
          <span className="text-[16px] text-[#FFFFFFB2]">Ribuan produk pilihan dengan harga<br />terbaik, pengiriman cepat, dan<br />pembayaran yang aman.</span>
        </div>
        <BannerFooter />
      </aside>
    );
  }

  if (path.includes('/auth/forgot-password')) {
    return (
      <aside className="relative bg-[url(/assets/auth/forgot/Security.svg)] bg-cover bg-center hidden md:flex flex-col justify-between w-full h-full p-12 bg-[#193CB8]">
        <Logo />
        <div className="z-10 flex flex-col gap-4">
          <span className="flex justify-center items-center bg-[#FFFFFF1A] rounded-[12px] w-fit h-fit px-3 py-2 text-[12px] text-[#FFFFFF]">🔐</span>
          <span className="font-bold text-[32px] text-white">Akun kamu aman<br />bersama kami</span>
          <span className="text-[16px] text-[#FFFFFFB2]">Kami menggunakan enkripsi tingkat militer<br/>untuk menjaga keamanan data dan transaksimu.</span>
          <div className="flex flex-col gap-2 text-white/80 text-[14px]">
            <span>🔒 Enkripsi SSL 256-bit</span>
            <span>🛡️ Perlindungan data pribadi</span>
            <span>📧 Verifikasi dua langkah</span>
          </div>
        </div>
        <BannerFooter />
      </aside>
    );
  }

  return (
    <aside className="relative bg-[url(/assets/auth/register/Shopping_bags.svg)] bg-cover bg-center hidden md:flex flex-col justify-between w-full h-full p-12 bg-[#193CB8]">
      <Logo />
      <div className="z-10 flex flex-col gap-4">
        <span className="font-bold text-[32px] text-white">Bergabung dengan<br />500.000+ pelanggan<br />puas</span>
        <div className="flex flex-col gap-3">
          <ListLeft show="Akses ribuan produk dengan harga terbaik" />
          <ListLeft show="Lacak pesanan secara real-time" />
          <ListLeft show="Simpan wishlist & alamat favorit" />
          <ListLeft show="Dapatkan notifikasi promo eksklusif" />
        </div>
      </div>
      <BannerFooter />
    </aside>
  );
}