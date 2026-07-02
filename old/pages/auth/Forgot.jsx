import React from 'react';
import { 
  useNavigate, 
  useLocation 
} from 'react-router';
import InputField from '../../components/auth/InputField.jsx';
import HeaderAuth from '../../components/auth/HeaderAuth.jsx';
import Button from '../../components/auth/Button.jsx';

function ListRight({ show }) {
  return (
    <li className="flex items-start">
      <span className="mr-2">•</span>
      <span>{show}</span>
    </li>
  );
}

export default function Forgot() {
  const emailRef = React.useRef();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.state?.email) {
      emailRef.current.value = location.state.email;
    }
  }, [location.state]);

  const handleBackToLogin = () => {
    navigate('/auth/login', {
      state: {
        email: emailRef.current?.value || ''
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    
    if (!email) {
      alert("Silakan masukkan alamat email Anda!");
      return;
    }

    const userSaved = localStorage.getItem("users");
    if (!userSaved) {
      alert("Tidak ada akun yang terdaftar di sistem.");
      return;
    }

    const users = JSON.parse(userSaved);
    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex === -1) {
      alert("Email tidak ditemukan dalam sistem kami.");
      return;
    }

    users.splice(userIndex, 1);
    localStorage.setItem("users", JSON.stringify(users));

    const activeUser = localStorage.getItem("userActived");
    if (activeUser) {
      const parsedActive = JSON.parse(activeUser);
      if (parsedActive.email === email) {
        localStorage.removeItem("userActived");
      }
    }

    alert("Akun lama berhasil dihapus. Silakan lakukan pendaftaran ulang.");
    navigate("/auth/register", { state: { email } });
  };

  return (
    <div className="flex flex-col w-full gap-8 m-auto">
      <HeaderAuth
        Header="Hapus & Daftar Ulang"
        SubHeader="Masukkan email Anda untuk menghapus data akun lama yang bermasalah dan membuat ulang akun baru."
      /> 

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <InputField
          src="/assets/auth/login/email.svg"
          label="Alamat Email Akun"
          name="AlamatEmail"
          type="email"
          placeholder="email@contoh.com"
          ref={emailRef}
        />

        <Button src="/assets/auth/forgot/send.svg" action="Hapus Akun & Daftar Ulang" order="none" color="#DC2626"/>
      </form>
      
      <div className="flex flex-col bg-[#E5E7EB80] gap-3 p-5 rounded-[16px]">
        <span className="font-bold text-[14px]">💡 Peringatan Keamanan:</span>
        <ul className="flex flex-col gap-[6px] list-none text-[#6B7280] text-[12px]">
          <ListRight show="Tindakan ini akan menghapus seluruh data akun lama Anda secara permanen"/>
          <ListRight show="Pastikan Anda mendaftarkan kembali email yang sama setelah proses ini selesai"/>
        </ul>
      </div>

      <div className="text-[14px] text-[#6B7280] flex justify-center gap-1">
        <span>Ingat katasandi kamu?</span>
        <button onClick={handleBackToLogin} className="text-[#1A73E8] hover:underline font-medium">
          Masuk Sekarang
        </button>
      </div>
    </div>
  );
}