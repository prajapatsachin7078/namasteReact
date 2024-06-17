import { useState, useEffect } from "react";

const useRestaurantList = (coordinates)=>{
    const [searchText, setSearchText] = useState('');
    const [resData, setResData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isFiltered,setIsFiltered] = useState(true);
    useEffect(() => {
        if(coordinates.lat && coordinates.lon){
            setTimeout(()=>{
                fetchData();
            },500);
        }
        
    },[coordinates]);

    const filterTopRatedRestaurants = () => {
        setFilteredData(() => {
            if (!isFiltered) {
                return resData;
            } else {
                return resData.filter(data => data.info.avgRating > 4);
            }
        });
    
        setIsFiltered(prevIsFiltered => !prevIsFiltered);
    };
    
    const filterData = (searchText) => {
        const filteredList = resData.filter(data => data.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(filteredList);
    }

    const fetchData = async () => {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinates.lat}&lng=${coordinates.lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
            const json = await data.json();
            // console.log(json);
            // console.log(coordinates)

            let result = null;
            const restaurantsData = json?.data?.cards;
            // console.log(restaurantsData);
            for(let i = 0;i<restaurantsData.length;i++){
                
                if(restaurantsData[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined){
                    result = restaurantsData[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                    // console.log(restaurantsData[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                    break;
                }
            }
            // console.log(result);
            setResData(result);
            setFilteredData(result);
            // console.log(json);
        } catch (error) {
            console.log("Error in fetching data:", error);
        }
    }

    return [searchText, filterTopRatedRestaurants,setSearchText, filterData, filteredData ];
}

export default useRestaurantList;