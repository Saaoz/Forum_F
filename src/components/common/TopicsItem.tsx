import React from "react";
import { Topic } from "../context/types";


const TopicsItem: React.FC<Topic> = ({id, title}) => {
    const handleclick = () => {
        // console.log(`Redirection vers ${to}`);
    };

    return (
        <div className="body_body" onClick={handleclick}>
            <div className="titre_tag">
              <h5>{title}</h5>
            </div>
        </div>
    );
};

export default TopicsItem;