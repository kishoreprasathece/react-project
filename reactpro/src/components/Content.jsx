import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';

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
                <ul className='grid grid-cols-4 mx-2 bg-teal-100 p-8' >
                    {data.map(item => (
                        <li  key={item.id}>
                            <div >
                                <h3 className='line-clamp-4 my-2 text-clip text-indigo-500 font-rig' >{item.title}</h3>
                                <img src={item.image} alt={item.title} width="120" />
                                <p className='font-rig text-xl my-2'  >Price: ${item.price}</p>
                                <button className='border border-r-4 rounded-xl text-black-800 font-rig bg-orange-400 p-2 ' >Buy now</button>
                                <button className='border border-r-4 rounded-xl text-black-800 font-rig bg-yellow-200 p-2 ' >Add to cart</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <Footer/>
        </div>
    );
};

export default Content;
