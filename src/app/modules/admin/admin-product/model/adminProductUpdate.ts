export interface AdminProductUpdate{
    id: number,
    name: string,
    categoryId: number,
    description: string,
    fullDescription: string,
    price: number,
    currency: string,
    img: string,
    slug: string
}