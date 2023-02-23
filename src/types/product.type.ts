type ProductType = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPersontage: number,
    rating: number,
    stock: number,
    category: string,
    thumbnail: string,
    images: string[]
};

type ProductListType = {
    products: ProductType[],
    total: number,
    limit: number,
    skip: number
};

type ProductDetailParamsType={
    id:number
}