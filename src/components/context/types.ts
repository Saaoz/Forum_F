//Types working with data in front

export type SearchItem = {
  id: number;
  name: string;
};

export type FilterProps = {
  user: boolean;
  topic: boolean;
  tag: boolean;
  category: boolean;
};

export type FilterChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement>
) => void;
//Type working with back-end 

export type User = {
  id: Number;
  username?: String;
  password?: String;
  email?: String;   
  date_registered?: Date; 
  last_login?: Date; 
  is_admin?: Boolean;
  is_banned?: Boolean; 
  is_active?: Boolean;
  avatar?: String;
  bio?: String;
}

export type Category = {
  id: Number;
  name?: String;
  description?: String;
  is_active?: Boolean ;
}

export type Topic = {
  id: Number;
  title?: String;
  description?: String;
  createdBy?: Number;
  dateCreated?: Date;
  categoryId?: Number;
  is_pinned?: Boolean;
  is_closed?: Boolean;
  is_active?: Boolean; 
}

export type Reply = {
  id: Number;
  content?: String;
  createdBy?: Number;
  topicId?: Number;
  dateCreated?: Date;
  is_active?: Boolean;
}

export type UserFavorite = {
  id: Number; 
  userId?: Number; 
  topicId?: Number; 
}

export type Friendship = {
  id: Number; 
  userId1?: Number; 
  userId2?: Number; 
  status?: String; 
}

export type Chat = {
  id: Number;
  userId1?: Number; 
  userId2?: Number; 
}

export type ChatMessage = {
  id: Number;    
  chatId?: Number; 
  content?: String;
  sentBy?: Number; 
  dateSent?: Date;
  is_read?: Boolean; 
}

export type UserNotification = {
  id: Number;    
  userId?: Number; 
  content?: String;
  dateCreated?: Date;
  is_read?: Boolean;  
}

export type ModerationLog = {
  id: Number;
  action?: String;
  description?: String;
  adminId?: Number;
  dateCreated?: Date;
}

export type Tag = {
  id: Number;      
  name?: String;     
}

export type TopicTag = {
  topicId: Number;
  tagId: Number;
  createdAt: Date;
}