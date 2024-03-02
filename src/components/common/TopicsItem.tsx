import React from "react";
import { TopicWithReplyDetails } from "../context/types";
import { formatDistanceToNow, parseISO } from "date-fns";
import { fr } from 'date-fns/locale';

const TopicsItem: React.FC<TopicWithReplyDetails> = ({id, title, replyCount, lastActivity}) => {
    const handleclick = () => {
        // console.log(`Redirection vers ${to}`);
    };

    const formatDate = (date:string) => {
        const result = formatDistanceToNow(parseISO(date), {addSuffix:true, locale:fr});
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    return (
        <div className="body_body" onClick={handleclick}>
            <div className="titre_tag">
                <h5>{title}</h5>
            </div>
            <div>{replyCount}</div>
            <div>{lastActivity ? formatDate(lastActivity) : 'N/A'}</div>
        </div>
    );
};

export default TopicsItem;