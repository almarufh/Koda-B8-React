import { 
    FaArrowRight,
    FaArrowTrendUp
} from "react-icons/fa6";
import { IoFlashSharp } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import StarRating from "../../components/main/StarRating";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function LandingPage () {
    const [products, setProducts] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const navigate = useNavigate();

    const handleProductClick = (item) => {
        const cleanBrand = item.brand.replace(/\s+/g, ' ');
        const cleanTitle = item.title.replace(/\s+/g, ' ');
        const productSlug = `${item.id}-${cleanBrand}-${cleanTitle}`;
        navigate(`/main/toko/${encodeURIComponent(productSlug)}`, {
            state: { product: item }
        });
    };

    useEffect(() => {
        fetch('/database/products.json')
            .then((res) => {
                if (!res.ok) throw new Error("Gagal memuat data produk");
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    function CategoryCard(props) {
        return (
            <div className="flex flex-col items-center bg-[#FFFFFF] p-4 gap-2 border border-[#0000001A] rounded-xl ">
                <img 
                    className="w-14 h-14 rounded-xl object-cover" 
                    src={props.src} 
                    alt={props.alt} 
                />
                <span className="text-[12px] text-[#111827]">
                    {props.title}
                </span>
                <span className="text-[#6B7280] text-[12px]">
                    {props.count}
                </span>
            </div>
        )
    }

    function LihatSemua () {
        return (
            <div className="flex items-center gap-1 text-[#1A73E8] text-[14px] ">
                <span>Lihat Semua</span>
                <FaArrowRight size={12} />
            </div>
        )
    }

    function ProductCard(props) {
        const isNew = props.discount === "Baru";
        return (
            <div 
                onClick={props.onClick} 
                className="flex flex-col border border-[#0000001A] w-full rounded-md bg-[#FFFFFF] overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
                <div className="relative w-full aspect-square bg-[#F8F9FA] flex items-center justify-center">
                    {props.discount && (
                        <span 
                            className={`absolute top-2 left-2 text-[12px] px-2 py-1 rounded-full text-white ${
                                isNew ? "bg-[#1A73E8]" : "bg-[#DC2626]"
                            }`}
                        >
                            {isNew ? props.discount : `-${props.discount}`}
                        </span>
                    )}
                    <img
                        src={props.src === "*" ? "/assets/main/landingpage/Headphone Wireless Premium.svg" : props.src}
                        alt={props.alt}
                        className="rounded-t-md w-full object-cover"
                    />
                </div>
                <div className="flex flex-col p-6 gap-1">
                    <span className="text-[12px] text-[#6B7280]">
                        {props.brand}
                    </span>
                    <span className="text-[14px] text-[#111827]">
                        {props.title}
                    </span>
                    <div className="flex gap-1">
                        <StarRating
                            ratingValue={props.ratingValue}
                            ratingText={props.ratingText}
                        />
                    </div>
                    <div className="flex items-center pt-1 gap-2">
                        <span className="text-[16px] text-[#1A73E8] font-semibold">
                            Rp {props.price.toLocaleString('id-ID')}
                        </span>
                        {props.oldPrice && (
                            <span className="text-[12px] text-[#6B7280] line-through">
                                Rp {props.oldPrice.toLocaleString('id-ID')}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    function FooterValue (props) {
        return (
            <div className="flex flex-col items-center gap-2 w-full px-2 ">
                <span className="text-[36px] ">{props.img}</span>
                <span className="text-[#111827] text-[14px] ">{props.title}</span>
                <span className="text-[12px] text-[#6B7280] text-center ">{props.desc}</span>
            </div>
        )
    }
    
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen w-full">
                <span className="text-[#6B7280] text-[16px] animate-pulse">Memuat data produk...</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center w-full gap-12 bg-[#F8F9FA] pb-12">
            <div className="grid grid-cols-2 bg-[#4F39F6] w-full">
                <div className=" flex justify-center items-center w-full p-4">
                    <div className="flex flex-col gap-4 justify-start">
                        <span className="text-white font-bold text-[20px] md:text-[30px] ">Elektronik Pilihan, Harga <br/> Spesial</span>
                        <span className="text-[8px] md:text-[12px] text-[#FFFFFFCC]">Laptop, smartphone, headphone, dan masih banyak lagi <br/> dengan diskon hingga 40%</span>         
                        <div className="flex bg-[#FFFFFF] items-center gap-2 text-[#1A73E8] text-[8px] md:text-[12px] px-3 md:px-6 py-1.5 md:py-3 w-fit rounded-xl ">
                            <span>Lihat Semua</span>
                            <FaArrowRight size={12} />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <img 
                        src="/assets/main/landingpage/Elektronik Pilihan, Harga Spesial.svg" 
                        alt="Elektronik Pilihan, Harga Spesial" 
                        className="w-full h-full object-cover" 
                    />
                </div>
            </div>

            <div className="flex flex-col justify-between w-full p-4 gap-6 ">
                <div className="flex justify-between">
                    <span className="text-[#111827] text-[20px]  ">Belanja Berdasarkan Kategori</span>
                    <LihatSemua />
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 w-full gap-3 ">
                    <CategoryCard src="/assets/main/landingpage/Elektronik.svg" alt="Kategori Elektronik" title="Elektronik" count="7 produk" />
                    <CategoryCard src="/assets/main/landingpage/Fashion.svg" alt="Kategori Fashion" title="Fashion" count="5 produk" />
                    <CategoryCard src="/assets/main/landingpage/Rumah & Dapur.svg" alt="Kategori Rumah & Dapur" title="Rumah & Dapur" count="4 produk" />
                    <CategoryCard src="/assets/main/landingpage/Kecantikan.svg" alt="Kategori Kecantikan" title="Kecantikan" count="2 produk" />
                    <CategoryCard src="/assets/main/landingpage/Olahraga.svg" alt="Kategori Olahraga" title="Olahraga" count="3 produk" />
                    <CategoryCard src="/assets/main/landingpage/Buku & Alat Tulis.svg" alt="Kategori Buku & Alat Tulis" title="Buku & Alat Tulis" count="2 produk" />
                </div>
            </div>

            <div className="flex flex-col bg-white w-full p-4 gap-6 ">
                <div className="flex items-center justify-between  ">
                    <div className="flex justify-between gap-3">
                        <div className="flex rounded-md items-center justify-center px-3 py-1.5 gap-2 bg-[#DC2626] ">
                            <IoFlashSharp size={14} color="#FFFFFF" />
                            <span className="text-[#FFFFFF] text-[14px] ">Flash Deal</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#4B5563] text-[14px]">
                            <BsClock size={14} />
                            <span>Berakhir dalam:</span>
                            <div className="flex items-center gap-1 font-bold text-[#111827]">
                                <span className="bg-[#F3F4F6] px-2 py-0.5 rounded-md">05</span>
                                <span>:</span>
                                <span className="bg-[#F3F4F6] px-2 py-0.5 rounded-md">21</span>
                                <span>:</span>
                                <span className="bg-[#F3F4F6] px-2 py-0.5 rounded-md">38</span>
                            </div>
                        </div>
                    </div>
                    <LihatSemua />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 w-full">
                    {products?.flashDeals?.map((item) => (
                        <ProductCard 
                            key={item.id}
                            src={item.imageSrc}
                            alt={item.title}
                            brand={item.brand}
                            title={item.title}
                            ratingValue={item.ratingValue}
                            ratingText={item.ratingText}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            discount={item.discount}
                            onClick={() => handleProductClick(item)}
                        />
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full gap-6 h-50 ">
                <div className="bg-gradient-to-r from-gray-700 to-gray-500 rounded-xl"></div>
                <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl"></div>
            </div>

            <div className="flex flex-col w-full p-4 gap-6">
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <FaArrowTrendUp className="text-[#1A73E8]" />
                        <span className="text-[#111827] text-[20px]  ">Produk Terbaru</span>
                    </div>
                    <LihatSemua />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                    {products?.newProducts?.map((item) => (
                        <ProductCard 
                            key={item.id}
                            src={item.imageSrc}
                            alt={item.title}
                            brand={item.brand}
                            title={item.title}
                            ratingValue={item.ratingValue}
                            ratingText={item.ratingText}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            discount={item.discount}
                            onClick={() => handleProductClick(item)}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col w-full p-4 gap-6">
                <div className="flex justify-between">
                    <span className="text-[#111827] text-[20px]  ">Produk Unggulan</span>
                    <LihatSemua />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                    {products?.featuredProducts?.map((item) => (
                        <ProductCard 
                            key={item.id}
                            src={item.imageSrc}
                            alt={item.title}
                            brand={item.brand}
                            title={item.title}
                            ratingValue={item.ratingValue}
                            ratingText={item.ratingText}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            discount={item.discount}
                            onClick={() => handleProductClick(item)}
                        />
                    ))}
                </div>
            </div>

            <div className="border border-[#0000001A] flex flex-col bg-[#FFFFFF] w-full p-4 gap-6 rounded-xl ">
                <span className="text-[20px] text-[#111827] self-center ">Kenapa Belanja di BeliMudah?</span>
                <div className="grid grid-cols-4 gap-6 ">
                    <FooterValue img="🚚" title="Gratis Ongkir" desc="Pembelian di atas Rp 100.000 gratis ongkir ke seluruh Indonesia" />
                    <FooterValue img="🔒" title="Pembayaran Aman" desc="Data kamu terenkripsi dengan standar keamanan tertinggi" />
                    <FooterValue img="↩️" title="Retur Mudah" desc="Produk tidak sesuai? Kembalikan dalam 30 hari tanpa ribet" />
                    <FooterValue img="💬" title="CS 24/7" desc="Tim kami siap membantu kamu kapan saja" />
                </div>
            </div>
        </div>
    )
}