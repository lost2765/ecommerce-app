import instance from "axios.config"

export const getProducts = async () => {
    const result: ProductListType = (await instance.get('products')).data;
    return result;
};

export const getProductById = async (id: number) => {
    const result: ProductType = (await instance.get(`products/${id}`)).data;
    return result;
};

export const getProductsByCategory = async (categoryName: string) => {
    const result: ProductListType = (await instance.get(`products/category${categoryName}`)).data;
    return result;
}