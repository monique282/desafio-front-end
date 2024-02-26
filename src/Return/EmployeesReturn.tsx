import React from "react";
import { Employees, Title } from "../assets/StylesPages/Home";
import SearchContainerReturn from "./SearchContainer";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const EmployeesReturn: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <Employees>
      <Title>Funcionários</Title>
      <SearchContainerReturn search={search} setSearch={setSearch} />
    </Employees>
  );
};

export default EmployeesReturn;
