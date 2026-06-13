import { useState, useEffect } from 'react';
import InputField from '../components/auth/InputField.jsx';
import Logo from '../components/auth/Logo.jsx'
import ButtonAccount from '../components/auth/ButtonAccount.jsx';
import HeaderAuth from '../components/auth/HeaderAuth.jsx';
import Line from '../components/auth/Line.jsx';

export default function Login() {
  const [email, setEmail] = useState('');
  const [sandi, setSandi] = useState('');
  const [isRemember, setIsRemember] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("userActived");
    if (login) {
      const userLogin = JSON.parse(login);
      if (userLogin.status === true) {
        if (userLogin.expired) {
          const now = new Date().getTime();
          const thirtyDays = 30 * 24 * 60 * 60 * 1000;
          if (now - userLogin.expired < thirtyDays) {
            window.location.href = "/old/index.html";
          } else {
            localStorage.removeItem("userActived");
          }
        } else {
          window.location.href = "/old/index.html";
        }
      }
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const userSaved = localStorage.getItem("users");
    if (!userSaved) {
      alert("Akun tidak ditemukan");
      return;
    }

    const users = JSON.parse(userSaved);
    const user = users.find(u => u.email === email && u.password === sandi);

    if (!user) {
      alert("Email atau kata sandi salah!");
      return;
    }

    const userActived = {
      status: true,
      email: user.email,
      ...(isRemember && { expired: new Date().getTime() })
    };

    localStorage.setItem("userActived", JSON.stringify(userActived));
    alert("Login Berhasil!");
    window.location.href = "/old/index.html";
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 w-full h-screen font-sans">
      <aside className="relative hidden md:flex flex-col justify-between w-full h-full p-12 bg-[#193CB8]">
        {<Logo />}
        <div className="z-10 flex flex-col gap-4">
            <span className="font-bold text-[32px] text-white">Belanja lebih<br />mudah, hidup lebih<br />praktis</span>
            <span className="text-[16px] text-[#FFFFFFB2]">Ribuan produk pilihan dengan harga<br />terbaik, pengiriman cepat, dan<br />pembayaran yang aman.</span>
        </div>
        <span className="z-10 text-[12px] text-[#FFFFFF66]">© 2026 BeliMudah. Seluruh hak cipta dilindungi.</span>
      </aside>

      <aside className="flex p-[10px] md:p-[20%] items-center">
        <div className="flex flex-col w-full gap-8 m-auto">
          {<HeaderAuth
            Header="Masuk ke Akun"
            SubHeader="Belum punya akun?"
            SubHeaderLink="Daftar gratis"
          />}          
          <div className="grid grid-cols-2 gap-3 text-[14px] font-medium text-[#6B7280]">
            {<ButtonAccount result="Google"/>}
            {<ButtonAccount result="Facebook"/>}
          </div>

          {<Line line="atau masuk dengan email"/>}

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <InputField
              src="/assets/auth/login/email.svg"
              label="Email"
              name="email"
              type="email"
              placeholder="email@contoh.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
              src="/assets/auth/login/lock.svg"
              label="Kata Sandi"
              name="sandi"
              type="password"
              placeholder="Masuk kata sandi"
              value={sandi}
              onChange={(e) => setSandi(e.target.value)}
            />

            <div className="flex gap-2 text-[14px]">
              <input type="checkbox" name="time_access" checked={isRemember} onChange={(e) => setIsRemember(e.target.checked)} />
              <label className="text-[#6B7280]">Ingat saya selama 30 hari</label>
            </div>

            <button type="submit" className="flex bg-[#1A73E8] items-center justify-center gap-2 p-[14px] rounded-[12px]">
              <span className="text-white text-[16px]">Masuk</span>
            </button>
          </form>
        </div>
      </aside>
    </main>
  );
}