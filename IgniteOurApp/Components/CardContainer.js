import { ItemCard } from "./ItemCard"
export const CardContainer = ({ result }) => {
    console.log(result)
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row justify-content-center gap-2">
                {result.map((item, index) => (
                    <ItemCard key={index} item={item.info} />
                ))}
            </div>
        </div>

    );
};