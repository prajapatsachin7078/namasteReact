import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);
    const [resMenuInfo, setResMenuInfo] = useState(null);
   

    useEffect(() => {
        fetchMenuData();
    }, [resId]);

    const fetchMenuData = async () => {
        try {
            const response = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${resId}`
            );
            const json = await response.json();
            setResMenuInfo(json?.data?.cards[2]?.card?.card?.info);
        } catch (error) {
            console.log("Error in fetching menu data:", error);
        }
    };

    return [
        resMenuInfo,
        resMenu,
    ];
};

export default useRestaurantMenu;
