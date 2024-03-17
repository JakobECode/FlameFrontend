import {useContext} from "react";
import StarRating from "../../../components/partials/shared/starRating/StarRating";
import {WishlistContext} from "../../../contexts/WishlistProvider";

const ProductCard = ({products}) => {

    const {handleWishlist} = useContext(WishlistContext);

    const renderProducts = () => {
        if(products.length != 0){
          return (    
            <>    
            {products.map((item, index) => (
                <div className="col-6 col-lg-3 card-content">

                <div className="img-part">
                <img src={item.imageUrl}></img>
                <div className="img-menu">
                <i className="fa-regular fa-bag-shopping fa-sm icon-card-bag"></i>
                <i onClick={() => {handleWishlist(item)}} className="fa-solid fa-heart fa-sm icon-card-heart"></i>
                </div>
                </div>
                
                <div className="body-part mt-2 mb-5">
                <StarRating rating={item.rating} numberOfReviews={item.reviewCount}/>
                <p>${item.price}</p>
                <p>{item.name}</p>
                </div>
                
                </div>
            ))}
            </>
        )}}

      return (
        <>
            <div className="row">
              {renderProducts()}
            </div>
        </>
      )

}

export default ProductCard;