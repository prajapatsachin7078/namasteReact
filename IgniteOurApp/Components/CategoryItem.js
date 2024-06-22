import React from 'react';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/redux/cartSlice';

function CategoryItem({ info }) {
  const { imageId, name, description, price, defaultPrice, ratings, cloudinaryImageId } = info;
  const { rating, ratingCount } = ratings?.aggregatedRating;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItems(info));
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-lg-8 col-md-7 col-sm-12">
          <div className="card-body">
            <h5 className="card-title fs-6">{name}</h5>
            <p className="card-text" style={{ fontSize: "14px" }}>{description}</p>
            <p className="card-text"><small className="text-body-secondary">Price: {defaultPrice ? defaultPrice / 100 : price / 100} INR</small></p>
            <p className="card-text"><small className="text-body-secondary">Ratings: {rating} ⭐ {ratingCount}</small></p>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-12 d-flex align-items-center justify-content-center position-relative">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId || cloudinaryImageId}`}
            className="img-fluid rounded"
            alt="dish-image"
            style={{ objectFit: 'cover', height: "150px", width: "150px" }}
          />
          <button className="btn position-absolute bottom-0 end-25 me-2 mb-2 border-rounded bg-secondary text-light btn-outline" onClick={handleAddItem}>Add+</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
