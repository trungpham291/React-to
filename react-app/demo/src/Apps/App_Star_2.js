import React from "react";
import './App.css';
import{FaStar} from 'react-icons/fa';

const product =
{
    name: 'Product 1',
    price: 19.99,
    discount: 10,
    image: 'https://picsum.photos/id/1/200/300',
    rating: 4,
    sale: true,
}

const Product = ({ name, price, discount, image, rating, sale}) => {

    const stars = Array.from({ length: 5}, (_, index) => (
        <FaStar key={index} color={rating > index ? '#ffc107' : '#e4e5e9'} />
    ));
    return(
        <div>
            {/* Render other product details here */ }
            <h1>{stars}</h1>
        </div>
    );
}

export default function MyApp() {
    const stars = Array.from({ length: 5}, (_, index) => (
        <FaStar key={index} color={index < 3 ? 'orange' : 'grey'} />
    ));

    return (
        <div>
            <h1>Welcome to my app from ThiDK</h1>
            {stars}
            <Product {...product} />
        </div>
    );
}