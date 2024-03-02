import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import MainMenu from "../components/common/MainMenu";
import "../style/Main.css";
import ListItemWithLink from "../components/common/ListItemWithLink";
import TopicsItem from "../components/common/TopicsItem";
import { Category, Tag, TopicWithReplyDetails } from "../components/context/types";
import { fetchTop10Category } from "../api/Category";
import { fetchTop10Tag } from "../api/Tags";
import { allTopTopicsWithReplyCount } from "../api/Topics";

const MainPage: React.FC = () => {
  const [topicsWithReplies, setTopicsWithReplies] = useState<TopicWithReplyDetails[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const getTopicsAndReplies = async () => {
      const topics = await allTopTopicsWithReplyCount();
      setTopicsWithReplies(topics);
    };

    const loadCategories = async () => {
      const categoryData = await fetchTop10Category();
      setCategories(categoryData);
    };

    const loadTags = async () => {
      const tagData = await fetchTop10Tag();
      setTags(tagData);
    };

    getTopicsAndReplies();
    loadCategories();
    loadTags();
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
          {topicsWithReplies.map((topic, index) => (
            <TopicsItem 
              key={`topic-${topic.id}-${index}`}
              id={topic.id}
              title={topic.title}
              replyCount={topic.replyCount}
              lastActivity={topic.lastActivity}
            />
          ))}
        </div>
        <div>
          <div className="menu top_category">
            <h3>Top catégorie</h3>
            {categories.map((category, index) => (
              <ListItemWithLink key={`category-${category.id}-${index}`} name={category.name} to={`/`} index={index} />
            ))}
          </div>
          <div className="menu top_tags">
            <h3>Top Tags</h3>
            {tags.map((tag, index) => (
              <ListItemWithLink key={`tag-${tag.id}-${index}`} name={tag.name} to={`/`} index={index} />
            ))}  
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
