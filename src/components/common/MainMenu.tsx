import React from "react";
import ListItemWithLink from "./ListItemWithLink";

const MainMenu: React.FC = () => {
  return (
    <div className="menu_main">
      <div className="menu_list_h3link">
        <ListItemWithLink as="h3" name="Top Topic" to="/accueil" />
        <ListItemWithLink as="h3" name="Explorer" to="/randomcategory" />
        <ListItemWithLink as="h3" name="Notification" to="/Notification" />
        <ListItemWithLink as="h3" name="Messages" to="/PrivateMessages" />
        <ListItemWithLink as="h3" name="Favoris" to="/Favoris" />
        <ListItemWithLink as="h3" name="Profil" to="/Profil" />
        <ListItemWithLink as="h3" name="Plus" to="/Plus?" />
      </div>
      <button>Nouveau Topic</button>
    </div>
  );
};

export default MainMenu;
