import { Link } from "react-router"

export default function SyaratKebijakan (props) {
    const Syarat = (
        <Link  class="text-[#1A73E8]" to="#">Syarat & Ketentuan</Link>
    )
    const Kebijakan = (
        <Link  class="text-[#1A73E8]" to="#">Kebijakan Privasi</Link>
    )
    return (
        <p class="text-center text-[12px] text-[#6B7280]">
            {props.first} {Syarat} dan {Kebijakan} {props.last}
        </p>
    )
}