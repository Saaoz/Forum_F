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
