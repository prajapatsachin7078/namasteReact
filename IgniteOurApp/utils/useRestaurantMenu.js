import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);
    const [resMenuInfo, setResMenuInfo] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        fetchMenuData();
    }, [resId]);

    const fetchMenuData = async () => {
        try {
            const response = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${resId}`
            );
            const json = await response.json();
            const menuData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            let result = null;
            let categorySet = new Set();
            if (menuData) {
                for (let i = 0; i < menuData.length; i++) {
                    if (menuData[i]?.card?.card?.itemCards !== undefined) {
                        result = menuData[i].card.card;
                        break;
                    }
                }
            }

            result?.itemCards.forEach((item) => {
                categorySet.add(item.card.info.category);
            });

            setCategories(["All", ...Array.from(categorySet)]);
            setResMenu(result);
            setFilteredItems(result?.itemCards || []);
            setResMenuInfo(json?.data?.cards[2]?.card?.card?.info);
        } catch (error) {
            console.log("Error in fetching menu data:", error);
        }
    };

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setSelectedCategory(newCategory);
        // console.log(resMenu.itemCards);
        const filtered = newCategory === "All"
            ? resMenu.itemCards
            : resMenu.itemCards.filter(item => item.card.info.category === newCategory);

        setFilteredItems(filtered);
    };

    return [
        resMenuInfo,
        resMenu,
        categories,
        selectedCategory,
        handleCategoryChange,
        filteredItems
    ];
};

export default useRestaurantMenu;
