import { Employee } from "./Employee";

export interface Props {
  list: Employee[];
}

export interface PropsShow {
  list: Employee[];
  setShow: React.Dispatch<React.SetStateAction<number>>;
}

export interface PropsSearch {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
