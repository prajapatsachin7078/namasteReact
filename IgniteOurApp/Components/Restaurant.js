import React from "react";
import ShimmerLoader from "./ShimmerLoader";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurant = () => {
    const { resId } = useParams();
    const [
        resMenuInfo,
        resMenu,
    ] = useRestaurantMenu(resId);

    if (!resMenu && !resMenuInfo) {
        return <ShimmerLoader />;
    }

    return (
        <div className="container w-75 mt-5">
            {resMenuInfo && (
                <div className="mb-4">
                    <div style={{ height: "250px" }} className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{resMenuInfo.name}</h5>
                                    <p className="card-text"><strong>Location:</strong> {resMenuInfo.locality}, {resMenuInfo.areaName}</p>
                                    <p className="card-text"><strong>Average Rating:</strong> {resMenuInfo.avgRatingString} ⭐ ({resMenuInfo.totalRatingsString})</p>
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
        </div>
    );
};

export default Restaurant;
