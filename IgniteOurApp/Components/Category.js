import React from 'react'
import CategoryItem from './CategoryItem';

function Category(props) {
    
    const {title, itemCards} = props.item.card.card;
    // console.log(itemCards)
    const collapseId = title.replace(/[^a-zA-Z]/g, " ").split(" ")[0]+'1' +itemCards.length;
  return (
    
        <div className="accordion-item bg-light">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`}aria-expanded="true" aria-controls={collapseId}>
                {title} ({itemCards.length})
            </button>
            </h2>
            <div id={collapseId} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {
                        itemCards && itemCards.map((item, index)=>(
                           <CategoryItem key={index} info = {item.card.info}/>
                        ))
                    }
                </div>
            </div>
        </div>
  )
}

export default Category