const products = [
    {
        id:'1',
        name: 'Llavero',
        price: 50,
        category: 'accesorios',
        img: 'https://cdn.shopify.com/s/files/1/0282/5637/0781/products/4550337103012_d65796dfd215ea31af8d31c4314be44c__35426.webp?v=1674244668',
        stock: 10,
        description: 'Llavero decorativo'
    },
    {
        id:'1',
        name: 'Blusa rosa',
        price: 100,
        category: 'ropa',
        img: 'https://dsnegsjxz63ti.cloudfront.net/images/pg/m_325fd37b06a2521.jpg',
        stock: 5,
        description: 'Blusa de algodón'
    },
    {
        id:'1',
        name: 'Cojin',
        price: 220,
        category: 'regalos',
        img: 'https://m.media-amazon.com/images/I/61-i4ZL9RLL._AC_SX522_.jpg',
        stock: 8,
        description: 'Cojin tela hipoalergenica'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }), 500
    })
}