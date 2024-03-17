import { createContext, useState } from "react";
import Cookies from 'js-cookie'
export const WishlistContext = createContext();

const WishlistProvider = (props) => {

const [wishlist, setWishlist] = useState([]);


const handleWishlist = async (product) => {

    const filterWishList = wishlist.filter((item) => {
        if(item.id == product.id){
            return item;
        }
    })

    if (filterWishList.length < 1){
        const updatedWishlist = [...wishlist, product];
        await setWishlist(updatedWishlist);
        Cookies.set('wishlist', JSON.stringify(updatedWishlist))
    }  

}


const deleteWishlist = async (id) => {

    const filterWishlist = wishlist.filter((item) => {
        if(item.id !== id){
            return item;
        }
    });

    await setWishlist(filterWishlist)
    Cookies.set('wishlist', JSON.stringify(filterWishlist))
} 

    return (
        <>
        <WishlistContext.Provider value = { { handleWishlist, wishlist, deleteWishlist, setWishlist } }>
         {props.children}
        </WishlistContext.Provider>
        </>
    )
}

export default WishlistProvider;