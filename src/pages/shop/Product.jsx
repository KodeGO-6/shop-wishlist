import React, { useContext } from 'react'
import useFetchData from '../../components/useFetchData'
import { ShopContext } from '../../context/ShopContext'
import { Heart } from 'phosphor-react'

export const Product = () => {
    const { data, loading, error } = useFetchData('https://fakestoreapi.com/products')
    const { likeItems, addToLikes } = useContext(ShopContext)
    localStorage.setItem('PRODUCTS', Object.keys(data).length)
    
    {loading && <div>Loading...</div>}
    {error && <div>Error: {error.message}</div>}
    
    return (
        <div className='products'>
            {data.map(product => (
                <div key={product.id} className='card'>
                    <div className='img-wrap'><img src={product.image} alt='#'/></div>
                    <div className='card-body'>
                        <h6>{product.title}</h6>
                        <small>{product.category}</small>
                        <h6>{product.price}</h6>
                        <button
                            onClick={() => addToLikes(product.id)}> 
                                <Heart 
                                    size={32} 
                                    style={{color: likeItems[product.id] !== true ? 'white': 'red'}}/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
