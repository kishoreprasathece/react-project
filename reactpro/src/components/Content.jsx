import React, { useEffect, useState } from 'react';

const Content = () => {
    const [products, setProducts] = useState([]); // State to hold products
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data); // Set the fetched data to state
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load data.'); // Set error message
            }
        };

        fetchData(); // Call fetchData on component mount
    }, []); // Empty dependency array ensures it runs once

    return (
        <div>
            <h1>Content</h1>
            {error && <p>{error}</p>} {/* Display error message if any */}
            <div id="data-container">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} width="100" />
                        <p>Price: ${product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
