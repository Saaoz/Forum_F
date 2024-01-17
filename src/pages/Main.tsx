import React, { useState } from "react";
import SearchBar from "../components/common/SearchBar";
import ItemList from "../components/common/ItemList";

// Types pour les items de recherche
type SearchItem = {
    id: number;
    name: string;
};

// Données factices pour les utilisateurs
const userData: SearchItem[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Emma Wilson' },
    { id: 4, name: 'James Johnson' },
    { id: 5, name: 'Michael Brown' },
    { id: 6, name: 'Patricia Taylor' },
    { id: 7, name: 'Robert Davis' },
    { id: 8, name: 'Linda Miller' },
    { id: 9, name: 'David Moore' },
    { id: 10, name: 'Susan Anderson' },
    { id: 11, name: 'java 1' },
];

// Données factices pour les sujets
const topicData: SearchItem[] = [
    { id: 1, name: 'Développement Web' },
    { id: 2, name: 'Intelligence Artificielle' },
    { id: 3, name: 'Machine Learning' },
    { id: 4, name: 'Cybersécurité' },
    { id: 5, name: 'Data Science' },
    { id: 6, name: 'Blockchain' },
    { id: 7, name: 'Développement de Jeux' },
    { id: 8, name: 'Réalité Virtuelle' },
    { id: 9, name: 'UI/UX Design' },
    { id: 10, name: 'Cloud Computing' },
    { id: 11, name: 'java 2' },
];

// Données factices pour les tags
const tagData: SearchItem[] = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Python' },
    { id: 3, name: 'React' },
    { id: 4, name: 'Node.js' },
    { id: 5, name: 'Django' },
    { id: 6, name: 'Kubernetes' },
    { id: 7, name: 'Docker' },
    { id: 8, name: 'AWS' },
    { id: 9, name: 'CSS' },
    { id: 10, name: 'HTML' },
    { id: 11, name: 'java 3' },
];

// Données factices pour les catégories
const categoryData: SearchItem[] = [
    { id: 1, name: 'Technologie' },
    { id: 2, name: 'Programmation' },
    { id: 3, name: 'Hardware' },
    { id: 4, name: 'Software' },
    { id: 5, name: 'Jeux Vidéo' },
    { id: 6, name: 'Réseaux Sociaux' },
    { id: 7, name: 'Électronique' },
    { id: 8, name: 'Robotique' },
    { id: 9, name: 'Éducation' },
    { id: 10, name: 'Santé Numérique' },
    { id: 11, name: 'java 4' },
];


const MainPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredData, setFilteredData] = useState<SearchItem[]>([]);
    const [filter, setFilter] = useState<{ user: boolean; topic: boolean; tag: boolean; category: boolean }>({
        user: false,
        topic: false,
        tag: false,
        category: false
    });

    const handleSearch = (term: string) => {
        setSearchTerm(term);

        if (term.length < 3) {
            setFilteredData([]);
            return;
        }

        let results: SearchItem[] = [];
        if (filter.user) results = results.concat(userData.filter(item => item.name.toLowerCase().includes(term.toLowerCase())));
        if (filter.topic) results = results.concat(topicData.filter(item => item.name.toLowerCase().includes(term.toLowerCase())));
        if (filter.tag) results = results.concat(tagData.filter(item => item.name.toLowerCase().includes(term.toLowerCase())));
        if (filter.category) results = results.concat(categoryData.filter(item => item.name.toLowerCase().includes(term.toLowerCase())));

        setFilteredData(results);
    };

    const handleChange = (term: string) => {
        setSearchTerm(term);

        if (term.length < 3) {
            setFilteredData([]);
            return;
        }
    
        let results: SearchItem[] = [];
        
        // Vérifie si aucun filtre n'est sélectionné
        const noFilterSelected = Object.values(filter).every(value => value === false);
    
        if (noFilterSelected) {
            // Si aucun filtre n'est sélectionné, recherche dans toutes les catégories
            results = results
                .concat(userData)
                .concat(topicData)
                .concat(tagData)
                .concat(categoryData)
                .filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
        } else {
            // Sinon, filtre en fonction des filtres sélectionnés
            if (filter.user) results = results.concat(userData.filter(item => item.name.toLowerCase().includes(term.toLowerCase())));
            if (filter.topic) results = results.concat(topicData.filter(item => item.name.toLowerCase().includes(term.toLowerCase())));
            if (filter.tag) results = results.concat(tagData.filter(item => item.name.toLowerCase().includes(term.toLowerCase())));
            if (filter.category) results = results.concat(categoryData.filter(item => item.name.toLowerCase().includes(term.toLowerCase())));
        }
    
        setFilteredData(results);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({ ...filter, [e.target.name]: e.target.checked });
    };

    return (
        <div>
            <h1>Page d'Accueil</h1>
            <div>
                <label>
                    <input  type="checkbox" name="user" checked={filter.user} onChange={handleFilterChange} />
                    User
                </label>
                <label>
                    <input  type="checkbox" name="topic" checked={filter.topic} onChange={handleFilterChange} />
                    Topic
                </label>
                <label>
                    <input  type="checkbox" name="tag" checked={filter.tag} onChange={handleFilterChange} />
                    Tag
                </label>
                <label>
                    <input  type="checkbox" name="category" checked={filter.category} onChange={handleFilterChange} />
                    Category
                </label>
            </div>
            <SearchBar onSearch={handleSearch} onChange={handleChange} />
            {filteredData.length > 0 && <ItemList items={filteredData} />}
        </div>
    );
};

export default MainPage;
