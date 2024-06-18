import React from 'react'

function CategoryItem({info}) {
    const {imageId, name,description, price, defaultPrice,ratings, cloudinaryImageId} = info;
    const {rating, ratingCount} = ratings?.aggregatedRating;

  return (
    <div className="card mb-3">
        <div className="row">
        <div className="col-md-3 position-relative">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId || cloudinaryImageId}`}
            className="img-fluid w-100 rounded-start"
            alt="dish-image"
            style={{ objectFit: 'cover', height: '200px', overflow: 'hidden' }}
          />
          <span className='position-absolute bottom-0 end-50 px-2 py-1 border-rounded bg-dark text-light'>add+</span>
        </div>

            <div className="col-md-9">
              <div className="card-body">
                  <h5 className="card-title fs-6">{name}</h5>
                  <p className="card-text"
                    style={{
                      fontSize: "12px"
                    }}
                  >{description}</p>
                  <p className="card-text"><small className="text-body-secondary">Price: {defaultPrice ?  defaultPrice/100 : price/100} INR</small></p>
                  <p className="card-text"><small className="text-body-secondary">Ratings: {rating} ⭐ {ratingCount}</small></p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryItem