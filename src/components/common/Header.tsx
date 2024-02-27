import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { FilterProps, SearchItem } from "../context/types";
import "../../style/Header.css";
import ListItemWithLink from "./ListItemWithLink";
import { fetchUserByName } from "../../api/User";
import { fetchTopicByTitle } from "../../api/Topics";
import { fetchCategoryByName } from "../../api/Category";
import { fetchTagByName } from "../../api/Tags";

const Header: React.FC = () => {
  const [message, setMessage] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<SearchItem[]>([]);
  const [filter, setFilter] = useState<FilterProps>({
    user: false,
    topic: false,
    tag: false,
    category: false,
  });

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
  
    if (term.length < 3) {
      setFilteredData([]);
      return;
    }
  
    let results: SearchItem[] = [];

    if (filter.user) {
      try {
        const users = await fetchUserByName(term);
        if (users.length > 0) {
      const  userSearchItems = (users.map((u) => ({ id: u.id, name: u.username || "" })));
      results = results.concat(userSearchItems);  
        } 
      } catch (error) {
          console.error("error from filterTopics", error);
        }
    } 

    if (filter.topic) {
      try {
        const topics = await fetchTopicByTitle(term);
        if (topics.length > 0) {
      const  topicSearchItems = (topics.map((t) => ({ id: t.id, name: t.title || "" })));
      results = results.concat(topicSearchItems);  
        }
      } catch (error) {
          console.error("error from filterTopics", error);
        }
    } 
    
    if (filter.tag) {
      try {
        const tags = await fetchTagByName(term);
        if (tags.length > 0) {
      const  tagSearchItems = (tags.map((t) => ({ id: t.id, name: t.name || "" })));
      results = results.concat(tagSearchItems);  
        } else { void(results)}
      } catch (error) {
          console.error("error from filterTags", error);
        }
    } 

    if (filter.category) {
      try {
        const categories = await fetchCategoryByName(term);
        if (categories.length > 0) {
          const categorySearchItems = categories.map((c) => ({ id: c.id, name: c.name || "" }));
          results = results.concat(categorySearchItems);
        } 
      } catch (error) {
        console.error("error from filterCategory", error);
      }
    }
  
    if (results.length === 0) {
      setFilteredData([]);
      setMessage("Aucun résultat trouvé");
    } else {
      setFilteredData(results);
      setMessage("");
    }
    
  };

  const handleChange = (term: string) => {
    setSearchTerm(term);
    if (term.length >= 3) {
      handleSearch(term);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.target.name]: e.target.checked });
  };

  return (
    <header>
      <div className="logo">Logo</div>
      <div className="searchbar">
        <SearchBar
          onSearch={handleSearch}
          onChange={handleChange}
          filter={filter}
          onFilterChange={handleFilterChange}
        />
        {filteredData.map((item, index) => (
  <ListItemWithLink
    key={`item-${item.id}-${index}`} name={item.name} to={`/`} index={index} 
  />
))}
  {message && <div className="search-message">{message}</div> }
      </div>
      <div className="profile">Profil</div>
    </header>
  );
};

export default Header;