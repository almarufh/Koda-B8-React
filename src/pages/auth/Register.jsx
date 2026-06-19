import { useState } from 'react';
import InputField from '../../components/auth/InputField.jsx';
import ButtonAccount from '../../components/auth/ButtonAccount.jsx';
import HeaderAuth from '../../components/auth/HeaderAuth.jsx';
import Line from '../../components/auth/Line.jsx';
import Button from '../../components/auth/Button.jsx';
import SyaratKebijakan from '../../components/auth/SyaratKebijakan.jsx';

export default function Register() {
  const [namaLengkap, setNamaLengkap] = useState('');
  const [email, setEmail] = useState('');
  const [sandi, setSandi] = useState('');
  const [confirmSandi, setConfirmSandi] = useState('');
  const [isAgree, setIsAgree] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!namaLengkap || !email || !sandi || !confirmSandi) {
      alert("Semua field harus diisi!");
      return;
    }
    if (sandi !== confirmSandi) {
      alert("Konfirmasi kata sandi tidak cocok!");
      return;
    }
    if (!isAgree) {
      alert("Anda harus menyetujui Syarat & Kebijakan!");
      return;
    }
    
    const userSaved = localStorage.getItem("users");
    const users = userSaved ? JSON.parse(userSaved) : [];
    
    if (users.some(u => u.email === email)) {
      alert("Email sudah terdaftar!");
      return;
    }

    users.push({ nama: namaLengkap, email, password: sandi });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Pendaftaran Berhasil! Silakan login.");
    window.location.href = "/auth/login";
  };

  return (
    <div className="flex flex-col w-full gap-8 m-auto">
      <HeaderAuth
        Header="Buat Akun Baru"
        SubHeader="Sudah punya akun?"
        SubHeaderLink="Masuk di sini"
        Src="/auth/login"
      />          
      
      <div className="grid grid-cols-2 gap-3 text-[14px] font-medium text-[#6B7280]">
        <ButtonAccount result="Daftar via Google"/>
        <ButtonAccount result="Daftar via Facebook"/>
      </div>

      <Line line="atau daftar dengan email"/>

      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <InputField
          src="/assets/auth/register/person.svg"
          label="Nama Lengkap"
          name="NamaLengkap"
          type="text"
          placeholder="Nama lengkap kamu"
          value={namaLengkap}
          onChange={(e) => setNamaLengkap(e.target.value)}
        />

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

        <InputField
          src="/assets/auth/login/lock.svg"
          label="Konfirmasi Kata Sandi"
          name="confirmSandi"
          type="password"
          placeholder="Masuk kata sandi"
          value={confirmSandi}
          onChange={(e) => setConfirmSandi(e.target.value)}
        />

        <div className="flex items-start gap-2 text-[14px]">
          <input 
            type="checkbox" 
            name="time_access" 
            checked={isAgree}
            onChange={(e) => setIsAgree(e.target.checked)}
          />
          <SyaratKebijakan first="Saya menyetujui" last="BeliMudah"/>
        </div>

        <Button 
          src="/assets/auth/register/pintu.svg" 
          action="Daftar Sekarang" 
          order="1"
          color="#F97316"
        />
      </form>
      
      <span className="self-center text-[12px] text-[#6B7280]">🔒 Data kamu aman dan terenkripsi</span>
    </div>
  );
}