import { useState,useEffect } from "react";
import { CardContainer } from "./CardContainer";
// import { useParams } from "react-router-dom";
import ShimmerLoader from "./ShimmerLoader";
import useRestaurantList from "../utils/useRestaurantList";
const Body = () => {
    // let { userId } = useParams();

    const [searchText, filterTopRatedRestaurants,setSearchText, filterData, filteredData ] = useRestaurantList();
    
    return (
        <div className="container">
            <div className="d-flex row justify-content-center my-3 ">
                <button  className="btn col-sm-6 col-md-4 btn-outline-secondary" onClick={filterTopRatedRestaurants}>Click here to filter for top-rated restaurants</button>
                <form  className="d-flex ms-3 col-sm-6 col-md-4" role="search">
                    <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search" value = {searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                        filterData(searchText);
                    }}/>
                    <button className="btn btn-outline-success" type="submit" onClick={(e)=>{
                        e.preventDefault();
                        filterData(searchText);
                    }}>Search</button>
                </form>
            </div>
            {filteredData.length === 0 ? <ShimmerLoader/>: <CardContainer result={filteredData} /> }
        </div>
    );
};
export default Body;