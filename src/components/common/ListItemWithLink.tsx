import React from "react";
// import { useNavigate } from "react-router-dom";


interface ListItemWithLinkProps {
    id?: number;
    name: string;
    to: string;
    as?: 'h3' | 'li'
}

const ListItemWithLink: React.FC<ListItemWithLinkProps> = ({id, name, to, as = 'li'}) => {
    // const navigate = useNavigate();

    const handleClick = () => {
        console.log(`Redirection vers ${to}`);
        //navigate(to);
    }

    const Element = as === 'h3' ? 'h3' : 'li';
    const className = as === 'h3' ? 'h3_with_link' : 'item';

    return (
        <Element onClick={handleClick} className={className} key={id}>
            {name}
        </Element>
    );
};

export default ListItemWithLink;