import React, { useEffect, useState } from "react";
import ShimmerLoader from "./ShimmerLoader";
import { useParams } from "react-router-dom";
import Error from "./Error";
const Restaurant = () => {
    const [resMenu, setResMenu] = useState(null);
    const [resMenuInfo, setResMenuInfo] = useState(null);
    const {resId} = useParams();
    console.log(useState());
    // console.log(resId)
    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        try {
            const response = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=" + resId);
            const json = await response.json();
            const menuData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            let result = null;
            if (menuData) {
                for (let i = 0; i < 18; i++) {
                    if (menuData[i]?.card?.card?.itemCards !== undefined) {
                        result = menuData[i].card.card;
                        break; // Exit the loop once the first defined itemCards is found
                    }
                }
            }            
            // console.log(menuData[3].card.card.itemCards);
            setResMenu(result);
            // console.log(menuData, '24');
            // console.log(result)
            setResMenuInfo(json?.data?.cards[1]?.card?.card?.info)
        } catch (error) {
            console.log("Error in fetching menu data:", error);
        }
    };

    if (!resMenu && !resMenuInfo) {
        return <ShimmerLoader />;
    }
    const {itemCards}  = resMenu;
    // console.log(resMenu)
    return (
        
        <div className="container mt-5">
              {resMenuInfo && (
                <div className="mb-4">
                    <div className="card mb-3">
                        <div className="row g-0">
                            {/* <div className="col-md-4">
                                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resMenuInfo.cloudinaryImageId} className="img-fluid rounded-start" alt={resMenuInfo.name} />
                            </div> */}
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
                        </div>
                    </div>
                </div>
            )}
            <div className="row">
                {!itemCards?<h1>Failed in fetching details</h1>:itemCards.map((item, index) => (
                    <div className="col-md-3 col-lg-3 col-sm-6 mb-4" key={index}>
                        <div className="card scale-75  card-hover-effect">
                            <div className="ratio ratio-4x3">
                                <img 
                                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item?.card?.info?.imageId}
                                    className="card-img-top " 
                                    alt={item.card.info.name} 
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.card.info.name}</h5>
                                {/* <p className="card-text">{item.card.info.description}</p> */}
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
                ))}
            </div>
        </div>
    );
};

export default Restaurant;
