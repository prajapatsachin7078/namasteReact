import { Link } from "react-router-dom";
import { ItemCard, promotedRestaurantCard } from "./ItemCard"
export const CardContainer = ({ result }) => {
    // console.log(result);

    const PromotedRestaurantCard = promotedRestaurantCard(ItemCard);
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row justify-content-center gap-3">
                {result.map((item) => (
                  <Link className="nav-link col-3 scale-75 card position-relative  card-hover-effect" style={{width: 16+"em"}} key={item.info.id} to ={"/restaurant/" + item.info.id}>{
                    item.info.isOpen?<PromotedRestaurantCard  item={item.info}/>:<ItemCard   item={item.info} />
                  }</Link>
                ))}
            </div>
        </div>

    );
};