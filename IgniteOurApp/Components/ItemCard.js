export const ItemCard = (props) => {
    const { name, cloudinaryImageId, avgRatingString, cuisines, sla } = props.item;
    const { slaString } = sla;
    const truncatedCuisines = cuisines.slice(0, 4);
    return (
        <div className="card col-3 scale-75 scale-75 card-hover-effect" style={{width: 13+"em"}}>
            <div className="ratio ratio-4x3">
                <img className="card-img-top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Card image cap"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{truncatedCuisines.join(',')}</p>
                <p className="card-text">{avgRatingString} Star</p>
                <p className="card-text">Delivery in - {slaString}</p>
            </div>
        </div>
    );
};
