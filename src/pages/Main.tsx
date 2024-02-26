import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import MainMenu from "../components/common/MainMenu";
import "../style/Main.css";
import ListItemWithLink from "../components/common/ListItemWithLink";
import TopicsItem from "../components/common/TopicsItem";
import { fetchAllTopics } from "../api/Topics";
import { Topic } from "../components/context/types";

const MainPage: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const getTopics = async() => {
      try {
        const data = await fetchAllTopics();
        setTopics(data)
      } catch (error) {
        console.error(error)
      }      
    };
    getTopics();
  }, []);

  return (
    <>
      <Header />
      <div className="body_main">
        <MainMenu />
        <div className="main_central">
          <div className="header_body">
            <h4>Top topic</h4>
            <h4>Responses</h4>
            <h4>Activité</h4>
          </div>
          {topics.map((topic, index) => (
            <TopicsItem key={`item-${topic.id}-${index}`} id={topic.id} title={topic.title} index={index} />
          ))}
        </div>
        <div>
        <div className="menu top_category">
            <h3>Top catégorie</h3>
            {/* {categoryData.slice(0,7).map((item) => (
              <ListItemWithLink key={item.id} name={item.name} to={`/`} />
            ))} */}
        </div>
        <div className="menu top_tags">
            <h3>Top Tags</h3>
            {/* {tagData.slice(0,7).map((item) => (
              <ListItemWithLink key={item.id} name={item.name} to={`/`} />
            ))} */}
        </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
