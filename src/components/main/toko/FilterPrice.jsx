import React from 'react';
import { useForm, Controller } from 'react-hook-form';

export default function FilterPrice() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      minPrice: '',
      maxPrice: '',
    }
  });

  const formatRupiah = (value) => {
    const rawValue = value.replace(/\D/g, '');
    if (!rawValue) return '';
    return new Intl.NumberFormat('id-ID').format(Number(rawValue));
  };

  const handleKeyDown = (e) => {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const onSubmit = (data) => {
    const cleanData = {
      minPrice: Number(data.minPrice.replace(/\./g, '')),
      maxPrice: Number(data.maxPrice.replace(/\./g, '')),
    };
    console.log(cleanData);
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="flex gap-1 items-center justify-between"
    >
      <div className="flex items-center gap-0.5 border border-[#0000001A] p-0.5 rounded">
        <label htmlFor="minPrice" className="text-xs text-gray-500">Rp</label>
        <Controller
          name="minPrice"
          control={control}
          render={({ field: { onChange, value } }) => (
            <input
              type="text"
              id="minPrice"
              className="text-xs text-gray-500 outline-none w-full"
              placeholder="0"
              value={value}
              onKeyDown={handleKeyDown}
              onChange={(e) => onChange(formatRupiah(e.target.value))}
            />
          )}
        />
      </div>

      <div className="flex items-center gap-0.5 border border-[#0000001A] p-0.5 rounded">
        <label htmlFor="maxPrice" className="text-xs text-gray-500">Rp</label>
        <Controller
          name="maxPrice"
          control={control}
          render={({ field: { onChange, value } }) => (
            <input
              type="text"
              id="maxPrice"
              className="text-xs text-gray-500 outline-none w-full"
              placeholder={(20000000).toLocaleString('id-ID')}
              value={value}
              onKeyDown={handleKeyDown}
              onChange={(e) => onChange(formatRupiah(e.target.value))}
            />
          )}
        />
      </div>

      <button type="submit" className="hidden">Submit</button>
    </form>
  );
}