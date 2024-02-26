import React from "react";
import { HeaderEmployees, Associate } from "../assets/StylesPages/Home";

interface Employee {
  image: string;
}

interface Props {
  list: Employee[];
}

const AllEmployeesPhotographReturn: React.FC<Props> = ({ list }) => {
  return (
    <div style={{ flex: "1", marginLeft: "32px" }}>
      <HeaderEmployees style={{ borderRadius: "5px 0px 0px 0px" }}>
        <p style={{ marginLeft: "12%" }}>FOTO</p>
      </HeaderEmployees>
      {list.map((main, index) => (
        <Associate key={index}>
          <img src={main.image} alt="" />
        </Associate>
      ))}
    </div>
  );
};

export default AllEmployeesPhotographReturn;
