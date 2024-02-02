import React from "react";

interface Item {
    id:number;
    name: string;
}

interface ItemListProps {
    items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
    return (
        <ul className="itemlist">
            {items.map(item => (
                <li key={item.id} className="item"> {item.name} </li>
            ))}
        </ul>
    );
};

export default ItemList;