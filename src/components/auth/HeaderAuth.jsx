function HeaderAuth (props) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-[24px] font-bold">{props.Header}</span>
            <div className="text-[16px] text-[#6B7280]">
              <span>{props.SubHeader}</span>
              <a 
                href={props.src} 
                className="text-[#1A73E8]"
              >{props.SubHeaderLink}</a>
            </div>
        </div>
    )
}

export default HeaderAuth