import React from 'react';
import { useForm } from 'react-hook-form';
import { 
  useNavigate, 
  useLocation 
} from 'react-router';
import InputField from '../../components/auth/InputField.jsx';
import ButtonAccount from '../../components/auth/ButtonAccount.jsx';
import Line from '../../components/auth/Line.jsx';
import Button from '../../components/auth/Button.jsx';
import SyaratKebijakan from '../../components/auth/SyaratKebijakan.jsx';

export default function Login() {
  const emailRef = React.useRef();
  const sandiRef = React.useRef();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
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
        email: emailRef.current?.value || '',
        sandi: sandiRef.current?.value || ''
      }
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const sandi = sandiRef.current.value;

    const userSaved = localStorage.getItem("users");
    if (!userSaved) {
      alert("Akun tidak ditemukan");
      return;
    }

    const users = JSON.parse(userSaved);
    const user = users.find(user => user.email === email && atob(user.password) === sandi);

    if (!user) {
      alert("Email atau kata sandi salah!");
      return;
    }

    const userActived = {
      status: true,
      user: user
    };

    localStorage.setItem("userActived", JSON.stringify(userActived));
    console.log(userActived)
    alert("Login Berhasil!");
    window.location.href = "/old/index.html";
  };

  return (
    <div className="flex flex-col w-full gap-8 m-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-[28px] font-bold text-[#111827]">Masuk ke Akun</h1>
        <p className="text-[14px] text-[#6B7280]">
          Belum punya akun?{' '}
          <button onClick={() => handleNavigate('/auth/register')} className="text-[#1A73E8] font-medium hover:underline">
            Daftar gratis
          </button>
        </p>
      </div>       
      
      <div className="grid grid-cols-2 gap-3 text-[14px] font-medium text-[#6B7280]">
        <ButtonAccount result="Google"/>
        <ButtonAccount result="Facebook"/>
      </div>

      <Line line="atau masuk dengan email"/>

      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <InputField
          src="/assets/auth/login/email.svg"
          label="Email"
          name="email"
          type="email"
          placeholder="email@contoh.com"
          ref={emailRef}
        />

        <div className="relative w-full">
          <InputField
            src="/assets/auth/login/lock.svg"
            label="Kata Sandi"
            name="sandi"
            type="password"
            placeholder="Masuk kata sandi"
            ref={sandiRef}
          />
          <button 
            type="button" 
            onClick={() => handleNavigate('/auth/forgot-password')}
            className="absolute right-0 top-0 text-[14px] text-[#1A73E8] hover:underline"
          >
            Lupa kata sandi?
          </button>
        </div>

        <Button src="/assets/auth/login/masuk.svg" action="Masuk" order="2" color="#1A73E8"/>
      </form>
      
      <span className="self-center text-[12px] text-[#6B7280]">🔒 Login aman dengan enkripsi SSL 256-bit</span>
      <SyaratKebijakan first="Dengan masuk, kamu menyetujui" last="kami."/>
    </div>
  );
}