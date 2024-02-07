import React from "react";

interface TopicsItemProps {
    id: number;
    title: string;
    to: string;
    reply: number;
    activity: string;
}

const TopicsItem: React.FC<TopicsItemProps> = ({id, title, to, reply, activity}) => {
    const handleclick = () => {
        console.log(`Redirection vers ${to}`);
    };

    return (
        <div className="body_body" onClick={handleclick}>
            <div className="titre_tag">
              <h5>{title}</h5>
            </div>
            <h5>{reply}</h5>
            <h5> {activity} </h5>
        </div>
    );
};

export default TopicsItem;