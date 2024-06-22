export const ItemCard = (props) => {
    const { name, cloudinaryImageId, totalRatingsString, avgRatingString, cuisines, sla } = props.item;
    const { slaString } = sla;
    const truncatedCuisines = cuisines.slice(0, 4);
    return (
        <div className="">
            <div className="ratio ratio-4x3">
                <img 
                    className="card-img-top" 
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} 
                    alt="Card image cap"
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{truncatedCuisines.join(', ')}</p>
                <p className={`card-text border p-2 w-50 text-light rounded ${avgRatingString <= 4 ? 'bg-secondary' : 'bg-success'}`} style={{ fontSize: '12px' }}>
                    {avgRatingString} ⭐({totalRatingsString})
                </p>
                <p className="card-text">Delivery in - {slaString}</p>
            </div>
        </div>
        
    );
};

export const promotedRestaurantCard = (ItemCard) => {
    return (props) => {
        return (
            <div className="position-relative">
                <ItemCard {...props} />
                <div className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success" style={{ zIndex: 1 }}>
                    Open <svg width="1em" height="1em" viewBox="0 0 16 16" className="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--bs-success)" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
                </div>
            </div>
        );
    };
};
