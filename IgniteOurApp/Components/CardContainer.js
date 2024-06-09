import { Link } from "react-router-dom";
import { ItemCard } from "./ItemCard"
export const CardContainer = ({ result }) => {
    console.log(result);
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row justify-content-center gap-3">
                {result.map((item) => (
                  <Link className="nav-link col-3 scale-75 card  card-hover-effect" style={{width: 16+"em"}} key={item.info.id} to ={"/restaurant/" + item.info.id}><ItemCard   item={item.info} /></Link>
                ))}
            </div>
        </div>

    );
};