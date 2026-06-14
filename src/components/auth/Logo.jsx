function Logo (props) {
    const color = {
        backgroundColor: props.style || "#FFFFFF33"
    }
    return (
        <div className="z-10 flex gap-3 items-center">
            <span 
                style={color}
                className="flex justify-center items-center rounded-[12px] px-3 py-2 text-[16px] text-white">B</span>
            <span className="text-[16px] text-white">BeliMudah</span>
        </div>
    )
}

export default Logo