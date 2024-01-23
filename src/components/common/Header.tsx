import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ItemList from "./ItemList";
import { FilterProps, SearchItem } from "../context/types";
import { categoryData, tagData, topicData, userData } from "../../api/Data";


const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<SearchItem[]>([]);
  const [filter, setFilter] = React.useState<FilterProps>({
    user: false,
    topic: false,
    tag: false,
    category: false,
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);

    if (term.length < 3) {
      setFilteredData([]);
      return;
    }

    let results: SearchItem[] = [];
    if (filter.user)
      results = results.concat(
        userData.filter((item) =>
          item.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    if (filter.topic)
      results = results.concat(
        topicData.filter((item) =>
          item.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    if (filter.tag)
      results = results.concat(
        tagData.filter((item) =>
          item.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    if (filter.category)
      results = results.concat(
        categoryData.filter((item) =>
          item.name.toLowerCase().includes(term.toLowerCase())
        )
      );

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
    const noFilterSelected = Object.values(filter).every(
      (value) => value === false
    );

    if (noFilterSelected) {
      // Si aucun filtre n'est sélectionné, recherche dans toutes les catégories
      results = results
        .concat(userData)
        .concat(topicData)
        .concat(tagData)
        .concat(categoryData)
        .filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
    } else {
      // Sinon, filtre en fonction des filtres sélectionnés
      if (filter.user)
        results = results.concat(
          userData.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
          )
        );
      if (filter.topic)
        results = results.concat(
          topicData.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
          )
        );
      if (filter.tag)
        results = results.concat(
          tagData.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
          )
        );
      if (filter.category)
        results = results.concat(
          categoryData.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
          )
        );
    }

    setFilteredData(results);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.target.name]: e.target.checked });
  };

  return (
    <div>
    <SearchBar
      onSearch={handleSearch}
      onChange={handleChange}
      filter={filter} 
      onFilterChange={handleFilterChange}
    />
    {filteredData.length > 0 && <ItemList items={filteredData} />}
  </div>
  );
};

export default Header;
