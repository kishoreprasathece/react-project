import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Content = () => {
const [data , setData] = useState([]);
const  [error , setError] = useState(null);

useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response=>{
    setData(response.data)
    }
    
    )
    .catch(err=>{
        setError(error.message)
    })
},[])
    return (
        <div>
            {error ? (
                <p>Error: {error}</p> // Display error message if there's an error
            ) : (
                <ul className='grid grid-cols-4 bg-teal-100 p-8' >
                    {data.map(item => (
                        <li  key={item.id}>
                            <div >
                                <h3 className='line-clamp-4 my-2 text-clip text-indigo-500 font-rig' >{item.title}</h3>
                                <img src={item.image} alt={item.title} width="120" />
                                <p className='font-rig'  >Price: ${item.price}</p>
                                <button className='border border-r-4 rounded-xl text-black-800 bg-yellow-200' >Add to Cart</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Content;
