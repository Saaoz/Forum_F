import React from "react";
// import { useNavigate } from "react-router-dom";

interface H3WithLinkProps{
    name: string;
    to: string;
}

const H3WithLink: React.FC<H3WithLinkProps> = ({ name, to }) => {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate(to);
    // };

    const handleClick = () => {
        console.log(`Redirection vers ${to}`)
    };

    return <h3 onClick={handleClick} className="h3_with_link" >{name}</h3>
};

export default H3WithLink;