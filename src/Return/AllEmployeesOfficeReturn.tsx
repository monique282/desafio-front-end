import React from "react";
import { HeaderEmployees, Associate } from "../assets/StylesPages/Home";

interface Employee {
  id: string;
  job: string;
}

interface Props {
  list: Employee[];
}

const AllEmployeesOfficeReturn: React.FC<Props> = ({ list }) => {
  return (
    <div style={{ flex: "1" }}>
      <HeaderEmployees>
        <p>CARGO</p>
      </HeaderEmployees>
      {list.map((main) => (
        <Associate key={main.id}>
          <p>{main.job}</p>
        </Associate>
      ))}
    </div>
  );
};

export default AllEmployeesOfficeReturn;
