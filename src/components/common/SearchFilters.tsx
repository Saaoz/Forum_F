import React from "react";
import { FilterProps, FilterChangeHandler } from '../context/types'; // Ajuste le chemin d'importation selon ta structure de fichiers

interface SearchFiltersProps {
  filter: FilterProps;
  onFilterChange: FilterChangeHandler;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filter, onFilterChange }) => {

    return (
        <div className="boxlist">
          <label className="boxitem">
            <input type="checkbox" name="user" checked={filter.user} onChange={onFilterChange} />
            User
          </label>
          <label className="boxitem">
            <input type="checkbox" name="topic" checked={filter.topic} onChange={onFilterChange} />
            Topic
          </label>
          <label className="boxitem">
            <input type="checkbox" name="tag" checked={filter.tag} onChange={onFilterChange} />
            Tag
          </label>
          <label className="boxitem">
            <input type="checkbox" name="category" checked={filter.category} onChange={onFilterChange} />
            Category
          </label>
        </div>
      );
    };

export default SearchFilters;