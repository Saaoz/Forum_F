import React, { useState, useEffect } from 'react';

interface SearchBarProps {
    value?:string;
    placeholder?:string;
    onSearch: (value: string) => void;
    onChange?: (value: string) => void;
}

// Component need to start with maj or typescript will not understand what we doing and we get a lot of error
const SearchBar: React.FC<SearchBarProps> = ({ value = '', placeholder = "Rechercher...", onSearch, onChange }) => {
    const [inputValue, setInputValue] = useState<string>(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onChange?.(e.target.value);
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(inputValue);
      };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder={placeholder} value={inputValue} onChange={handleInputChange} />
            <button type='submit'>Recherche</button>
        </form>
    )
}




export default SearchBar;