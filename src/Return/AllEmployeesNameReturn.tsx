import React from "react";
import { HeaderEmployees, Associate } from "../assets/StylesPages/Home";

interface Employee {
  id: string;
  name: string;
}

interface Props {
  list: Employee[];
}

const AllEmployeesNameReturn: React.FC<Props> = ({ list }) => {
  return (
    <div style={{ flex: "1" }}>
      <HeaderEmployees>
        <p>NOME</p>
      </HeaderEmployees>
      {list.map((main) => (
        <Associate key={main.id}>
          <p>{main.name}</p>
        </Associate>
      ))}
    </div>
  );
};

export default AllEmployeesNameReturn;
