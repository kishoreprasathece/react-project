# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


https://fakestoreapi.com/products

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Content = () => {
    const [data, setData] = useState([]); 
    const [error, setError] = useState(null);  

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setData(response.data); 
            })
            .catch(err => {
                setError(err.message); 
            });
    }, []); 

    return (
        <div>
            {error ? (
                <p>Error: {error}</p> 
            ) : (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <div className="product">
                                <h3>{item.title}</h3>
                                <img src={item.image} alt={item.title} width="100" />
                                <p>Price: ${item.price}</p>
                                <button>Add to Cart</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
