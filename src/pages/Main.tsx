import React from "react";
import Header from "../components/common/Header";
import MainMenu from "../components/common/MainMenu";
import "../style/Main.css";

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
          <div className="body_body">
            <div className="titre_tag">
              <h5>Titre du topic</h5>
              <div className="tag_list">
                <h6>tag 1</h6>
                <h6>tag 2</h6>
                <h6>tag 3</h6>
              </div>
            </div>
            <h5>25</h5>
            <h5>1h</h5>
          </div>
          <div className="body_body">
            <div className="titre_tag">
              <h5>Titre du topic</h5>
              <div className="tag_list">
                <h6>tag 1</h6>
                <h6>tag 2</h6>
                <h6>tag 3</h6>
              </div>
            </div>
            <h5>25</h5>
            <h5>1h</h5>
          </div>
          <div className="body_body">
            <div className="titre_tag">
              <h5>Titre du topic</h5>
              <div className="tag_list">
                <h6>tag 1</h6>
                <h6>tag 2</h6>
                <h6>tag 3</h6>
              </div>
            </div>
            <h5>25</h5>
            <h5>1h</h5>
          </div>
        </div>
        <div>
        <div className="menu_top_category">
            <h3>Top catégorie</h3>
            <ul>
              <li>Cat 1</li>
              <li>Cat 2</li>
              <li>Cat 3</li>
              <li>Cat 4</li>
              <li>Cat 5</li>
            </ul>
        </div>
        <div className="menu_top_tags">
            <h3>Top Tags</h3>
            <ul>
              <li>Tags 1</li>
              <li>Tags 2</li>
              <li>Tags 3</li>
              <li>Tags 4</li>
              <li>Tags 5</li>
            </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
