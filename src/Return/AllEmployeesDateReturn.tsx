import React from "react";
import { HeaderEmployees, Associate } from "../assets/StylesPages/Home";

interface Employee {
  id: string;
  admission_date: string;
}

interface Props {
  list: Employee[];
}

const AllEmployeesDateReturn: React.FC<Props> = ({ list }) => {
  return (
    <div style={{ flex: "1" }}>
      <HeaderEmployees>
        <p>DATA DE ADMISSÃO</p>
      </HeaderEmployees>
      {list.map((main) => (
        <Associate key={main.id}>
          <p>{new Date(main.admission_date).toLocaleDateString()}</p>
        </Associate>
      ))}
    </div>
  );
};

export default AllEmployeesDateReturn;
