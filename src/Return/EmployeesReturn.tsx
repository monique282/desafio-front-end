import React from "react";
import { Employees, Title } from "../assets/Styles/Home";
import SearchContainerReturn from "./SearchContainer";
import { PropsSearch } from "../Interface/Props";

const EmployeesReturn: React.FC<PropsSearch> = ({ search, setSearch }) => {
  return (
    <Employees>
      <Title>Funcionários</Title>
      <SearchContainerReturn search={search} setSearch={setSearch} />
    </Employees>
  );
};

export default EmployeesReturn;
