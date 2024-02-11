import React, { useState, useEffect } from 'react';
import SearchFilters from './SearchFilters';
import { FilterProps } from '../context/types';


interface SearchBarProps {
  value?: string;
  placeholder?: string;
  onSearch: (value: string) => void;
  onChange?: (value: string) => void;
  filter: FilterProps;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value = '',
  placeholder = 'Rechercher...',
  onSearch,
  onChange,
  filter,
  onFilterChange,
}) => {
  const [inputValue, setInputValue] = useState<string>(value);


  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(inputValue);
  };



  return (
    <div className='undersearchbar'>
      <SearchFilters filter={filter} onFilterChange={onFilterChange} />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type='submit'>Recherche</button>
      </form>
    </div>
  );
};

export default SearchBar;
