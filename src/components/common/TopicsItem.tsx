import React from "react";

interface TopicsItemProps {
    id?: number;
    title?: string;
    index?: number;
}


const TopicsItem: React.FC<TopicsItemProps> = ({id, title, index}) => {
    const handleclick = () => {
        // console.log(`Redirection vers ${to}`);
    };

    return (
        <div className="body_body" onClick={handleclick}>
            <div className="titre_tag">
              <h5 id={`item-${id}-${index}`} >{title}</h5>
            </div>
        </div>
    );
};

export default TopicsItem;