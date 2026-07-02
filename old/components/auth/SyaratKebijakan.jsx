import { Link } from "react-router"

export default function SyaratKebijakan (props) {
    const Syarat = (
        <Link  className="text-[#1A73E8]" to="#">Syarat & Ketentuan</Link>
    )
    const Kebijakan = (
        <Link  className="text-[#1A73E8]" to="#">Kebijakan Privasi</Link>
    )
    return (
        <p className="text-start text-[12px] text-[#6B7280]">
            {props.first} {Syarat} dan {Kebijakan} {props.last}
        </p>
    )
}