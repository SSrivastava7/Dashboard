import React from 'react';
function ListItems(props){
    const items=props.items;
    const listItems=items.map(item=>{
        return <div className="list" key={items.key}>
            <p>{items.text}
            onClick={()=>props.deleteItem(item.key)}</p>
        </div>
    })
    return(
        <div>{listItems}</div>
       
    )
} export default ListItems;
