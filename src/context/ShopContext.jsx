import React, { createContext, useState } from 'react'

export const ShopContext = createContext(null)

const Products = localStorage.getItem('PRODUCTS')

const getDefaultLikes = () => {
    let likes = {}
    for (let i = 0; i < Number(Products) + 1; i++) {
        likes[i] = false;
    }
    return likes
}

export const ShopContextProvider = (props) => {
    const [likeItems, setLikeItems] = useState(getDefaultLikes())

    const addToLikes = (itemId) => {
        setLikeItems((prev) => ({
            ...prev, [itemId]: !prev[itemId]
        }))
    }

    const contextValue = {likeItems, addToLikes}
    //console.log(likeItems)
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
