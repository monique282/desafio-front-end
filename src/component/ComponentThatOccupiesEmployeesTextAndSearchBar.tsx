import React from "react";
import { Employees, Title } from "../assets/Styles/Home";
import { PropsSearch } from "../Interface/Props";
import SearchBox from "./SearchBox";

const ComponentThatOccupiesEmployeesTextAndSearchBar: React.FC<PropsSearch> = ({
  search,
  setSearch,
}) => {
  return (
    <Employees>
      <Title>Funcionários</Title>
      <SearchBox search={search} setSearch={setSearch} />
    </Employees>
  );
};

export default ComponentThatOccupiesEmployeesTextAndSearchBar;
