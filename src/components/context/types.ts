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
  id: number;
  username?: string;
  password?: string;
  email?: string;   
  date_registered?: Date; 
  last_login?: Date; 
  is_admin?: boolean;
  is_banned?: boolean; 
  is_active?: boolean;
  avatar?: string;
  bio?: string;
}

export type Category = {
  id: number;
  name?: string;
  description?: string;
  is_active?: boolean ;
}

export type Topic = {
  id: number;
  title?: string;
  description?: string;
  createdBy?: number;
  dateCreated?: Date;
  categoryId?: number;
  is_pinned?: boolean;
  is_closed?: boolean;
  is_active?: boolean; 
}

export type Reply = {
  id: number;
  content?: string;
  createdBy?: number;
  topicId?: number;
  dateCreated?: Date;
  is_active?: boolean;
}

export type UserFavorite = {
  id: number; 
  userId?: number; 
  topicId?: number; 
}

export type Friendship = {
  id: number; 
  userId1?: number; 
  userId2?: number; 
  status?: string; 
}

export type Chat = {
  id: number;
  userId1?: number; 
  userId2?: number; 
}

export type ChatMessage = {
  id: number;    
  chatId?: number; 
  content?: string;
  sentBy?: number; 
  dateSent?: Date;
  is_read?: boolean; 
}

export type UserNotification = {
  id: number;    
  userId?: number; 
  content?: string;
  dateCreated?: Date;
  is_read?: boolean;  
}

export type ModerationLog = {
  id: number;
  action?: string;
  description?: string;
  adminId?: number;
  dateCreated?: Date;
}

export type Tag = {
  id: number;      
  name?: string;     
}

export type TopicTag = {
  topicId: number;
  tagId: number;
  createdAt: Date;
}