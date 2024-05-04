import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import { CardContainer } from "./Components/CardContainer";

const AppLayout = () => {

    const [resData,setResData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        try{
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const json = await data.json();
            setResData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log(json);
        }catch(error) {
            console.log("Error in fetching data:", error);
        }
    }
    return (
        <div className="container">
            <Header />
            <div className="d-flex justify-content-center mb-3 ">
                <button className="text-secondary border-2 border-warning rounded px-2 py-1 mb-2" style={{ background: 'linear-gradient(to right, #ff5f6d, #ffc371)' }} onClick={() => {
                    let updatedList = resData.filter((data) => data.info.avgRating > 4);
                    setResData(updatedList);
                }}>Click here to filter for top-rated restaurants</button>
            </div>
            {resData.length == 0?<h1>Loading Data</h1>:<CardContainer result={resData}/>}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);