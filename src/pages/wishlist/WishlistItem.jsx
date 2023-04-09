import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { Heart } from 'phosphor-react'

export const WishlistItem = (props) => {
    const { likeItems, addToLikes } = useContext(ShopContext)

  return (
    <div className='likeItem'>
        <img src={props.data.image} alt='#' />
        <div className='description'>
            <p>{props.data.title}</p>
            <p>$ {props.data.price}</p>
            <button
                onClick={() => addToLikes(props.data.id)}>
                    <Heart 
                        size={32} 
                        style={{color: likeItems[props.data.id] !== true ? 'white': 'red'}}/>
            </button>
        </div>
    </div>
  )
}
