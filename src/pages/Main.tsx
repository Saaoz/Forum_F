import React from "react";
import Header from "../components/common/Header";
import MainMenu from "../components/common/MainMenu";
import "../style/Main.css";
import { TopicsData, categoryData, tagData } from "../api/Data";
import ListItemWithLink from "../components/common/ListItemWithLink";
import TopicsItem from "../components/common/TopicsItem";

const MainPage: React.FC = () => {


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
          {TopicsData.slice(0,15).map((data) => (
            <TopicsItem id={data.id} title={data.title} reply={data.reply} activity={data.activity} to={`/`} />
          ))}
          <div className="body_body">
            <div className="titre_tag">
              <h5>Titre du topic</h5>
              
            </div>
            <h5>25</h5>
            <h5>1h</h5>
          </div>
          <div className="body_body">
            <div className="titre_tag">
              <h5>Titre du topic</h5>
            </div>
            <h5>25</h5>
            <h5>1h</h5>
          </div>
        </div>
        <div>
        <div className="menu top_category">
            <h3>Top catégorie</h3>
            {categoryData.slice(0,7).map((item) => (
              <ListItemWithLink key={item.id} name={item.name} to={`/`} />
            ))}
        </div>
        <div className="menu top_tags">
            <h3>Top Tags</h3>
            {tagData.slice(0,7).map((item) => (
              <ListItemWithLink key={item.id} name={item.name} to={`/`} />
            ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
