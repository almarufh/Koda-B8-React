function Logo (props) {
    const color = {
        backgroundColor: props.style || "#FFFFFF33"
    }
    const text = {
        default: "text-[16px] text-white",
        black: "text-[16px] text-[#111827]"
    }

    const textColor = text[props.text] || text.default;
    return (
        <div className="order-1 md:order-0 z-10 flex gap-3 items-center w-fit">
            <span 
                style={color}
                className="flex justify-center items-center rounded-xl p-[6px_11px] text-[14px] text-[#FFFFFF]">B</span>
            <span 
                className={textColor}
            >BeliMudah</span>
        </div>
    )
}

export default Logo