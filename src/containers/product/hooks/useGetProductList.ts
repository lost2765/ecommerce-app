import { getProducts } from '@/services/product.service';
import { useEffect, useState } from 'react';
const useGetProductList =  () => {
    const [data, setData] = useState<ProductListType | null>(null);

    useEffect(() => {
        (async () => {
            const result = await getProducts();
            setData(result);
        })();
    }, [])


    return { ...data };
}

export default useGetProductList;


