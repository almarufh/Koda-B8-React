import { Link } from "react-router"

function HeaderAuth (props) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-[24px] font-bold">{props.Header}</span>
            <div className="text-[16px] text-[#6B7280] flex gap-1">
              <span>{props.SubHeader}</span>
              <Link 
                to={props.Src} 
                className="text-[#1A73E8]"
              >
                {props.SubHeaderLink}
              </Link>
            </div>
        </div>
    )
}

export default HeaderAuth