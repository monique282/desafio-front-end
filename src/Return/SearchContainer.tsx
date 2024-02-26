import React from "react";
import {
  SearchContainer,
  SearchInput,
  SearchIcon,
} from "../assets/StylesPages/Home";
import { IoMdSearch } from "react-icons/io";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContainerReturn: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <>
      <SearchContainer>
        <SearchInput
          placeholder="Pesquisar"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon>
          <IoMdSearch />
        </SearchIcon>
      </SearchContainer>
    </>
  );
};

export default SearchContainerReturn;
