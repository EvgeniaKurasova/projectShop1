export type Product = {
    id: number
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
}


const productsArray: Product[] = [
    {
    id: 1,
    title: 'iPhone 14 Pro',
    description: 'This is iPhone 14 Pro',
    type: 'phone',
    capacity: '256',
    price: 1500,
    image: 'images/phone1.webp',
    },

    {
    id: 2,
    title: 'iPhone 13 Pro',
    description: 'This is iPhone 13 Pro',
    type: 'phone',
    capacity: '256',
    price: 1000,
    image: 'images/phone2.webp',
    },
    {
    id: 3,
    title: 'iPhone 13',
    description: 'This is iPhone 13',
    type: 'phone',
    capacity: '128',
    price: 1000,
    image: 'images/phone3.webp',
    },
    {
    id: 4,
    title: 'iPhone 14',
    description: 'This is iPhone 14',
    type: 'phone',
    capacity: '128',
    price: 1000,
    image: 'images/phone4.webp',
    },
    {
    id: 5,
    title: 'iPhone 11Pro MAX',
    description: 'This is iPhone 11Pro MAX',
    type: 'phone',
    capacity: '512',
    price: 1200,
    image: 'images/phone5.webp',
    },
    {
    id: 6,
    title: 'iPhone XS',
    description: 'This is iPhone XS',
    type: 'phone',
    capacity: '256',
    price: 500,
    image: 'images/phone6.webp',
    },


]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray