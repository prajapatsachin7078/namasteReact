import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import { CardContainer } from "./Components/CardContainer";

const AppLayout = () => {
    const [resData, setResData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const json = await data.json();

            const restaurantsData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            setResData(restaurantsData);
            setFilteredData(restaurantsData);
            // console.log(json);
        } catch (error) {
            console.log("Error in fetching data:", error);
        }
    }

    const filterData = (searchText) => {
        const filteredList = resData.filter(data => data.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(filteredList);
        console.log(filteredList.length)
        console.log("Data filtered");
    }

    return (
        <div className="container">
            <Header filterData={filterData} />
            <div className="d-flex justify-content-center mb-3 ">
                <button className="btn btn-outline-secondary" onClick={() => {
                    let updatedList = resData.filter((data) => data.info.avgRating > 4);
                    setResData(updatedList);
                }}>Click here to filter for top-rated restaurants</button>
            </div>
            {filteredData.length === 0 ? <h1>Loading Data</h1> : <CardContainer result={filteredData} />}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
