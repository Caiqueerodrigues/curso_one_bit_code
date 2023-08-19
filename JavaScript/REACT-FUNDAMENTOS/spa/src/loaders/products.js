import products from '../dataBase.json'

export default function loadProduct ({ params }) {
    const product = products.find(p => p.id === Number(params.productId));


    //testar o PorductBoundary
    if(!product) {
        throw new Response('404 Not Found', { status: 404 })
    }
    return product;
}