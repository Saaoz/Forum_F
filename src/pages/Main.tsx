import React, { useState } from "react"
import SearchBar from "../components/common/searchBar";
import ItemList from "../components/common/ItemList";

const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
];

const MainPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term: string) => {
        console.log('REcherche effectué avec le terme :', term);
        setSearchTerm(term);
    };

    return (
        <div>
            <h1>Page d'Accueil</h1>
            <SearchBar onSearch={handleSearch} />
            <ItemList items={data} />
        </div>
    );
};

export default MainPage;