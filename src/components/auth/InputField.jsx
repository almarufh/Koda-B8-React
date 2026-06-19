import { useState } from 'react';
import { Link } from 'react-router';
import { 
  FaRegEye, 
  FaRegEyeSlash 
} from "react-icons/fa";

function InputField(props) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = props.type === 'password';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getInputType = () => {
    if (isPasswordType) {
      return showPassword ? 'text' : 'password';
    }
    return props.type;
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-2 text-[14px] text-[#111827] justify-between items-center">
        <label htmlFor={props.name} className="text-[14px] text-[#111827]">
          {props.label}
        </label>
        {props.show && (
          <Link 
            className='text-[#1A73E8] justify-self-end' 
            to="/auth/forgot-password"
          >
            Lupa kata sandi?
          </Link>
        )}
      </div>
      <div className="relative flex items-center gap-3 border border-[#0000001A] bg-[#F3F4F6] py-[13.5px] px-[16px] rounded-[12px] focus-within:border-[#1A73E8]">
        <img 
          src={props.src} 
          alt={props.name} 
        />
        <input
          id={props.name}
          className="bg-transparent w-full outline-none pr-8"
          name={props.name}
          type={getInputType()}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          autoComplete={props.type === "password" ? "current-password" : "on"}
          ref={props.ref}
          required
        />
        {isPasswordType && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 flex items-center justify-center text-[#6B7280] hover:text-[#111827] focus:outline-none"
          >
            {showPassword ? (
              <FaRegEyeSlash />
            ) : (
              <FaRegEye />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;