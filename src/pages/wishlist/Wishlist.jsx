import React, { useContext } from 'react'
import useFetchData from '../../components/useFetchData'
import { ShopContext } from '../../context/ShopContext'
import { WishlistItem } from './WishlistItem'

export const Wishlist = () => {
    const { data } = useFetchData('https://fakestoreapi.com/products')
    const { likeItems } = useContext(ShopContext)

  return (
    <div>
        <h2>Likes</h2>
        <div className='like-items'>
            {data.map((product) => {
                if(likeItems[product.id] !== false) {
                    return <WishlistItem data={product} />
                }
            })}
        </div>
    </div>
  )
}
