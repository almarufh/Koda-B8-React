import Logo from '../auth/Logo.jsx'

export default function Footer () {
    function BoxTop (props) {
        return (
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-[#1A73E833] rounded-full">
                    <img className="w-[18px] h-[18px]" src={props.img} alt={props.alt}/>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-[#FFFFFF] text-[14px]">{props.header}</span>
                    <span className="text-[#99A1AF] text-[12px]">{props.sub}</span>
                </div>
            </div>
        )
    }

    function BoxSocial (props) {
        return (
            <div className="flex h-8 w-8 items-center justify-center bg-[#364153] rounded-full">
                <img 
                    src={props.src}
                    alt={props.alt}
                    className="size-[14px]"
                />
            </div>
        )
    }

    function HeaderCard (props) {
        return (
            <span className="text-[#FFFFFF] text-[24px]">{props.show}</span>
        )
    }

    function SubCard (props) {
        return (
            <span className="text-[#99A1AF] text-[14px]">{props.show}</span>
        )
    }
    
    function SubCardImg (props) {
        return (
            <div className="flex gap-2 items-start">
                <img 
                    className='size-[15px] mt-1'
                    src={props.src} 
                    alt={props.alt}
                />
                <span className="text-[#99A1AF] text-[14px]">{props.show}</span>
            </div>
        )
    }

    const footerData = [
        {
            header: "Layanan",
            links: [
                "Tentang Kami", 
                "Karir", "Blog", 
                "Program Afiliasi", 
                "Jual BeliMudah"
            ]
        },
        {
            header: "Bantuan",
            links: [
                "Cara Belanja", 
                "Kebijakan Pengembalian", 
                "Lacak Pesanan", 
                "FAQ", 
                "Hubungi Kami"
            ]
        }
    ];

    return (
        <footer className="flex flex-col w-full max-w-[1728px] items-center mx-auto">
            <div className="w-full h-16"></div>
            <div className="flex items-center justify-center w-full bg-[#111827]">
                <div className="w-full max-w-[1280px] grid grid-cols-2 md:grid-cols-4 p-[32px_16px] gap-6">
                    <BoxTop
                        img="/assets/main/landingpage/mobil.svg" 
                        alt="Ongkir"
                        header="Gratis Ongkir"
                        sub="Pembelian di atas Rp 100.000"
                    />
                    <BoxTop
                        img="/assets/main/landingpage/prisai.svg" 
                        alt="Pembayaran"
                        header="Pembayaran Aman"
                        sub="SSL terenkripsi 256-bit"
                    />
                    <BoxTop
                        img="/assets/main/landingpage/reload.svg" 
                        alt="Pengembalian"
                        header="Pengembalian Mudah"
                        sub="30 hari pengembalian gratis"
                    />
                    <BoxTop
                        img="/assets/main/landingpage/headset.svg" 
                        alt="Dukungan"
                        header="Dukungan 24/7"
                        sub="Bantuan kapan saja"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center w-full border-t-[#364153] border-b-[#364153] bg-[#111827]">
                <div className="grid grid-cols-1 md:grid-cols-4 w-full max-w-[1280px] h-full border-r-[red] gap-8 p-[48px_16px]">
                    <div className="flex flex-col gap-4">
                        {<Logo style="#1A73E8"/>}
                        <span className='text-[14px] text-[#99A1AF]'>Platform belanja online terpercaya dengan ribuan produk pilihan. Belanja mudah, aman, dan menyenangkan.</span>
                        <div className="flex items-center gap-3">
                            <BoxSocial src="/assets/main/landingpage/facebook.svg" alt="Facebook"/>
                            <BoxSocial src="/assets/main/landingpage/instagram.svg" alt="Instagram"/>
                            <BoxSocial src="/assets/main/landingpage/x.svg" alt="Twiter"/>
                            <BoxSocial src="/assets/main/landingpage/youtube.svg" alt="Youtube"/>
                        </div>
                    </div>
                    {footerData.map((section, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <HeaderCard show={section.header} />
                            {section.links.map((link, i) => (
                                <SubCard key={i} show={link} />
                            ))}
                        </div>
                    ))}
                    <div className="flex flex-col gap-4">
                        <HeaderCard show="Kontak"/>
                        <SubCardImg
                            src="/assets/main/landingpage/map2.svg" 
                            alt="Alamat" 
                            show="Jl. Sudirman No. 1, Jakarta Selatan, DKI Jakarta 12190"
                        />
                        <SubCardImg
                            src="/assets/main/landingpage/telp.svg" 
                            alt="Telepon" 
                            show="0800-1234-5678 (Gratis)"
                        />
                        <SubCardImg
                            src="/assets/main/landingpage/gmail.svg" 
                            alt="Email" 
                            show="bantuan@belimudah.id"
                        />
                        <div className="flex flex-col bg-[#1E2939] rounded-[8px] p-3 gap-2">
                            <span className="text-[#FFFFFF] text-[12px]">Newsletter</span>
                            <div className="flex gap-2 justify-between">
                                <input 
                                    type="text" 
                                    placeholder="Email kamu"
                                    className='flex items-center p-[8px_12px] text-[#FFFFFF80] w-full text-[12px] bg-[#364153] rounded-[6px] border border-[#4A5565]'
                                />
                                <button
                                    className='flex rounded-6px bg-[#1A73E8] items-center text-[12px] text-[#FFFFFF] p-[12px_9px] rounded-[6px]'
                                >Langganan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full bg-[#111827]">
                <div className="w-full max-w-[1280px] flex justify-between text-[12px] text-[#6A7282] p-[16px]">
                    <span>© 2026 BeliMudah. Seluruh hak cipta dilindungi.</span>
                    <div className="flex gap-4">
                        <span>Kebijakan Privasi</span>
                        <span>Syarat & Ketentuan</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}