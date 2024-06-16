import { useState, useEffect } from "react";

const useRestaurantList = ()=>{
    const [searchText, setSearchText] = useState('');
    const [resData, setResData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isFiltered,setIsFiltered] = useState(true);
    // console.log(pruseOutlet());
    useEffect(() => {
        setTimeout(()=>{
            fetchData();
        },500);
    }, []);

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

    return [searchText, filterTopRatedRestaurants,setSearchText, filterData, filteredData ];
}

export default useRestaurantList;