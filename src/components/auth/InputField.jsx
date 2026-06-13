function InputField({ label, name, type, placeholder, value, onChange, src }) {
  return (
    <div className="flex flex-col gap-1">
        <label htmlFor={name} className="text-[14px] text-[#111827]">
            {label}
        </label>
        <div 
            className="flex items-center gap-3 border border-[#0000001A] bg-[#F3F4F6] py-[13.5px] px-[16px] rounded-[12px]">
            <img 
                src={src} 
                alt={name} 
            />
            <input
                id={name}
                className="bg-transparent w-full outline-none"
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    </div>
  );
}

export default InputField