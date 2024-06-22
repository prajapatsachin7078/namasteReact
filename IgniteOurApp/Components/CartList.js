import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart, removeItem } from '../utils/redux/cartSlice';

function CartList() {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const dispatch = useDispatch();
  const handleRemoveAll = ()=>{
    dispatch(clearCart());
  }
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="container w-75 mt-5">
        <div className='border rounded p-2 mb-3 d-flex align-items-center justify-content-between'>
          <h5 className='fs-4 mt-2 ps-2'>Cart ({cartItems.length})</h5>
          <button className='btn btn-success float-end'
          onClick={handleRemoveAll}>
            Clear Cart
          </button>
        </div>
      {cartItems.map((item) => (
        <div className="card mb-3" key={item.id}>
          <div className="row g-0">
            <div className="col-lg-8 col-md-7 col-sm-12">
              <div className="card-body">
                <h5 className="card-title fs-6">{item.name}</h5>
                <p className="card-text" style={{ fontSize: "14px" }}>{item.description}</p>
                <p className="card-text"><small className="text-body-secondary">Price: {item.defaultPrice ? item.defaultPrice / 100 : item.price / 100} INR</small></p>
                {/* Assuming ratings is an object with aggregatedRating */}
                <p className="card-text"><small className="text-body-secondary">Ratings: {item.ratings.aggregatedRating.rating} ⭐ ({item.ratings.aggregatedRating.ratingCount})</small></p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 d-flex align-items-center justify-content-center position-relative">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.imageId || item.cloudinaryImageId}`}
                className="img-fluid rounded"
                alt="dish-image"
                style={{ objectFit: 'cover', height: "150px", width: "150px" }}
              />
              <button className="btn position-absolute bottom-0 end-25 me-2 mb-2 border-rounded bg-secondary text-light btn-outline" onClick={()=>handleRemoveItem(item.id)}>Remove-</button>
        
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartList;
