import { Link } from 'react-router';

function InputField(props) {
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
        <div 
            className="flex items-center gap-3 border border-[#0000001A] bg-[#F3F4F6] py-[13.5px] px-[16px] rounded-[12px]">
            <img 
                src={props.src} 
                alt={props.name} 
            />
            <input
                id={props.name}
                className="bg-transparent w-full outline-none"
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                required
            />
        </div>
    </div>
  );
}

export default InputField