import { useState,useEffect } from "react";
import { CardContainer } from "./CardContainer";
// import { useParams } from "react-router-dom";
import ShimmerLoader from "./ShimmerLoader";
const Body = () => {
    // let { userId } = useParams();
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

    // const debounce = (func, delay)=>{
    //     let debounceTimer;
    //     return function(){
    //         const context = this;
    //         const args = arguments;
    //         clearTimeout(debounceTimer);
    //         debounceTimer = setTimeout(()=>func,apply(context, args), delay);
    //     }
    // }
    
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
    return (
        <div className="container">
            <div className="d-flex row justify-content-center my-3 ">
                <button  className="btn col-sm-6 col-md-4 btn-outline-secondary" onClick={filterTopRatedRestaurants}>Click here to filter for top-rated restaurants</button>
                <form  className="d-flex ms-3 col-sm-6 col-md-4" role="search">
                    <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search" value = {searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                        filterData(searchText);z3
                    }}/>
                    <button className="btn btn-outline-success" type="submit" onClick={(e)=>{
                        e.preventDefault();
                        filterData(searchText);
                    }}>Search</button>
                </form>
            </div>
            {filteredData.length === 0 ? <ShimmerLoader/>: <CardContainer result={filteredData} />}
        </div>
    );
};
export default Body;