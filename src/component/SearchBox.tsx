import { PropsSearch } from "../Interface/Props";
import {
  SearchContainer,
  SearchInput,
  SearchIcon,
} from "../assets/Styles/Home";
import { IoMdSearch } from "react-icons/io";

const SearchBox: React.FC<PropsSearch> = ({ setSearch, search }) => {
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

export default SearchBox;
