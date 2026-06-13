function Line ({line}) {
    return (
        <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center w-full">
            <div className="border-t border-[#0000001A]"></div>
            <span className="text-[12px] text-[#6B7280]">{line}</span>
            <div className="border-t border-[#0000001A]"></div>
        </div>
    )
}

export default Line