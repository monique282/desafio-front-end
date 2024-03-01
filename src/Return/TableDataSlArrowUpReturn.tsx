import { TableData } from "../assets/Styles/Home";
import React from "react";
import { SlArrowUp } from "react-icons/sl";

const TableDataSlArrowUpReturn: React.FC<{
  id: string;
  toggleItem: (id: string) => void;
}> = ({ id, toggleItem }) => {
  return (
    <TableData style={{ width: "30px" }}>
      {" "}
      <SlArrowUp
        style={{ color: "#594ed2" }}
        onClick={() => {
          toggleItem(id);
        }}
      />
    </TableData>
  );
};

export default TableDataSlArrowUpReturn;
