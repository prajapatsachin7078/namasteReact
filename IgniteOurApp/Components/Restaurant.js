import React from "react";
import ShimmerLoader from "./ShimmerLoader";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurant = () => {
    const { resId } = useParams();
    const [
        resMenuInfo,
        resMenu,
        categories,
        selectedCategory,
        handleCategoryChange,
        filteredItems
    ] = useRestaurantMenu(resId);

    if (!resMenu && !resMenuInfo) {
        return <ShimmerLoader />;
    }

    return (
        <div className="container mt-5">
            {resMenuInfo && (
                <div className="mb-4">
                    <div style={{ height: "250px" }} className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{resMenuInfo.name}</h5>
                                    <p className="card-text"><strong>Location:</strong> {resMenuInfo.locality}, {resMenuInfo.areaName}</p>
                                    <p className="card-text"><strong>Average Rating:</strong> {resMenuInfo.avgRatingString} ({resMenuInfo.totalRatingsString})</p>
                                    <p className="card-text"><strong>Cuisines:</strong> {resMenuInfo.cuisines.join(', ')}</p>
                                    <p className="card-text"><strong>Cost for Two:</strong> {resMenuInfo.costForTwoMessage}</p>
                                    <p className="card-text"><strong>Discount:</strong> {resMenuInfo.aggregatedDiscountInfo?.header}</p>
                                </div>
                            </div>
                            <div className="col-md-4 float-end" style={{ height: "250px", objectFit: 'contain' }}>
                                <img
                                    style={{ height: "250px" }}
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resMenuInfo.cloudinaryImageId}`}
                                    className="img-thumbnail float-end"
                                    alt={resMenuInfo.name}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="mb-4">
                <select className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="row">
                {!filteredItems.length ? <h1>No items available in this category</h1> : filteredItems.map((item, index) => (
                    <div className="col-12 mb-4" style={{ height: "250px" }} key={index}>
                        <div className="card horizontal-card">
                            <div className="row g-0">
                                <div className="col-md-4" style={{ objectFit: 'cover' }}>
                                    <img
                                        style={{ height: "250px", width: "250px" }}
                                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`}
                                        className="img-fluid rounded-start"
                                        alt={item.card.info.name}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.card.info.name}</h5>
                                        <p className="card-text"><strong>Price:</strong> ₹{item.card.info.price / 100}</p>
                                        <p className="card-text"><strong>Category:</strong> {item.card.info.category}</p>
                                        <p className="card-text"><strong>Rating:</strong> {item.card.info.ratings?.aggregatedRating?.rating}</p>
                                        <p className="card-text"><strong>Is Veg:</strong> {item.card.info.isVeg ? "Yes" : "No"}</p>
                                        {item.card.info.ribbon && (
                                            <span className="badge bg-danger">{item.card.info.ribbon.text}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Restaurant;
