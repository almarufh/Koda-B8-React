import { useState, useEffect } from 'react';

function useGetProducts({id, type, category}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                const response = await fetch('/database/products.json');
                
                if (!response.ok) {
                    throw new Error('Gagal mengambil data produk');
                }
                
                const allProducts = await response.json();

                const activeParamsCount = [id, category, type].filter(param => param !== undefined && param !== '').length;
                
                if (activeParamsCount > 1) {
                    throw new Error('Hanya diperbolehkan mengirim satu parameter filter saja!');
                }

                if (id !== "") {
                    const singleProduct = allProducts.filter(product => product.id == id);
                    setProducts(singleProduct);
                } else if (category !== "") {
                    const filteredByCategory = allProducts.filter(
                        product => product.category.toLowerCase() === category.toLowerCase()
                    );
                    setProducts(filteredByCategory);
                } else if (type !== "") {
                    const filteredByType = allProducts.filter(
                        product => product.sourceType.toLowerCase() === type.toLowerCase()
                    );
                    setProducts(filteredByType);
                } else {
                    setProducts(allProducts);
                }

            } catch (err) {
                setError(err.message);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        }

        getData();
        
    }, [id, type, category]); 

    return { 
        products, 
        loading, 
        error 
    };
}

export default useGetProducts;

// const { products, loading } = useGetProducts();

// const { products } = useGetProducts({ id: 5 });

// const { products } = useGetProducts({ category: 'Electronics' });

// const { products } = useGetProducts({ type: 'flashDeals' });

// const { products, error } = useGetProducts({ category: 'Sepatu', type: 'flashDeals' });