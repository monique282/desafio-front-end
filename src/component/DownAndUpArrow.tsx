import React from "react";
import { Associate, TableData } from "../assets/Styles/Home";
import ArrowToOpenEmployeeInformation from "./ArrowToOpenEmployeeInformation";
import ArrowToCloseEmployeeInformation from "./ArrowToCloseEmployeeInformation";

const DownAndUpArrow: React.FC<{
  main: { id: string; image: string; name: string };
  openItems: string[];
  toggleItem: (id: string) => void;
}> = ({ main, openItems, toggleItem }) => {
  return (
    <Associate key={main.id}>
      <TableData style={{ width: "80px" }}>
        <img src={main.image} alt="" />
      </TableData>
      <TableData>{main.name}</TableData>
      {openItems.includes(main.id) ? (
        <ArrowToCloseEmployeeInformation id={main.id} toggleItem={toggleItem} />
      ) : (
        <ArrowToOpenEmployeeInformation id={main.id} toggleItem={toggleItem} />
      )}
    </Associate>
  );
};

export default DownAndUpArrow;
