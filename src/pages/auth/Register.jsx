import React from 'react';
import { 
  useNavigate, 
  useLocation 
} from 'react-router';
import InputField from '../../components/auth/InputField.jsx';
import ButtonAccount from '../../components/auth/ButtonAccount.jsx';
import Line from '../../components/auth/Line.jsx';
import Button from '../../components/auth/Button.jsx';
import SyaratKebijakan from '../../components/auth/SyaratKebijakan.jsx';

export default function Register() {
  const namaRef = React.useRef();
  const emailRef = React.useRef();
  const sandiRef = React.useRef();
  const confirmSandiRef = React.useRef();
  const agreeRef = React.useRef();
  
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.state?.namaLengkap) {
      namaRef.current.value = location.state.namaLengkap;
    }
    if (location.state?.email) {
      emailRef.current.value = location.state.email;
    }
    if (location.state?.sandi) {
      sandiRef.current.value = location.state.sandi;
    }
  }, [location.state]);

  const handleNavigate = (toUrl) => {
    navigate(toUrl, {
      state: {
        namaLengkap: namaRef.current?.value || '',
        email: emailRef.current?.value || '',
        sandi: sandiRef.current?.value || ''
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const namaLengkap = namaRef.current.value;
    const email = emailRef.current.value;
    const sandi = sandiRef.current.value;
    const confirmSandi = confirmSandiRef.current.value;
    const isAgree = agreeRef.current.checked;

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

    users.push({ 
      nama: namaLengkap, 
      email, 
      password: btoa(sandi)
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Pendaftaran Berhasil! Silakan login.");
    navigate("/auth/login", { state: { email } });
  };

  return (
    <div className="flex flex-col w-full gap-8 m-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-[28px] font-bold text-[#111827]">Buat Akun Baru</h1>
        <p className="text-[14px] text-[#6B7280]">
          Sudah punya akun?{' '}
          <button onClick={() => handleNavigate('/auth/login')} className="text-[#1A73E8] font-medium hover:underline">
            Masuk di sini
          </button>
        </p>
      </div>          
      
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
          ref={namaRef}
        />

        <InputField
          src="/assets/auth/login/email.svg"
          label="Email"
          name="email"
          type="email"
          placeholder="email@contoh.com"
          ref={emailRef}
        />

        <InputField
          src="/assets/auth/login/lock.svg"
          label="Kata Sandi"
          name="sandi"
          type="password"
          placeholder="Masuk kata sandi"
          ref={sandiRef}
        />

        <InputField
          src="/assets/auth/login/lock.svg"
          label="Konfirmasi Kata Sandi"
          name="confirmSandi"
          type="password"
          placeholder="Masuk kata sandi"
          ref={confirmSandiRef}
        />

        <div className="flex gap-2 text-[14px]">
          <input 
            type="checkbox" 
            name="time_access" 
            ref={agreeRef}
          />
          <SyaratKebijakan first="Saya menyetujui" last="BeliMudah"/>
        </div>

        <Button src="/assets/auth/register/pintu.svg" action="Daftar Sekarang" order="1" color="#F97316"/>
      </form>
      
      <span className="self-center text-[12px] text-[#6B7280]">🔒 Data kamu aman dan terenkripsi</span>
    </div>
  );
}