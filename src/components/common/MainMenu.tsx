import React from "react";
import H3WithLink from "./H3WithLink";

const MainMenu: React.FC = () => {
  return (
    <div className="menu_main">
      <div className="menu_list_h3link">
        <H3WithLink name="Top Topic" to="/accueil" />
        <H3WithLink name="Explorer" to="/randomcategory" />
        <H3WithLink name="Notification" to="/Notification" />
        <H3WithLink name="Messages" to="/PrivateMessages" />
        <H3WithLink name="Favoris" to="/Favoris" />
        <H3WithLink name="Profil" to="/Profil" />
        <H3WithLink name="Plus" to="/Plus?" />
      </div>
      <button>Nouveau Topic</button>
    </div>
  );
};

export default MainMenu;
