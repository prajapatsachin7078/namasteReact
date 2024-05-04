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
            setResData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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




















// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// const Header = () => {
//     return (
//         <div className="header">
//             <div className="nav-brand">
//                 <img src="https://imgs.search.brave.com/kWB3y1iCtEm3-uf8mn5bH7a5cDoXwveKqW3ColhBils/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9zXy0ycWdSclBa/bldVcFdJaDROZUl1/OTVVQ0U9LzB4MDo5/OTl4OTk5L2ZpdC1p/bi81MDB4NTAwLzk5/ZGVzaWducy1jb250/ZXN0cy1hdHRhY2ht/ZW50cy8xMTgvMTE4/NjEyL2F0dGFjaG1l/bnRfMTE4NjEyOTQz" />
//                 <h3>Food Court</h3>
//             </div>
//             <div className="search-bar">
//                 <input placeholder="Search.." type="text"/>
//                 <button type = 'submit'>Search</button>
//             </div>
//             <div className="nav-menu">
//                 <ul>
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// const ItemCard = ({ title, image }) => {
//     return (
//         <div className="card">
//             <img src="https://apipics.s3.amazonaws.com/chinese_recipes_api/1.jpg" className="item-img" />
//             <div className="card-des">
//                 <h3>Homemade crispy chilli oil</h3>
//                 <p>North-East Indian, Asian</p>
//                 <p>4.4 Star</p>
//                 <p>38 minutes</p>
//             </div>
//         </div>
//     );
// };

// const CardContainer = () => {
//     // Create an array of five elements
//     const cardArray = Array.from({ length: 28 });

//     return (
//         <div className="card-container">
//             {/* Map over the array and render an ItemCard for each element */}
//             {cardArray.map((_, index) => (
//                 <ItemCard key={index} />
//             ))}
//         </div>
//     );
// };

// const AppLayout = () => {

//     return (
//         <div className="container">
//             <Header />
//             <CardContainer />
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);



