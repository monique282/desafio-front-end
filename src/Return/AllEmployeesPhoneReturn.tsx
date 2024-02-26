import React from "react";
import { HeaderEmployees, Associate } from "../assets/StylesPages/Home";
import formatPhoneNumber from "../Functionality/FormatPhoneNumber";

interface Employee {
  id: string;
  phone: string;
}

interface Props {
  list: Employee[];
}

const AllEmployeesPhoneReturn: React.FC<Props> = ({ list }) => {
  return (
    <div style={{ flex: "1", marginRight: "32px" }}>
      <HeaderEmployees style={{ borderRadius: "0px 5px 0px 0px" }}>
        <p>TELEFONE</p>
      </HeaderEmployees>
      {list.map((main) => (
        <Associate key={main.id}>
          <p>{formatPhoneNumber(main.phone)}</p>{" "}
        </Associate>
      ))}
    </div>
  );
};

export default AllEmployeesPhoneReturn;
