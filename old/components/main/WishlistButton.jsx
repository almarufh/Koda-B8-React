import React from 'react';

function WishlistButton(props) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="flex items-center justify-center border border-[#E5E7EB] hover:border-[#F97316] rounded-[16px] p-[14px] bg-[#F8F9FA] transition-colors group aspect-square h-[54px]"
    >
      <img 
        src="/assets/main/landingpage/love.svg" 
        alt="Whitelist" 
        className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" 
      />
    </button>
  );
}

export default WishlistButton;