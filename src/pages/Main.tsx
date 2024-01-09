import React, { useState } from "react"
import SearchBar from "../components/common/SearchBar";
import ItemList from "../components/common/ItemList";

const data = [
    { id: 1, name: 'Valorant' },
    { id: 2, name: 'Far cry 6' },
    { id: 3, name: 'PUBG' },
    { id: 4, name: 'Tarkov' },
    { id: 5, name: 'React' },
    { id: 6, name: 'Typescript' },
    { id: 7, name: 'Far cry 2' },
    { id: 8, name: 'Far cry 5' },
];

interface Item {
    id: number;
    name: string;
  }

const MainPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState<Item[]>([]);

    const handleSearch = (term: string) => {
        // console.log('REcherche effectué avec le terme :', term);
        setSearchTerm(term);

        if (term.length >= 3) {
            const filtered = data.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
            setFilteredData(filtered);
        } else {
            setFilteredData([]);
        }
    };

    const handleChange = (value: string) => {
        if (value.length >= 3) {
            const suggestions = data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
            setFilteredData(suggestions);
        } else {
            setFilteredData([]);
        }
    };  

    return (
        <div>
            <h1>Page d'Accueil</h1>
            <SearchBar onSearch={handleSearch} onChange={handleChange} />
            {filteredData.length > 0 && <ItemList items={filteredData} />}
        </div>
    );
};

export default MainPage;