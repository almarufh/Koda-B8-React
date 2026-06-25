import React from 'react';
import { LiaAngleRightSolid } from 'react-icons/lia';

function PathProduct(props) {
  const items = props.paths || [];

  return (
    <div className="flex items-center gap-2 w-full max-w-7xl">
      {items.map((item, index) => {
        const last = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <span 
              className={`text-[14px] ${
                last ? "text-[#111827] font-medium" : "text-[#6B7280]"
              }`}
            >
              {item}
            </span>
            {!last && <LiaAngleRightSolid size={14} className="text-[#6B7280]" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default PathProduct;